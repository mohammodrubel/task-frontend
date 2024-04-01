import baseApi from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllProduct:builder.query({
            query:()=>({
                url:'/product',
                method:"GET"
            }),
            providesTags: ["product"],
        }),
        createProduct:builder.mutation({
            query:(data)=>({
                url:'/product/create-product',
                method:"POST",
                body:data
            }),
            invalidatesTags: ["product"],
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `/product/${data.id}`, // Corrected URL template
                method: "PUT",
                body: data.data
            }),
            invalidatesTags: ["product"],
        }),
        deleteProduct:builder.mutation({
            query:(id)=>({
                url:`/product/${id}`,
                method:"DELETE",
            }),
            invalidatesTags: ["product"],
        }),
        
    })
})

export const {useCreateProductMutation,useUpdateProductMutation,useGetAllProductQuery,useDeleteProductMutation} = productApi