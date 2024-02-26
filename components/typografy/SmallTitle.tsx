import React, { ReactNode } from 'react'
interface ISmallTitleProps {
  children: ReactNode
}
const SmallTitle: React.FC<ISmallTitleProps> = ({ children }) => {
  return <h5 className=" font-bold text-lg">{children}</h5>
}

export default SmallTitle
