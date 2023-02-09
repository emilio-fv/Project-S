function createTicket(id, summary, description, creatorUserId, status, estimate, dueDate, priority, type, assignedUsers) {
    return { id, summary, description, creatorUserId, status, estimate, dueDate, priority, type, assignedUsers }
}

const sampleTickets = [
    createTicket(1, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "In Progress", "", new Date("2015-03-25T12:00:00-06:00"), "Low", "Feature", [1]),
    createTicket(2, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 2, "Incomplete", "", new Date("2015-03-25T12:00:00-06:00"), "Low", "Bug", [1]),
    createTicket(3, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 3, "In Progress", "", new Date("2015-03-25T12:00:00-06:00"), "Low", "Task", [1]),
    createTicket(4, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "Incomplete", "", new Date("2015-03-25T12:00:00-06:00"), "Low", "Improvement", [1]),
    createTicket(5, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 2, "Incomplete", "", new Date("2015-03-25T12:00:00-06:00"), "Low", "Feature", [1]),
    createTicket(6, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 3, "In Progress", "", new Date("2015-03-25T12:00:00-06:00"), "Low", "Feature", [1]),
    createTicket(7, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "Incomplete", "", new Date("2015-03-25T12:00:00-06:00"), "Low", "Bug", [1]),
    createTicket(8, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 2, "In Progress", "", new Date("2015-03-25T12:00:00-06:00"), "Low", "Feature", [1]),
    createTicket(9, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 3, "Incomplete", "", new Date("2015-03-25T12:00:00-06:00"), "Low", "Bug", [1]),
    createTicket(10, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "Completed", "", new Date("2015-03-25T12:00:00-06:00"), "Low", "Test", [1]),
]

export default sampleTickets;