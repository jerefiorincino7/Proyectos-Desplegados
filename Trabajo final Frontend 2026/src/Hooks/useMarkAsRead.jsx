import { useContext, useEffect } from "react"
import { ContactContext } from "../Context/ContactContext"

function useMarkAsRead(contactId) {
    const { markAsRead } = useContext(ContactContext)

    useEffect(() => {
        if (contactId !== null) markAsRead(contactId)
    }, [contactId, markAsRead])
}

export default useMarkAsRead
