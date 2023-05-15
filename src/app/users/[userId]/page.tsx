import getUser from "@/lib/user/getUser"
import { Metadata } from "next"
import Link from "next/link"
import { userInfo } from "os"
import { Suspense } from "react"

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user = await userData

  return {
    title: user.name,
    description: `Perfil de ${ user.name }`
  }
}


export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId)

  const user = await userData

  return (
    <>
      <h2>
        <Link href='/users'>Voltar</Link>
      </h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <h2>Usuário:</h2> {user.name}
        <br />
        <h3>Login:</h3> {user.username}
        <br />
        <h3>E-mail:</h3> {user.email}
      </Suspense>  
    </>
  )
}