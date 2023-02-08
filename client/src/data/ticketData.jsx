function createTicket(id, summary, description, creatorUserId, status, estimate, dueDate, priority, type, assignedUsers) {
    return { id, summary, description, creatorUserId, status, estimate, dueDate, priority, type, assignedUsers }
}

const sampleTickets = [
    createTicket(1, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "In Progress", "", "", "Low", "Feature", [1]),
    createTicket(2, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "Incomplete", "", "", "Low", "Bug", [1]),
    createTicket(3, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "In Progress", "", "", "Low", "Task", [1]),
    createTicket(4, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "Incomplete", "", "", "Low", "Improvement", [1]),
    createTicket(5, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "Incomplete", "", "", "Low", "Feature", [1]),
    createTicket(6, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "In Progress", "", "", "Low", "Feature", [1]),
    createTicket(7, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "Incomplete", "", "", "Low", "Bug", [1]),
    createTicket(8, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "In Progress", "", "", "Low", "Feature", [1]),
    createTicket(9, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "Incomplete", "", "", "Low", "Bug", [1]),
    createTicket(10, "sample summary", "lorem ipsum dkfjaxmkd cnxkcmfm", 1, "Completed", "", "", "Low", "Test", [1]),
]

export default sampleTickets;