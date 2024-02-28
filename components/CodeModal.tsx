// 'use client'
// // import axios from 'axios'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle
// } from '@/components/ui/dialog'
// import { useProModal } from '@/hooks/use-pro-modal'

// import Image from 'next/image'
// import { useState } from 'react'

// interface ICodeModalProps {
//   path?: string
// }

// const CodeModal = () => {
//   const proModal = useProModal()
//   return (
//     <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
//       <DialogContent >
//         <DialogHeader>
//           <DialogTitle className=" flex justify-center items-center flex-col gap-y-4 pb-2">
//             <div className=" ">Upgrade to Genius</div>
//           </DialogTitle>
//           <DialogDescription className=" text-center pt-2 space-y-2 text-zinc-900 font-medium">
//             hjjkkkkk
//           </DialogDescription>
//         </DialogHeader>
//         <div className="  h-[700px] w-[500]">
//           {/* <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg"> */}
//           <Image
//             // src={path}
//             src={'/images/useState.png'}
//             alt="car model"
//             fill
//             priority
//             className=""
//           />
//         </div>
//         <DialogFooter>rgregege</DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }

// export default CodeModal
