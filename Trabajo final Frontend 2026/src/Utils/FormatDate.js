/**
 * @param {Date|string|number} date
 * @returns {string} Hora en formato HH:MM
 */
export function formatTime(date) {
    if (!date) return ""
    const target = date instanceof Date ? date : new Date(date)
    if (isNaN(target.getTime())) return ""
    const hours = String(target.getHours()).padStart(2, '0')
    const minutes = String(target.getMinutes()).padStart(2, '0')
    return `${hours}:${minutes}`
}

export function formatMessageDate(date) {
    if (!date) return ""
    const messageDate = date instanceof Date ? date : new Date(date)
    if (isNaN(messageDate.getTime())) {
        return typeof date === 'string' ? date : ''
    }
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const target = new Date(messageDate.getFullYear(), messageDate.getMonth(), messageDate.getDate())

    const diffTime = today.getTime() - target.getTime()
    const oneDayMs = 24 * 60 * 60 * 1000
    const diffDays = Math.round(diffTime / oneDayMs)

    if (diffDays === 0) {
        const hours = String(messageDate.getHours()).padStart(2, '0')
        const minutes = String(messageDate.getMinutes()).padStart(2, '0')
        return `${hours}:${minutes}`
    }

    if (diffDays === 1) {
        return 'ayer'
    }

    const day = String(messageDate.getDate()).padStart(2, '0')
    const month = String(messageDate.getMonth() + 1).padStart(2, '0')
    const year = messageDate.getFullYear()
    return `${day}/${month}/${year}`
}

export function formatLastSeen(date) {
    if (!date) return ""
    const target = date instanceof Date ? date : new Date(date)
    if (isNaN(target.getTime())) return ""
    const time = formatTime(target)
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const targetDay = new Date(target.getFullYear(), target.getMonth(), target.getDate())
    const diffDays = Math.round((today.getTime() - targetDay.getTime()) / 86400000)
    if (diffDays <= 0) return `hoy a las ${time}`
    if (diffDays === 1) return `ayer a las ${time}`
    return `${formatMessageDate(target)} a las ${time}`
}

export function formatDayLabel(date) {
    if (!date) return ""
    const target = date instanceof Date ? date : new Date(date)
    if (isNaN(target.getTime())) return ""
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const targetDay = new Date(target.getFullYear(), target.getMonth(), target.getDate())
    const diffDays = Math.round((today.getTime() - targetDay.getTime()) / 86400000)
    if (diffDays === 0) return "HOY"
    if (diffDays === 1) return "AYER"
    return formatMessageDate(target)
}