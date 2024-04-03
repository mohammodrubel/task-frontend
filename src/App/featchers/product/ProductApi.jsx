import baseApi from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllProduct:builder.query({
            query:(args)=>{
                const params = new URLSearchParams()
                    if(args){
                        args.forEach((item)=>{
                            params.append(item.name,item.value)
                        })
                    }
                return{
                    url:'/product',
                    method:"GET",
                    params:params
                }
            },
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
        productApproved: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: `/product/${data.id}`, 
                    method: "PATCH",
                    body: data.data
                };
            },
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

export const {useCreateProductMutation,useProductApprovedMutation,useUpdateProductMutation,useGetAllProductQuery,useDeleteProductMutation} = productApi