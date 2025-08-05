import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigation = useNavigate()
    const handleSubmit = (formData: any) => {
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    }
    return (
        <div className='flex flex-col justify-center items-center '
            style={{
                backgroundImage: "url('/images/bg-login.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "90vh"
            }}>
            <div className=' rounded w-250 ' style={{ backgroundColor: "#3a3a3a" }}>
                <div className='columns-2 gap-8'>
                    <div className=''>
                        <img
                            src="/images/OPH6FG0.jpg"
                            alt="Login Illustration"
                            className=" object-cover   shadow-lg"
                        />
                    </div>
                    <form action={handleSubmit}>
                        <div className='flex flex-col justify-center items-center py-15'>
                            <div className='text-4xl font-bolder'>Login</div>
                            <div className='pt-2'>Enter your credentials access your account</div>

                            <div className='mt-8'>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                                    Email
                                </label>
                                <div className="mt-1 flex items-center rounded-md bg-gray-900 pl-2 outline-1 -outline-offset-1 outline-gray-700 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder="Enter your email"
                                        className="block min-w-0 w-75 grow py-1.5 pr-3 pl-1 text-base text-gray-300 placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                    />

                                </div>

                            </div>
                            <div className='mt-2'>
                                <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                                    Password
                                </label>
                                <div className="mt-1 flex items-center rounded-md bg-gray-900 pl-2   ">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        className="block min-w-0 w-75 grow py-1.5 pr-3 pl-1 text-base text-gray-300 placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                    />

                                </div>

                            </div>
                            <button
                                className="mt-4 w-75 rounded cursor-pointer bg-yellow-600 hover:bg-yellow-800 text-white font-semibold py-2 mt-6 shadow transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                            >
                                Login
                            </button>
                            <div
                                onClick={() => navigation("/signup")}
                                className="underline flex items-center gap-1 cursor-pointer text-yellow-400 hover:text-yellow-600 mt-4"
                            >

                                Go to signup
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </form>
                </div>
            </div>






        </div>
    )
}

export default Login