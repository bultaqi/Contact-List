//An empty array that stores data
let contacts = []

//An exporting function that stores a copy of that data
export const copyOfContacts = () => contacts.slice()

//An exporting function that fetchs the local API info, turns it into json, and waits for it all to return
export const getContact = () => {
    return fetch('http://localhost:8088/contact')
        .then(response => response.json())
        .then(parsedContacts => {
            contacts = parsedContacts
        })

}

//An exporting function that fetchs the local API data to give details on where to save it and how
export const saveContact = contact => {
    return fetch('http://localhost:8088/contact', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    
}