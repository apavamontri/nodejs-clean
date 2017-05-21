/**
 * User domain contains information about user
 */
class User {
  get Id() {
    return this.id;
  }
  set Id(id) {
    this.id = id;
  }

  get Email() {
    return this.email;
  }
  set Email(email) {
    this.email = email;
  }

  get Password() {
    return this.password;
  }
  set Password(password) {
    this.password = password;
  }

  get WebToken() {
    return this.webToken;
  }
  set WebToken(webToken) {
    this.webToken = webToken;
  }

  // toString() print out user information in easy to read format
  toString() {
    const output = {
      Id: this.id,
      Email: this.email,
      Password: this.password,
      WebToken: this.webToken,
    };

    return JSON.stringify(output, null, 2);
  }
}

module.exports = User;
