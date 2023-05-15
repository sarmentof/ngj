import { GetLoginToken } from '@/lib/login/getLoginToken'
import { setStorageItem } from '@/utils/localStorage'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import styles from './page.module.css'


export default async function Home() {

  const getLoginProps = {
    login: process.env.LOGIN_USER,
    senha: process.env.PWD_USER
  }
  const token = await GetLoginToken(getLoginProps)

  setStorageItem("NEXT_PUBLIC_USER_TOKEN", token )
  // const getCookie = getStorageItem("NEXT_PUBLIC_USER_TOKEN")

  // console.log(getCookie)

  console.log(`Recuperou token: ${token}`)
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  )
}
