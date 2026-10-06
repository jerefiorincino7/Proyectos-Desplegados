import React from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import BrandLogo from '../../Components/BrandLogo/BrandLogo'
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
                        <BrandLogo size={30} />
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
