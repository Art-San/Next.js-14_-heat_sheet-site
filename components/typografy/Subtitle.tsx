import React, { ReactNode } from 'react'

type SubtitleProps = {
  children: ReactNode
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return (
    <div className="flex justify-center mt-8">
      <h3 className=" text-[22px] font-semibold">{children}</h3>
    </div>
  )
}

export default Subtitle
