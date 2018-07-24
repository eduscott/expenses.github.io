const Connection = require('./Connection');
const Database = require('./Database');
const Dictionary = require('./Dictionary');

module.exports = Person;

function Person(firstName, lastName, cpf, email, birthDate, phoneNumber, password) {
    let __firstName = firstName;
    let __lastName = lastName
    let __cpf = cpf;
    let __email = email;
    let __birthDate = birthDate;
    let __phoneNumber = phoneNumber;

    //public get methods
    this.getFirstName = () => {
        return __firstName;
    }
    this.getLastName = () => {
        return __lastName;
    }
    this.getCpf = () => {
        return __cpf;
    }
    this.getEmail = () => {
        return __email;
    }
    this.getBirthDate = () => {
        return __birthDate;
    }
    this.getPhoneNumber = () => {
        return __phoneNumber;
    }
}

Person.prototype.insertPerson = () => {
    let data = new Dictionary(['firstName', 'lastName', 'cpf', 'email', 'birthDate', 'phoneNumber'],
        [this.getFirstName(), this.getLastName(), this.getCpf(), this.getEmail(), this.getBirthDate(), this.getPhoneNumber()]);
    Database.insertData(new Connection('', '', '', ''), 'person', data);
}

Person.prototype.deletePerson = () => {
    let key = new Dictionary('cpf', this.getCpf());
    Database.insertData(new Connection('', '', '', ''), 'person', key);
}

Person.prototype.updatePerson = (key) => {
    let data = new Dictionary(['firstName', 'lastName', 'cpf', 'email', 'birthDate', 'phoneNumber'],
        [this.getFirstName(), this.getLastName(), this.getCpf(), this.getEmail(), this.getBirthDate(), this.getPhoneNumber()]);
    Database.updateData(new Connection('', '', '', ''), 'person', key, data);
}


