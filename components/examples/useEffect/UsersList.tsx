import { FC, useDeferredValue, useEffect, useState } from 'react'
import { Layout } from './ui/layout'
import { mainInstance } from '@/api'
import { IUser } from '@/types/user.types'
import UserPreview from './UserPreview'

const UsersList: FC = () => {
  const [users, setUsers] = useState<IUser[]>()
  const [filters, setFilters] = useState()
  const [selectedUserId, setSelectedUserId] = useState()

  useEffect(() => {
    mainInstance.get<IUser[]>('/user').then((r) => setUsers(r.data))
  }, [])

  const deferredFilters = useDeferredValue(filters)

  const filteredUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(deferredFilters.search?.toLowerCase() ?? '')
  )

  return (
    <Layout
      preview={
        selectedUserId && (
          <UserPreview
            id={selectedUserId}
            /*message={<UserMessages id={selectedUserId}/>}*/
          />
        )
      }
      items={filteredUsers.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          selected={selectedUserId === user.id}
          onClick={() => setSelectedUserId(user.id)}
        />
      ))}
      filters={<Filters filters={filters} onChangeFilters={setFilters} />}
    />
  )
}

export default UsersList
