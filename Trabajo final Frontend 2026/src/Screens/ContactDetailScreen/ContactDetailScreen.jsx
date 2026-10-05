import { useContext } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ChatPanel from '../../Components/ChatPanel/ChatPanel'
import { ContactContext } from '../../Context/ContactContext'

export default function ContactDetailScreen() {
    const { selected_contact } = useContext(ContactContext)

    if (!selected_contact) {
        return (
            <div className='app-layout chat-layout'>
                <Sidebar />
                <section className='chat-panel chat-empty'>
                    <p>No se encontró el contacto.</p>
                </section>
            </div>
        )
    }

    return (
        <div className='app-layout chat-layout'>
            <Sidebar />
            <ChatPanel contact={selected_contact} />
        </div>
    )
}
