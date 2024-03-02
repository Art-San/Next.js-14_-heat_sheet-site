import React, { ReactNode } from 'react'

type CardWrapperProps = {
  children: ReactNode
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-3 bg-white shadow rounded-lg p-4 my-2">
      {children}
    </div>
  )
}

export default CardWrapper
