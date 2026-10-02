import { useEffect, useRef } from "react"

function useAutoScroll(contactId, messageCount) {
    const containerRef = useRef(null)

    useEffect(() => {
        const element = containerRef.current
        if (element) element.scrollTop = element.scrollHeight
    }, [contactId, messageCount])

    return containerRef
}

export default useAutoScroll
