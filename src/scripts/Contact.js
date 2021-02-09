//A function that builds an HTML component that represents a single contact
export const Contacts = contactObject => `
    <div class="contact-card">
        <p>${contactObject.firstName}</p>
        <p>${contactObject.lastName}</p>
        <p>${contactObject.phoneNumber}</p>
        <p>${contactObject.electronicMail}</p>
    </div>

`
// (Remember that fat arrow functions without curly braces automatically return?)