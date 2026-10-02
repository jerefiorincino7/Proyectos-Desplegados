import { createContext, useCallback, useState } from "react";
import contact_list_server from "../Data/contact-data-mook";
import { Outlet, useParams } from "react-router";


export function getLastMessage(messages) {
    if (!messages || messages.length === 0) return null
    return messages[messages.length - 1]
}

export function countUnreadMessages(messages) {
    if (!messages) return null
    const unread = messages.filter((m) => m.status === "unseen" && m.author !== "YO").length
    return unread > 0 ? unread : null
}

function isUnreadIncoming(message) {
    return message.status === "unseen" && message.author !== "YO"
}

export const ContactContext = createContext(
    {
        contacts: [],
        selected_contact: null,
        getLastMessage: () => { },
        countUnreadMessages: () => { },
        sendMessage: () => { },
        markAsRead: () => { },
    }
)
export function ContactContextProvider() {
    const [contacts, setContacts] = useState(contact_list_server)
    const { contact_id } = useParams()

    const selected_contact = contact_id
    ? contacts.find((contact) => String(contact.id) === String(contact_id)) || null
    : null

    const sendMessage = useCallback((contactId, content) => {
        const trimmed = content.trim()
        if (!trimmed) return
        setContacts((prevContacts) => prevContacts.map((contact) => {
            if (String(contact.id) !== String(contactId)) return contact
            const nextId = contact.messages.reduce((max, m) => Math.max(max, m.id), 0) + 1
            return {
                ...contact,
                messages: [
                    ...contact.messages,
                    {
                        id: nextId,
                        content: trimmed,
                        author: "YO",
                        created_at: new Date(),
                        status: "sent",
                    },
                ],
            }
        }))
    }, [])

    const markAsRead = useCallback((contactId) => {
        setContacts((prevContacts) => {
            const contact = prevContacts.find((c) => String(c.id) === String(contactId))
            if (!contact || !contact.messages.some(isUnreadIncoming)) return prevContacts
            return prevContacts.map((c) => {
                if (String(c.id) !== String(contactId)) return c
                return {
                    ...c,
                    messages: c.messages.map((m) => isUnreadIncoming(m) ? { ...m, status: "seen" } : m),
                }
            })
        })
    }, [])

    const provider_values = {
        contacts: contacts,
        selected_contact: selected_contact,
        getLastMessage: getLastMessage,
        countUnreadMessages: countUnreadMessages,
        sendMessage: sendMessage,
        markAsRead: markAsRead,
    }
    return(
        <ContactContext.Provider
        value={provider_values}
        >
            <Outlet />
        </ContactContext.Provider>
    )
}
