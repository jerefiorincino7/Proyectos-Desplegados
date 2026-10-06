import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router'
import ContactOption from '../ContactOption/ContactOption'
import { ContactContext } from '../../Context/ContactContext'
import useContactSearch from '../../Hooks/UseContactSearch'
import { getContactPreview } from '../../Utils/ContactPreview'

export default function ContactsList() {

    const { contacts, countUnreadMessages, getLastMessage } = useContext(ContactContext)
    const { contactSearchTerm, setContactSearchTerm, filteredContacts } = useContactSearch(contacts)
    const location = useLocation()

    if (contacts.length === 0) {
        return <span>Todavía no tenes contactos</span>
    }

    const contactsJsx = []
    for (const contact of filteredContacts) {
        const lastMessage = getLastMessage(contact.messages)
        const rawDate = lastMessage ? lastMessage.created_at : contact.last_connection
        const to = `/contact/${contact.id}`
        const preview = getContactPreview(contact, lastMessage)
        contactsJsx.push(
            <Link
                to={to}
                key={contact.id}
                className={location.pathname === to ? 'contact-link active' : 'contact-link'}
            >
                <ContactOption
                    id={contact.id}
                    image={contact.image}
                    type={contact.type}
                    lastMessage={preview}
                    name={contact.name}
                    unreadMessages={countUnreadMessages(contact.messages)}
                    lastMessageDate={rawDate}
                />
            </Link>
        )
    }

    return (
        <>
            <div className="sidebar-header">
                <div className="sidebar-search">
                    <input
                        type="text"
                        placeholder="Search or start a new chat"
                        value={contactSearchTerm}
                        onChange={(e) => setContactSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="sidebar-contacts">
                {filteredContacts.length === 0
                    ? <span>No se encontró el contacto</span>
                    : contactsJsx
                }
            </div>
        </>
    )
}