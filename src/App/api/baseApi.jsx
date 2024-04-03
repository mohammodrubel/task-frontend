import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {logout, setUser} from '../featchers/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl:'https://authintication-backend.vercel.app',
    credentials:'include',
    prepareHeaders:(headers,{getState})=>{
        const token = getState().auth.token
        if(token){
            headers.set('authorization',`${token}`)
        }
        return headers
    }
})

const customBaseQuery = async(args,api,extraOptions)=>{
    let result = await baseQuery(args,api,extraOptions)
        if(result?.error?.status === 401){
            console.log('sending refresh token')
            // send refresh token 
            const res = await fetch(`https://authintication-backend.vercel.app/auth/refresh-token`,{
                method:"POST",
                credentials: 'include',
            })
            const user = api.getState().auth.user
            const data =await res.json()
            if(data?.data?.data?.accessToken){
                api.dispatch(
                    setUser({
                        user,
                        token:data?.data?.data?.accessToken
                    })
                )
              result =  await baseQuery(args,api,extraOptions)
            }else{
                api.dispatch(logout())
            }
            
        }
    return result
}
const baseApi = createApi({
    reducerPath:'api',
    baseQuery:customBaseQuery,
    endpoints:()=>({})
})

export default baseApi