import React from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import ThemeToggle from '../../Components/ThemeToggle/ThemeToggle'
import './LoginScreen.css'


export default function LoginScreen() {
    return (
        <main className='login-screen'>
            <section className='login-card'>

                <div className='login-theme-toggle'>
                    <ThemeToggle />
                </div>

                <header className='login-header'>
                    <span className='login-logo'>
                        <svg viewBox='0 0 24 24' width='26' height='26' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
                            <path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' />
                        </svg>
                    </span>
                    <div className='login-header-text'>
                        <h1>Iniciar sesión</h1>
                        <p>Ingresá tu usuario y contraseña para continuar</p>
                    </div>
                </header>

                <LoginForm />

            </section>
        </main>
    )
}
