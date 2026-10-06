import React, { useContext } from 'react'
import { Link } from 'react-router'
import './ChatPanel.css'
import Message from '../Message/Message'
import { ContactContext } from '../../Context/ContactContext'
import { formatLastSeen } from '../../Utils/FormatDate'
import { groupMessagesByDay } from '../../Utils/GroupMessages'
import useMessageDraft from '../../Hooks/useMessageDraft'
import useAutoScroll from '../../Hooks/useAutoScroll'
import useMarkAsRead from '../../Hooks/useMarkAsRead'

export default function ChatPanel({ contact }) {
    const { sendMessage } = useContext(ContactContext)
    const contactId = contact ? contact.id : null

    useMarkAsRead(contactId)
    const { draft, inputRef, handleChange, handleKeyDown, handleSend } = useMessageDraft(contactId, sendMessage)
    const messagesRef = useAutoScroll(contactId, contact ? contact.messages.length : 0)

    if (!contact) {
        return (
            <section className='chat-panel chat-empty'>
                <svg
                    width='170'
                    height='115'
                    viewBox='0 0 170 115'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                >
                    <rect x='26' y='10' width='118' height='76' rx='9' />
                    <path d='M8 96h154' />
                    <path d='M64 86l4 10h34l4-10' />
                    <path d='M62 36h42a10 10 0 0 1 10 10v16a10 10 0 0 1-10 10H84l-13 10v-10h-9a10 10 0 0 1-10-10V46a10 10 0 0 1 10-10z' />
                </svg>
                <h1>Kukukiku Messages</h1>
                <p>Seleccioná un chat para empezar a leer y responder mensajes.</p>
                <p className='chat-empty-note'>
                    Tus mensajes personales están cifrados de extremo a extremo.
                </p>
            </section>
        )
    }

    const esGrupo = contact.type === 'group'
    const grupos = groupMessagesByDay(contact.messages)

    return (
        <section className='chat-panel'>
            <header className='chat-header'>
                <Link to='/home' className='chat-back-btn' aria-label='Volver a chats'>
                    <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M19 12H5M12 19l-7-7 7-7' />
                    </svg>
                </Link>
                <div className='contact-image-container chat-avatar'>
                    {contact.image
                        ? <img src={contact.image} alt={contact.name} className='contact-image' />
                        : <div className='contact-image-placeholder'>
                            {esGrupo
                                ? (
                                    <svg viewBox='0 0 24 24' width='26' height='26' fill='currentColor' aria-hidden='true'>
                                        <path d='M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' />
                                    </svg>
                                )
                                : contact.name.charAt(0).toUpperCase()
                            }
                        </div>
                    }
                </div>
                <div className='chat-header-info'>
                    <h2 className='chat-title'>{contact.name}</h2>
                    <p className='chat-status'>
                        {esGrupo
                            ? (contact.members || []).join(', ')
                            : `último mensaje ${formatLastSeen(contact.last_connection)}`
                        }
                    </p>
                </div>
                <div className='chat-header-actions'>
                    <button type='button' aria-label='Buscar en la conversación'>
                        <svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
                            <circle cx='11' cy='11' r='7' />
                            <path d='M20 20l-3.6-3.6' />
                        </svg>
                    </button>
                    <button type='button' aria-label='Menú de la conversación'>
                        <svg viewBox='0 0 24 24' width='20' height='20' fill='currentColor'>
                            <circle cx='12' cy='5' r='2' />
                            <circle cx='12' cy='12' r='2' />
                            <circle cx='12' cy='19' r='2' />
                        </svg>
                    </button>
                </div>
            </header>

            <div className='chat-messages' ref={messagesRef}>
                {grupos.map((grupo) => (
                    <React.Fragment key={grupo.key}>
                        <div className='chat-date-separator'>
                            <span>{grupo.label}</span>
                        </div>
                        {grupo.messages.map((mensaje) => (
                            <Message
                                key={mensaje.id}
                                author={mensaje.author}
                                content={mensaje.content}
                                status={mensaje.status}
                                created_at={mensaje.created_at}
                                showAuthor={esGrupo}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>

            <form
                className='chat-composer'
                onSubmit={(evento) => {
                    evento.preventDefault()
                    handleSend()
                }}
            >
                <button type='button' className='composer-icon-btn' aria-label='Emoji'>
                    <svg viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
                        <circle cx='12' cy='12' r='9' />
                        <path d='M8 14s1.5 2 4 2 4-2 4-2' />
                        <circle cx='9' cy='9.5' r='1.3' fill='currentColor' stroke='none' />
                        <circle cx='15' cy='9.5' r='1.3' fill='currentColor' stroke='none' />
                    </svg>
                </button>
                <button type='button' className='composer-icon-btn' aria-label='Adjuntar archivo'>
                    <svg viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48' />
                    </svg>
                </button>
                <textarea
                    className='composer-input'
                    rows={1}
                    ref={inputRef}
                    placeholder='Escribí un mensaje'
                    value={draft}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    type='submit'
                    className='composer-send'
                    aria-label='Enviar mensaje'
                    disabled={!draft.trim()}
                >
                    {draft.trim()
                        ? (
                            <svg viewBox='0 0 24 24' width='22' height='22' fill='currentColor' aria-hidden='true'>
                                <path d='M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z' />
                            </svg>
                        )
                        : (
                            <svg viewBox='0 0 24 24' width='22' height='22' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
                                <rect x='9' y='3' width='6' height='11' rx='3' />
                                <path d='M5 11a7 7 0 0 0 14 0' />
                                <path d='M12 18v3' />
                            </svg>
                        )}
                </button>
            </form>
        </section>
    )
}
