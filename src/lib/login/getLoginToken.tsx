export type PropsGetLogin = {
  params: {
  login: string;
  senha: string;
  }
}

export async function GetLoginToken({params: { login, senha }}: PropsGetLogin })  {

  // const bodyJSON = {
  //   login: process.env.LOGIN_USER,
  //   senha: process.env.PWD_USER
  // }
  const bodyJSON = {
    login: props.login,
    senha: props.senha
  }

  // const url = process.env.GJ_URL + '/Login'

  const res = await fetch('https://pilotogj.homologacao.com.br/api/Login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyJSON)
  })
  .then(response => response.text())

  const token = await res

  console.log(`[GetLoginToken]: ${token}`)

  return token
}
