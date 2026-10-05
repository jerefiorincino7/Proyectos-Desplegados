
const LATENCIA_SIMULADA_MS = 800

export function loginRequest({ usuario, password }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario_limpio = String(usuario ?? "").trim()
            const password_limpio = String(password ?? "").trim()

            if (!usuario_limpio || !password_limpio) {
                reject(new Error("Completá el nombre de usuario y la contraseña"))
                return
            }

            resolve({
                token: "fake-token",
                usuario: usuario_limpio,
            })
        }, LATENCIA_SIMULADA_MS)
    })
}
