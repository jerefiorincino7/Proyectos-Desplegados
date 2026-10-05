import { useState } from "react"

const INITIAL_FORM_STATE = { usuario: "", password: "" }


function useLogin() {
    const [formState, setFormState] = useState(INITIAL_FORM_STATE)
    const [showPassword, setShowPassword] = useState(false)

    function handleChangeInput(evento) {
        const campo = evento.target
        const nombre_campo = campo.name
        const valor_campo = campo.value
        setFormState(
            (prevFormState) => {
                return {
                    ...prevFormState,
                    [nombre_campo]: valor_campo,
                }
            }
        )
    }

    function togglePassword() {
        setShowPassword(
            (prevShowPassword) => !prevShowPassword
        )
    }

    return {
        formState: formState,
        handleChangeInput: handleChangeInput,
        showPassword: showPassword,
        togglePassword: togglePassword,
        passwordInputType: showPassword ? "text" : "password",
        passwordToggleLabel: showPassword ? "Ocultar contraseña" : "Mostrar contraseña",
    }
}

export default useLogin
