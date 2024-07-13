// ui/user-item.tsx

import React from 'react'

interface UserListItemProps {
  user: any // Замените `any` на более конкретный тип, если возможно
  selected: boolean
  onClick: () => void
}

const UserListItem: React.FC<UserListItemProps> = ({
  user,
  selected,
  onClick
}) => {
  return (
    <button
      className={`w-[230px] px-4 py-2 ${
        selected ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
      } flex justify-between`}
      onClick={onClick}
    >
      <span>{user.name}</span>
      {selected && <span className="">{user.id}</span>}
    </button>
  )
}

export default UserListItem
