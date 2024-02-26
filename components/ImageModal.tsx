'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface ImageModalProps {
  path: string
  path500: string
}

const ImageModal: React.FC<ImageModalProps> = ({ path500, path }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(!isOpen)
  }

  const closeModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Image
        onClick={openModal}
        className="cursor-pointer w-auto h-auto"
        src={path500}
        alt="your alt text"
        width="110"
        height="110"
        priority
      />

      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed w-full h-full top-0 left-0 z-10 flex items-center justify-center"
        >
          {/* <div className="absolute w-full h-full  "></div> */}

          <Image
            className="w-auto max-w-[100%] h-auto max-h-[100%] p-3"
            src={path}
            alt="your alt text"
            width="1000"
            height="1000"
          />
        </div>
      )}
    </div>
    // <div className="flex items-center justify-center">
    //   <Image
    //     onClick={openModal}
    //     className="cursor-pointer"
    //     // className="cursor-pointer w-16 h-16"
    //     src={'/images/useState.png'}
    //     alt="Your Image"
    //     width="200"
    //     height="200"
    //   />

    //   {isOpen && (
    //     <div
    //       className="fixed z-10 inset-0 overflow-y-auto"
    //       aria-labelledby="modal-title"
    //       role="dialog"
    //       aria-modal="true"
    //       onClick={closeModal}
    //     >
    //       <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

    //         <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
    //         <span
    //           className="hidden sm:inline-block sm:align-middle sm:h-screen"
    //           aria-hidden="true"
    //         >
    //           &#8203;
    //         </span>

    //         <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform sm:align-middle sm:max-w-lg sm:w-full">
    //           <Image
    //             className=""
    //             // className="w-full"
    //             src={'/images/useState.png'}
    //             alt="Your Image"
    //             width="1000"
    //             height="1000"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
  )
}

export default ImageModal

// import { useState } from "react";

// function ImageModal() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

// return (
//   <div>
//     <img
//       onClick={openModal}
//       className="w-16 h-16 cursor-pointer"
//       src="your-image-url"
//       alt="your alt text"
//     />

//     {isOpen && (
//       <div
//         onClick={closeModal}
//         className="fixed w-full h-full top-0 left-0 flex items-center justify-center"
//       >
//         <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>

//         <img
//           className="w-auto max-w-[100%] h-auto max-h-[100%] p-3"
//           src="your-image-url"
//           alt="your alt text"
//         />
//       </div>
//     )}
//   </div>
//  );
// }

// export default ImageModal;
