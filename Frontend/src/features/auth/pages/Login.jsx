import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import Logo from '../../../components/Logo'

import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({email,password})
        navigate('/')
    }

    if(loading){
        return (<main className="min-h-screen w-full flex justify-center items-center"><h1>Loading.......</h1></main>)
    }


    return (
        <main className="min-h-screen w-full flex justify-center items-center">
            <div className="min-w-[350px] flex flex-col gap-4">
                <div className="mb-4 flex justify-center">
                    <Logo />
                </div>
                <h1 className="text-2xl font-bold">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" id="email" name='email' placeholder='Enter email address' 
                            className="border-none outline-none px-4 py-3 rounded-xl bg-input text-text-primary" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            type="password" id="password" name='password' placeholder='Enter password' 
                            className="border-none outline-none px-4 py-3 rounded-xl bg-input text-text-primary" />
                    </div>
                    <button className="border-none outline-none px-6 py-3 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out bg-[#238636] hover:bg-[#2ea043] text-white active:scale-90" >Login</button>
                </form>
                <p>Don't have an account? <Link to={"/register"} className="text-[#2ea043] no-underline">Register</Link> </p>
            </div>
        </main>
    )
}

export default Login