var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const crypto = require('crypto');


class Users {
    constructor(firstName, lastName, email, gender, password, dateOfBirth) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.updatedAt = Date.now;

    }

    createSchema() {
        return new Schema({
            firstName: String,
            lastName: String,
            email: String,
            gender: String,
            password: String,
            dateOfBirth: Date,
            updatedAt: Date
        });
    }

    hashPassword() {
        this.setPassword(crypto.createHash('sha512').update(this.password).digest('hex'));
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    getFirstName() {
        return this.firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName
    }

    getLastName() {
        return this.lastName;
    }

    setEmail(email) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getGender() {
        return this.gender;
    }

    setDateOfBirth(dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    getDateOfBirth() {
        return this.dateOfBirth;
    }

    setPassword(password) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }

}

mongoose.model('UsersModel', new Users("firstName", "lastName", "test@test.com", "Male", "password", "30/01").createSchema());