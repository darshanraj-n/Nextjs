import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>hello js pre rendering</h1>
      <Link href='/users'>
      <a>Users</a>
      </Link>

      <Link href='/posts'>
      <a>posts</a>
      </Link>
    </>
  )
}
export default Home