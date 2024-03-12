import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
      reducerPath: 'baseApi',
      baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
      tagTypes: ["todo"],
      endpoints: (builder)=> ({
        getTodo: builder.query({
            query: (priority)=>  {
                const params = new URLSearchParams()
                if(priority){
                  params.append('priority',priority)
                }
                return {
                    url: `/tasks`,
                    method:'GET',
                    params: params
                }
               },
            providesTags: ['todo'],
        }),
        addTodo: builder.mutation({
            query: (data)=> {
                console.log(data.object)
               return { url: '/task',
               method:'POST',
               body: data,}

            },
            invalidatesTags: ['todo']
        }),
        updateTodo: builder.mutation({
            query: (data)=> {
                console.log("chackbok update",data.object)
               return { url: `/task/${data.id}`,
               method:'PUT',
               body: data.data,}

            },
            invalidatesTags: ['todo']
        }),
            deleteTodo: builder.mutation({
            query: (_id)=> {
               return { url: `task/${_id}`,
               method:'DELETE'
            }
            },
            invalidatesTags: ['todo']
        }),
      })
})
export const { useGetTodoQuery,useAddTodoMutation,useDeleteTodoMutation,useUpdateTodoMutation} = baseApi