import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import Fetch from '@/lib/errorData/data'

export default function Home() {
  return (
    <>
      <Fetch />
      <DropdownMenu>
        <DropdownMenuTrigger>Mетоды</DropdownMenuTrigger>
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
