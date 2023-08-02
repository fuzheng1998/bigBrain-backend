export class Admin {
  constructor(email, name, password) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.sessionActive = true;
  }

    logout() {
        this.sessionActive = false;
    }
}