'use client'
import Spinner from '@/components/ui/spinner'
import { useEffect, useState } from 'react'

interface IUser {
  id: number
  name: string
}

const FetchUser = () => {
  const [users, setUsers] = useState<IUser[]>()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setUsers(json))
  }, [])
  if (!users) {
    return (
      <>
        <Spinner />
        <h1 className=" text-lg font-bold text-orange-700">Loading...</h1>
      </>
    )
  }
  return (
    <ul>
      {users?.map((user: IUser) => (
        <li key={user.id} className="text-sm">
          {user.name}
        </li>
      ))}
    </ul>
  )
}
export default FetchUser
