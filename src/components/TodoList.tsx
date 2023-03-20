import React, { useEffect } from 'react'
import { useActions } from './hooks/useAction'
import { useTypesSelector } from './hooks/useTypesSelector'

const TodoList: React.FC = () => {
   const { page, error, loading, todos, limit } = useTypesSelector(
      (state) => state.todo
   )
   const { fetchTodo, setTodoPage } = useActions()
   const pages = [1, 2, 3, 4, 5]

   useEffect(() => {
      fetchTodo(page, limit)
   }, [page])

   if (loading) {
      return <h1>Loading....</h1>
   }
   if (error) {
      return <h1>{error}</h1>
   }
   return (
      <div>
         {todos.map((todo) => (
            <div key={todo.id}>
               {todo.id} - {todo.title}
               <div>
                  {pages.map((p) => (
                     <div
                        onClick={() => setTodoPage(p)}
                        style={{
                           border:
                              p === page ? '1px solid green' : '1px solid gray',
                           padding: 10,
                        }}
                     >
                        {p}
                     </div>
                  ))}
               </div>
            </div>
         ))}
      </div>
   )
}

export default TodoList
