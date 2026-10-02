import React from 'react'
import "./ContactOption.css"
import { formatMessageDate } from '../../Utils/FormatDate'

export default function ContactOption(props) {
    return (
        <div className='contact-option'>
            <div className='contact-image-container'>
                {props.image
                    ? <img src={props.image} alt={props.name} className='contact-image' />
                    : <div className='contact-image-placeholder'>
                        {props.type === 'group'
                            ? (
                                <svg viewBox='0 0 24 24' width='26' height='26' fill='currentColor' aria-hidden='true'>
                                    <path d='M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' />
                                </svg>
                            )
                            : props.name.charAt(0).toUpperCase()
                        }
                    </div>
                }
            </div>
            <div className='contact-info'>
                <h2 className='contact-name'>{props.name}</h2>
                <p className='contact-preview'>{props.lastMessage}</p>
            </div>
            <div className='contact-meta'>
                <span className='contact-time'>{formatMessageDate(props.lastMessageDate)}</span>
                {props.unreadMessages > 0 && (
                    <span className='contact-badge'>{props.unreadMessages}</span>
                )}
            </div>
        </div>
    )
}
