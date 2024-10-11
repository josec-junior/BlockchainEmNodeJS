function getTimeStamp() {
    const currentDate = new Date()
    return `${currentDate.toDateString()} - ${currentDate.toTimeString()}`
}

export { getTimeStamp }