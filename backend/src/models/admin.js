/**
 * @class Admin
 * @property {string} email
 * @property {string} name
 * @property {string} password
 * @property {boolean} sessionActive - defaults to false
 * @method logout
 */
export class Admin {
  constructor(email, name, password) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.sessionActive = false;
  }

    logout() {
        this.sessionActive = false;
    }
}