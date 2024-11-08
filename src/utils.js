function getTimestamp() {
    const currentDate = new Date()
    return `${currentDate.toDateString()} - ${currentDate.toTimeString()}`
}

export { getTimestamp }