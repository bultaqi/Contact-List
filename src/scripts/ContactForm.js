import {saveContact} from './ContactDataProvider.js'
import {ContactList} from './ContactList.js'

const contentTarget = document.querySelector("#contact-form")

export const ContactForm = () => {
    contentTarget.innerHTML = `
        <form>
            <input type="text" id="firstName" placeholder="First Name">
            <input type="text" id="lastName" placeholder="Last Name">
            <input type="text" id="phoneNumber" placeholder="Digits">
            <input type="text" id="electronicMail" placeholder="eMail">
            <button id="saveContact">Save Contact</button>
        </form>
        `
}

const eventHub = document.querySelector('#contact-form')
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveContact") {

        // Make a new object representation of a contact
        let firstName = document.querySelector('#firstName')
        let lastName = document.querySelector('#lastName')
        let phoneNumber = document.querySelector('#phoneNumber')
        let electronicMail = document.querySelector('#electronicMail')
       

        const newContact = {
            firstName: firstName.value,
            lastName: lastName.value,
            phoneNumber: phoneNumber.value,
            electronicMail: electronicMail.value,
        }

        console.log(newContact)
        // Change API state and application state
        saveContact(newContact)
        .then(ContactList) // Refresh your list of notes once you've saved your new one
    }
})