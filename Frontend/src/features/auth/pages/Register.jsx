import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import Logo from '../../../components/Logo'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")

    const {loading,handleRegister} = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await handleRegister({username,email,password})
            navigate("/")
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed")
        }
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
                <h1 className="text-2xl font-bold">Register</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div className="flex flex-col gap-2">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => { setUsername(e.target.value) }}
                            type="text" id="username" name='username' placeholder='Enter username' 
                            className="border-none outline-none px-4 py-3 rounded-xl bg-input text-text-primary" />
                    </div>
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

                    <button className="border-none outline-none px-6 py-3 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out bg-[#238636] hover:bg-[#2ea043] text-white active:scale-90" >Register</button>

                </form>

                <p>Already have an account? <Link to={"/login"} className="text-[#2ea043] no-underline">Login</Link> </p>
            </div>
        </main>
    )
}

export default Register