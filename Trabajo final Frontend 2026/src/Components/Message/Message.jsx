import React from 'react';
import './Message.css';
import { formatTime } from '../../Utils/FormatDate';

function Message({ author, content, status, created_at, showAuthor = false }) {

    const esMio = author === "YO";

    const esVisto = status === "seen";

    return (
        <div className={"contenedor-mensaje " + (esMio ? "mensaje-propio" : "mensaje-recibido")}>
            <div className="burbuja-mensaje">
                {showAuthor && !esMio && <span className="autor-mensaje">{author}</span>}

                <p className="contenido-mensaje">{content}</p>

                <div className="metadatos-mensaje">
                    <span className="hora-mensaje">{formatTime(created_at)}</span>

                    {esMio && (
                        <span
                            className={'doble-check ' + (esVisto ? 'leido' : 'enviado')}
                            title={esVisto ? 'Leído' : 'Enviado'}
                        >
                            <svg
                                viewBox="0 0 18 12"
                                width="16"
                                height="11"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M1 6.5 4.7 10 11.3 2" />
                                <path d="M6.6 6.5 10.3 10 16.9 2" />
                            </svg>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Message;
