import useLogin from '../../Hooks/useLogin'
import useLoginSubmit from '../../Hooks/useLoginSubmit'
import './LoginForm.css'


export default function LoginForm() {

    const {
        formState,
        handleChangeInput,
        showPassword,
        togglePassword,
        passwordInputType,
        passwordToggleLabel,
    } = useLogin()

    const {
        handleSubmit,
        clearFieldError,
        isLoading,
        fieldErrors,
    } = useLoginSubmit(formState)

    function handleFieldChange(evento) {
        handleChangeInput(evento)
        clearFieldError(evento.target.name)
    }

    return (
        <form className='login-form' onSubmit={handleSubmit} noValidate>

            <div className='login-field'>
                <label htmlFor='usuario'>Nombre de usuario</label>
                <input
                    type='text'
                    name='usuario'
                    id='usuario'
                    autoComplete='username'
                    placeholder='Tu nombre de usuario'
                    value={formState.usuario}
                    onChange={handleFieldChange}
                    aria-invalid={fieldErrors.usuario ? 'true' : 'false'}
                    aria-describedby={fieldErrors.usuario ? 'usuario-error' : undefined}
                />
                {fieldErrors.usuario &&
                    <span id='usuario-error' className='error-text login-field-error'>
                        {fieldErrors.usuario}
                    </span>
                }
            </div>

            <div className='login-field'>
                <label htmlFor='password'>Contraseña</label>
                <div className='login-password-input'>
                    <input
                        type={passwordInputType}
                        name='password'
                        id='password'
                        autoComplete='current-password'
                        placeholder='Tu contraseña'
                        value={formState.password}
                        onChange={handleFieldChange}
                        aria-invalid={fieldErrors.password ? 'true' : 'false'}
                        aria-describedby={fieldErrors.password ? 'password-error' : undefined}
                    />
                    <button
                        type='button'
                        className='login-password-toggle'
                        onClick={togglePassword}
                        aria-label={passwordToggleLabel}
                        title={passwordToggleLabel}
                    >
                        {showPassword
                            ? <svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
                                <path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94' />
                                <path d='M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19' />
                                <path d='M14.12 14.12A3 3 0 1 1 9.88 9.88' />
                                <line x1='1' y1='1' x2='23' y2='23' />
                            </svg>
                            : <svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
                                <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                                <circle cx='12' cy='12' r='3' />
                            </svg>
                        }
                    </button>
                </div>
                {fieldErrors.password &&
                    <span id='password-error' className='error-text login-field-error'>
                        {fieldErrors.password}
                    </span>
                }
            </div>

            <button type='submit' className='login-submit' disabled={isLoading}>
                {isLoading ? 'Ingresando…' : 'Ingresar'}
            </button>

            <p className='login-hint'>
                Podés ingresar con cualquier usuario y contraseña.
            </p>
        </form>
    )
}
