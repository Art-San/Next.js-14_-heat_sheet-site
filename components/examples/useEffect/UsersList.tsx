'use client'
import { FC, useDeferredValue, useEffect, useState } from 'react'
import { mainInstance } from '@/api'
import { IUser } from '@/types/user.types'
import UserPreview from './UserPreview'

import UserListItem from './User-item'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import {
  raceConditionsAbortController,
  raceConditionsCleanFun,
  raceConditionsUseRef,
  raceConditions_1
} from '@/lib/data/hooks/useEffect/data'

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

  // const deferredFilters = useDeferredValue(filters)

  // const filteredUsers = users?.filter((user) =>
  //   user.name
  //     .toLowerCase()
  //     .includes(deferredFilters?.search?.toLowerCase() ?? '')
  // )

  return (
    <div className="">
      <div className=" flex flex-col gap-2 mt-3">
        <h3 className=" text-lg font-semibold text-blue-400">
          Борьба с гонками (race conditions)
        </h3>

        <div className="p-3 flex gap-5 h-[430px] border">
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

      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            код
          </AccordionTrigger>
          <AccordionContent className="text-[18px] ">
            <CodeHighlighting data={raceConditions_1} variant={'large'} />
            <div className="">
              <h4 className=" text-red-400">С помощью UseRef</h4>
              <CodeHighlighting
                data={raceConditionsUseRef}
                variant={'medium'}
              />
            </div>
            <div className="">
              <h4 className=" text-red-400">С помощью Функция очистки</h4>
              <CodeHighlighting
                data={raceConditionsCleanFun}
                variant={'medium'}
              />
            </div>
            <div className="">
              <h4 className=" text-red-400">
                С помощью AbortController, GPT написал
              </h4>
              <CodeHighlighting
                data={raceConditionsAbortController}
                variant={'medium'}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default UsersList
// 'use client'
// import { FC, useEffect, useState } from 'react'
// import { mainInstance } from '@/api'
// import { IUser } from '@/types/user.types'
// import UserPreview from './UserPreview'

// import UserListItem from './User-item'
// import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
// import { raceConditions_1 } from '@/lib/data/hooks/useEffect/data'

// const UsersList: FC = () => {
//   const [users, setUsers] = useState<IUser[]>()
//   const [selectedUserId, setSelectedUserId] = useState(1)

//   useEffect(() => {
//     mainInstance
//       .get<IUser[]>(`/users`)
//       .then((response) => {
//         setUsers(response.data)
//       })
//       .catch((error) => {
//         console.error('Error fetching user:', error)
//       })
//   }, [])

//   return (
//     <div className="">
//       <div className=" flex flex-col gap-2 mt-3">
//         <h3 className=" text-lg font-semibold text-blue-400">
//           Борьба с гонками (race conditions)
//         </h3>

//         <div className="p-3 flex gap-5 h-[430px] border">
//           <div className="">
//             {users &&
//               users.map((user) => (
//                 <UserListItem
//                   key={user.id}
//                   user={user}
//                   selected={selectedUserId === user.id}
//                   onClick={() => setSelectedUserId(user.id)}
//                 />
//               ))}
//           </div>
//           {selectedUserId && <UserPreview id={selectedUserId} />}
//         </div>
//       </div>

//       <Accordion type="single" collapsible className="">
//         <AccordionItem value="item-1">
//           <AccordionTrigger className=" flex text-[24px] justify-center">
//             код
//           </AccordionTrigger>
//           <AccordionContent className="text-[18px] ">
//             <CodeHighlighting data={renderCount_1} variant={'medium'} />
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//       <div className="">
//         <CodeHighlighting data={raceConditions_1} variant={'medium'} />
//       </div>
//     </div>
//   )
// }

// export default UsersList
