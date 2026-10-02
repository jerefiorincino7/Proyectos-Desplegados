/**
 * Texto de preview para la lista de contactos.
 * @param {{type?: string}} contact
 * @param {{author: string, content: string}|null} lastMessage
 * @returns {string}
 */
export function getContactPreview(contact, lastMessage) {
    if (!lastMessage) return ""

    const esGrupo = contact.type === "group"
    const esMio = lastMessage.author === "YO"

    return esGrupo && !esMio
        ? `${lastMessage.author}: ${lastMessage.content}`
        : lastMessage.content
}
