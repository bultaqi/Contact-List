// Function that builts and returns an HTML component representing a single note
// (Remember that fat arrow functions without curly braces automatically return?)
export const Contacts = contactObject => `
    <div class="contact-card">
        <p>${contactObject.firstName}</p>
        <p>${contactObject.lastName}</p>
        <p>${contactObject.phoneNumber}</p>
        <p>${contactObject.electronicMail}</p>
    </div>

`