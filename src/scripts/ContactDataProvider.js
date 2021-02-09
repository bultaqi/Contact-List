let contacts = []

export const copyOfContacts = () => contacts.slice()

export const getContact = () => {
    return fetch('http://localhost:8088/contact')
        .then(response => response.json())
        .then(parsedContacts => {
            contacts = parsedContacts
        })

}

export const saveContact = contact => {
    return fetch('http://localhost:8088/contact', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    
}