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
}


Users.prototype.setFirstName = function (firstName) {
    this.firstName = firstName;
}

Users.prototype.getFirstName = function () {
    return this.firstName;
}

Users.prototype.setLastName = function (lastName) {
    this.lastName = lastName
}

Users.prototype.getLastName = function () {
    return this.lastName;
}

Users.prototype.setEmail = function (email) {
    this.email = email;
}

Users.prototype.getEmail = function () {
    return this.email;
}

Users.prototype.setGender = function (gender) {
    this.gender = gender;
}

Users.prototype.getGender = function () {
    return this.gender;
}

Users.prototype.setDateOfBirth = function (dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
}

Users.prototype.getDateOfBirth = function () {
    return this.dateOfBirth;
}

Users.prototype.setPassword = function (password) {
    this.password = password;
}

Users.prototype.getPassword = function () {
    return this.password;
}

mongoose.model('UsersModel', new Users("firstName", "lastName", "test@test.com", "Male", "password", "30/01").createSchema());