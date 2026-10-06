import { formatDayLabel } from "./FormatDate"

/**
 * @param {Array<{created_at: Date|string|number}>} messages
 * @returns {Array<{key: string, label: string, messages: Array}>}
 */
export function groupMessagesByDay(messages) {
    if (!messages || messages.length === 0) return []

    const groups = []
    let lastDay = ""

    for (const message of messages) {
        const day = new Date(message.created_at).toDateString()
        if (day !== lastDay) {
            lastDay = day
            groups.push({
                key: `dia-${day}`,
                label: formatDayLabel(message.created_at),
                messages: [],
            })
        }
        groups[groups.length - 1].messages.push(message)
    }

    return groups
}
