import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        Login:builder.mutation({
            query:(data)=>({
                url:'/auth/login',
                method:"POST",
                body:data
            })
        }),
        getAllUsers:builder.query({
            query:()=>({
                url:'/auth/user',
                method:"GET",
            })
        })
    })
})

export const {useLoginMutation,useGetAllUsersQuery} = authApi