import React, { useState } from 'react'
import useLogin from '../../Hooks/useLogin'


export default function LoginForm() {

    const { formState, handleSubmit, handleChangeInput } = useLogin()

    return (
        <form onSubmit={handleSubmit}>
            <h1>Iniciar sesion</h1>
            <div>
                <label htmlFor='email'>Email:</label>
                <br />
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={formState.email}
                    onChange={handleChangeInput}
                />
            </div>
            <div>
                <label htmlFor='password'>Contraseña:</label>
                <br />
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={formState.password}
                    onChange={handleChangeInput}
                />
            </div>
            <button type='submit'>Iniciar sesion</button>
        </form>
    )
}
