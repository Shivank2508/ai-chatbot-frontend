import { useState } from 'react'
import NavigationLink from './shared/NavigationLink'
import { UserContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function Example() {
    const Auth = UserContext()
    const navidation = useNavigate()
    return (
        <header className="bg-dark" style={{ backgroundColor: "black" }}>
            <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 py-5">
                <div onClick={() => navidation('/')} className="flex lg:flex-1 cursor-pointer">
                    <div className='text-2xl font-semibold'>Shaira.AI</div>
                </div>


                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {Auth?.isLoggedIn ?
                        <>
                            <NavigationLink
                                to='/chat'
                                text='Go to chat '
                                bg='#008170'
                                textColor='white'
                            />
                            <NavigationLink
                                text='Logout'
                                bg='#232D3F'
                                textColor='white'
                                onclick={Auth.logout}
                            />
                        </>

                        :
                        <>
                            <NavigationLink
                                to='/login'
                                text='Login'
                                bg='#008170'
                                textColor='white'
                            />
                            <NavigationLink
                                to='/signup'
                                text='Signup'
                                bg='#232D3F'
                                textColor='white'
                            />
                        </>

                    }


                </div>
            </nav>

        </header>
    )
}
