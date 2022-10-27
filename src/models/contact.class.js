export class Contact {
    nameContact = '';
    surnamesContact = '';
    email = '';
    connected = false;

    constructor( nameContact, surnamesContact, email, connected){
        this.nameContact = nameContact;
        this.surnamesContact = surnamesContact;
        this.email = email;
        this.connected = connected;
    }
}