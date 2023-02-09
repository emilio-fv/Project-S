function createPerson(adminLevel, firstName, lastName, email, phone) {
    return { adminLevel, firstName, lastName, email, phone }
}

const samplePersonnel = [
    createPerson("Developer", "First", "Last", "email@email.com", "(123) 123-1234"),
    createPerson("Developer", "First", "Last", "email@email.com", "(123) 123-1234"),
    createPerson("Developer", "First", "Last", "email@email.com", "(123) 123-1234"),
    createPerson("Developer", "First", "Last", "email@email.com", "(123) 123-1234"),
    createPerson("Developer", "First", "Last", "email@email.com", "(123) 123-1234"),
    createPerson("Developer", "First", "Last", "email@email.com", "(123) 123-1234"),
    createPerson("Developer", "First", "Last", "email@email.com", "(123) 123-1234"),
]

export default samplePersonnel;