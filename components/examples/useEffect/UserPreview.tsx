// import { mainInstance } from '@/api';
// import { User, UserId } from '@/types/user.types'

// import { ReactNode, useEffect, useState } from 'react'

// const UserPreview = ({ id, message }: { id: UserId; message?: ReactNode }) => {
//   const { user, setUser } = useState<User>()

//   useEffect(() => {
//     mainInstance.get(`/user/${id}`).then((r) => setUser(r.data))
//   }, [id])

//   return <div className="px-5 py-3 rounded-lg border border-gray-300"></div>
// }

// export default UserPreview

// UserPreview.tsx

import { mainInstance } from '@/api'
import { IUser, UserId } from '@/types/user.types'

import { ReactNode, useEffect, useState } from 'react'

const UserPreview = ({ id, message }: { id: UserId; message?: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    // Выполняем запрос к внешнему источнику
    mainInstance
      .get<IUser>(`/users/${id}`)
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.error('Error fetching user:', error)
      })
  }, [id]) // Зависимость от id, чтобы повторно выполнить запрос при изменении id

  return (
    <div className="px-5 py-3 rounded-lg border border-gray-300">
      {message && <p>{message}</p>}
      {user && (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>
            {user.address.street}, {user.address.city}, {user.address.zipcode}
          </p>
          {/* Дополнительные поля пользователя */}
        </>
      )}
    </div>
  )
}

export default UserPreview
