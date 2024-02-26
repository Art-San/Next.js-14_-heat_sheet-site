import React, { ReactNode } from 'react'

type CardWrapperProps = {
  children: ReactNode
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
  return <div className="bg-white shadow rounded-lg p-4 my-2">{children}</div>
}

export default CardWrapper
