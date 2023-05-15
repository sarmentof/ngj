import { createContext, useContext, useState } from "react"

export type UserProps = {
  login: string;
  senha: string;
  token: string;
}

type AuthContextProps = {
  user: UserProps | null;
  login: (user: UserProps) => void;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null)

  const login = (user: UserProps) => {
    setUser(user)

    console.log(user)
  }

  const logout = () => {
    console.log('logout')
  }

    return (
      <AuthContext.Provider value={{
        user,
        login,
        logout
      }}>
        <>
          {children}
        </>
      </AuthContext.Provider>
    )
 }

 const useAuth = () => {
  const context = useContext(AuthContext)
  return context
 }


 export { AuthProvider, useAuth, AuthContext }
