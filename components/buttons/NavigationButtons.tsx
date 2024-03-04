'use client'
import Link from 'next/link'
import { Button } from '../ui/button'
// import { useRouter } from 'next/navigation'

interface IProps {
  path: string
}

const NavigationButtons = ({ path }: IProps) => {
  //   const router = useRouter()
  //   const { back } = router
  //   console.log('NavigationButtons router', router.back)

  return (
    <div className="flex justify-between w-1/3">
      <Button
        variant={'positive'}
        size={'sm'}
        // onClick={() => back()}
        onClick={() => window.history.back()}
      >
        Назад
      </Button>

      {path && (
        <Link
          href={`${path}`}
          className="bg-green-500 text-white px-4 py-1 rounded-md"
        >
          {path}
        </Link>
      )}
    </div>
  )
}
export default NavigationButtons
