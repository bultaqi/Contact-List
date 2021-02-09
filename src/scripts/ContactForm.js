import {saveContact} from './ContactDataProvider.js'
import {ContactList} from './ContactList.js'

//Target for the form and its HTML 
const contentTarget = document.querySelector("#contact-form")

//An exporting function that builds HTML for the form
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

//Target for the event listener
const eventHub = document.querySelector('#contact-form')
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveContact") {

        //Variables targeting specific inputs to save data from
        let firstName = document.querySelector('#firstName')
        let lastName = document.querySelector('#lastName')
        let phoneNumber = document.querySelector('#phoneNumber')
        let electronicMail = document.querySelector('#electronicMail')
       
        //Making a new object representation of a contact and populating from the target its value to save
        const newContact = {
            firstName: firstName.value,
            lastName: lastName.value,
            phoneNumber: phoneNumber.value,
            electronicMail: electronicMail.value,
        }
        // Change API state and application state
        saveContact(newContact)
        // Refresh your list of notes once you've saved your new one
        .then(ContactList)
    }
})