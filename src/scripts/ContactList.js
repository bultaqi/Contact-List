import { getContact, copyOfContacts } from './ContactDataProvider.js'
import { Contacts } from './Contact.js'

//An exporting function that retireves the data from the local API
export function ContactList(){
    getContact()
    //An invocation of a copy of that data is stored in a variable
    .then(() => {
        const allTheContacts = copyOfContacts()

        //A target in the HTML that is saved as a variable
        const contentTarget = document.querySelector("#contacts")

        // This does the same thing as printing with a for loop! We just use a .map() to loop over our collection and call the Contact function instead of a for loop
        contentTarget.innerHTML = allTheContacts.map(singleContact => Contacts(singleContact))
    })
}