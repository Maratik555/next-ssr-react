import {useRouter}  from 'next/router'
import {useEffect} from 'react'


export default function Error() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
  router.push('/')
}, 3000)
  }, [router])
  
  return (
    <h1 className='h1'>
      Такая страница не существует 😎
    </h1>
  )
}