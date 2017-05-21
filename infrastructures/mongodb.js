class MongoDb {
  static saveEmailUser(user) {
    // Fake saving by just return the user object
    return user;
  }

  static isUserExists(email) {
    return false;
  }
}

module.exports = MongoDb;
