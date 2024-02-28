'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function Home() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className=" bg-slate-400 p-2 rounded-sm text-white">
          Mетоды
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <h1 className=" text-yellow-700 text-[36px] font-semibold">
        Welcom to NextJS world - Добро пожаловать в мир Next.js
      </h1>
    </>
  )
}
