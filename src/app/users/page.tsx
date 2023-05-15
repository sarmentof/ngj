
import { GetLoginToken } from '@/lib/login/getLoginToken';
import getAllUsers from '@/lib/user/getAllUsers'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Users',
}

export default async function UsersPage({token}) {
  if(!token) throw new Error('You must have a token')

  const usersData: Promise<User[]> = getAllUsers(token)

  const users = await usersData

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map(user => {
          return (
            <>
              <p key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </p>
              <br />
            </>
          )
      })}
    </section>
  )

  return content
}

export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  // const token = await GetLoginToken();

  const res = await fetch(`/api)

  console.log(`[getStaticProps]: ${token}`)

  // Props returned will be passed to the page component
  return { props: { token, }, };
}
