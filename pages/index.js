import { useUser } from '../lib/hooks'
import { useRouter } from 'next/router'

const Home = () => {
  const user = useUser()
  const router = useRouter()
  if (!user && process.browser){
    router.push('/login')
  }
  return (
    <>
      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  )
}

export default Home
