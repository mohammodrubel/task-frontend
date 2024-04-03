import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllUsers:builder.query({
            query:()=>({
                url:'/auth/user',
                method:"GET",
            }),
            providesTags: ["UserData"],
        }),
        createUser:builder.mutation({
            query:(data)=>({
                url:'/auth/create-user',
                method:"POST",
                body:data
            }),
            invalidatesTags: ["UserData"]
        }),
        Login:builder.mutation({
            query:(data)=>({
                url:'/auth/login',
                method:"POST",
                body:data
            }),
            invalidatesTags: ["UserData"]
        }),
        deleteUsers:builder.mutation({
            query:(id)=>({
                url:`/auth/user/${id}`,
                method:"DELETE",
            }),
            invalidatesTags: ["UserData"]
        })
    })
})

export const {useLoginMutation,useGetAllUsersQuery,useCreateUserMutation,useDeleteUsersMutation} = authApi