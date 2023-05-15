export default async function getAllUsers({ token }) {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users')
  
  // console.log(`Veio token: ${token}`)

  const options = {
    url: process.env.GJ_URL + '/api/Usuario',
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  }
  const res = await fetch(process.env.GJ_URL + '/api/Usuario')
  .then(response => response.json())

  if(!res.ok) throw new Error(`Failed to fetching users`)

  return res.json()
}