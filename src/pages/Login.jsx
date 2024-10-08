import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../UserContext"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const {setUserInfo} = useContext(UserContext)
    const [redirect, setRedirect] = useState(false)

    async function login(e) {
        e.preventDefault()
        const response = await fetch('https://jsm-contest.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        if(response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                setRedirect(true)
            })
        } else {
            alert('login failed')
        }
    }

    if (redirect) {
        return <Navigate   to={'/'} />
    }
  return (
    <>
    <div className="flex items-center justify-center h-screen">
  <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <form onSubmit={login}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="your@email.com" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">username</label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="your@email.com" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-red-500 hover:bg-red-400  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
        <a className="inline-block underline align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800" href="/register">Dont have an account?</a>
      </div>
    </form>
  </div>
</div>
</>
  )
}

export default Login
