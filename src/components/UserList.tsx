import { useEffect } from 'react'
import { useActions } from './hooks/useAction'
import { useTypesSelector } from './hooks/useTypesSelector'

const UserList: React.FC = () => {
   const { users, error, loading } = useTypesSelector((state) => state.user)
   const { fetchUsers } = useActions()

   useEffect(() => {
      fetchUsers()
   }, [fetchUsers])

   if (loading) {
      return <h1>Loading....</h1>
   }
   if (error) {
      return <h1>{error}</h1>
   }

   return (
      <div>
         {users.map((user) => (
            <div key={user.id}>{user.name}</div>
         ))}
      </div>
   )
}

export default UserList
