import { useState } from "react"
import { useNavigate } from "react-router"
import { loginRequest } from "../Services/authService"

const HOME_PATH = "/home"

const LOGIN_STATUS = {
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error",
    SUCCESS: "success",
}

/**
 * @param {{usuario: string, password: string}} formState
 */
function useLoginSubmit(formState) {
    const navigate = useNavigate()
    const [status, setStatus] = useState(LOGIN_STATUS.IDLE)
    const [fieldErrors, setFieldErrors] = useState({})
    const [errorMessage, setErrorMessage] = useState("")

    const isLoading = status === LOGIN_STATUS.LOADING

    function validate() {
        const nextErrors = {}

        if (!formState.usuario.trim()) {
            nextErrors.usuario = "Ingresá tu nombre de usuario"
        }
        if (!formState.password.trim()) {
            nextErrors.password = "Ingresá tu contraseña"
        }

        setFieldErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    function clearFieldError(nombre_campo) {
        setFieldErrors(
            (prevErrors) => {
                if (!prevErrors[nombre_campo]) return prevErrors
                const cloned_errors = { ...prevErrors }
                delete cloned_errors[nombre_campo]
                return cloned_errors
            }
        )
    }

    async function handleSubmit(evento) {
        evento.preventDefault()
        if (isLoading) return

        setErrorMessage("")

        const campos_validos = validate()
        if (!campos_validos) {
            setStatus(LOGIN_STATUS.IDLE)
            return
        }

        setStatus(LOGIN_STATUS.LOADING)
        try {
            await loginRequest({
                usuario: formState.usuario,
                password: formState.password,
            })
            setStatus(LOGIN_STATUS.SUCCESS)
            navigate(HOME_PATH)
        } catch (error) {
            setStatus(LOGIN_STATUS.ERROR)
            setErrorMessage(
                error?.message || "No se pudo iniciar sesión. Intentá de nuevo."
            )
        }
    }

    return {
        handleSubmit: handleSubmit,
        clearFieldError: clearFieldError,
        isLoading: isLoading,
        status: status,
        fieldErrors: fieldErrors,
        errorMessage: errorMessage,
    }
}

export default useLoginSubmit
