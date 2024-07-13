import { mainInstance } from '@/api'
import { IUser, UserId } from '@/types/user.types'
import { ReactNode, useEffect, useState } from 'react'

const UserPreview = ({ id, message }: { id: UserId; message?: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    let active = true

    mainInstance.get<IUser>(`/users/${id}`).then((r) => {
      if (active) {
        setUser(r.data)
      }
    })

    return () => {
      active = false // Обнуляем флаг при размонтировании компонента
    }
  }, [id])

  if (!user) {
    return null
  }

  return (
    <div className="w-[280px] h-[130px] px-5 py-3 rounded-lg border border-gray-300">
      <div>
        <div>
          {user.name}: {user.id}
        </div>
        <div>{user.email}</div>
      </div>
    </div>
  )
}

export default UserPreview
// import { mainInstance } from '@/api'
// import { IUser, UserId } from '@/types/user.types'
// import { ReactNode, useEffect, useRef, useState } from 'react'

// const UserPreview = ({ id, message }: { id: UserId; message?: ReactNode }) => {
//   const [user, setUser] = useState<IUser | null>(null)

//   const fetchingUserId = useRef<UserId>()

//   useEffect(() => {
//     fetchingUserId.current = id
//     mainInstance
//       .get<IUser>(`/users/${id}`)
//       .then((response) => {
//         if (fetchingUserId.current === id) {
//           setUser(response.data)
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching user:', error)
//       })
//   }, [id])

//   if (!user) {
//     return null
//   }

//   return (
//     <div className="w-[280px] h-[130px] px-5 py-3 rounded-lg border border-gray-300">
//       <div>
//         <div>
//           {user.name}: {user.id}
//         </div>
//         <div>{user.email}</div>
//       </div>
//     </div>
//   )
// }

// export default UserPreview
