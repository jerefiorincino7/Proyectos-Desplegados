import { useEffect, useRef, useState } from "react"

const MAX_INPUT_HEIGHT = 96

function useMessageDraft(contactId, onSend) {
    const [draft, setDraft] = useState("")
    const inputRef = useRef(null)

    useEffect(() => {
        if (contactId === null) return
        setDraft("")
        if (inputRef.current) inputRef.current.style.height = "auto"
        inputRef.current?.focus()
    }, [contactId])

    function handleSend() {
        const content = draft.trim()
        if (!content || contactId === null) return
        onSend(contactId, content)
        setDraft("")
        if (inputRef.current) inputRef.current.style.height = "auto"
        inputRef.current?.focus()
    }

    function handleKeyDown(evento) {
        if (evento.key === "Enter" && !evento.shiftKey) {
            evento.preventDefault()
            handleSend()
        }
    }

    function handleChange(evento) {
        setDraft(evento.target.value)
        evento.target.style.height = "auto"
        evento.target.style.height = Math.min(evento.target.scrollHeight, MAX_INPUT_HEIGHT) + "px"
    }

    return {
        draft: draft,
        inputRef: inputRef,
        handleChange: handleChange,
        handleKeyDown: handleKeyDown,
        handleSend: handleSend,
    }
}

export default useMessageDraft
