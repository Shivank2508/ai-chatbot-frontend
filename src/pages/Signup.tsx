import React from 'react'

const Signup = () => {
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
                        <div className='flex flex-col justify-center items-center py-10'>
                            <div className='text-4xl font-bolder'>Sign up</div>
                            <div className='pt-2'>Enter your credentials to create your account</div>

                            <div className='mt-8'>
                                <label htmlFor="name" className="block text-sm/6 font-medium text-white">
                                    Username
                                </label>
                                <div className="mt-1 flex items-center rounded-md bg-gray-900 pl-2 outline-1 -outline-offset-1 outline-gray-700 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your Username"
                                        className="block min-w-0 w-75 grow py-1.5 pr-3 pl-1 text-base text-gray-300 placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                    />

                                </div>

                            </div>
                            <div className='mt-2'>
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
                                type='submit'
                                className="mt-4 w-75 rounded cursor-pointer bg-yellow-600 hover:bg-yellow-800 text-white font-semibold py-2 mt-6 shadow transition duration-200 ease-in-out"
                            >
                                Signup
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup