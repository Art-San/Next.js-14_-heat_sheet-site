'use client'
import { FC, useDeferredValue, useEffect, useState } from 'react'
import { mainInstance } from '@/api'
import { IUser } from '@/types/user.types'
import UserPreview from './UserPreview'

import UserListItem from './User-item'

const UsersList: FC = () => {
  const [users, setUsers] = useState<IUser[]>()
  const [filters, setFilters] = useState()
  const [selectedUserId, setSelectedUserId] = useState(1)

  useEffect(() => {
    mainInstance
      .get<IUser[]>(`/users`)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.error('Error fetching user:', error)
      })
  }, [])

  console.log(11, users)

  // const deferredFilters = useDeferredValue(filters)

  // const filteredUsers = users?.filter((user) =>
  //   user.name
  //     .toLowerCase()
  //     .includes(deferredFilters?.search?.toLowerCase() ?? '')
  // )

  return (
    <div className=" flex flex-col gap-2">
      <div className=" text-center">
        <h1 className=" text-lg">Борьба с гонками (race conditions)</h1>
      </div>
      <div className="flex">
        <div className="">
          {users &&
            users.map((user) => (
              <UserListItem
                key={user.id}
                user={user}
                selected={selectedUserId === user.id}
                onClick={() => setSelectedUserId(user.id)}
              />
            ))}
        </div>
        {selectedUserId && <UserPreview id={selectedUserId} />}
      </div>
    </div>
  )
}

export default UsersList
