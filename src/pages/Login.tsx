import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center h-160'>
            <div className='p-10 rounded flex flex-col justify-center items-center' style={{ backgroundColor: "#3a3a3a" }}>
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
            </div>




        </div>
    )
}

export default Login