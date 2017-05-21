class MongoDb {
  static saveEmailUser(user) {
    // Fake saving by just return the user object
    return user;
  }

  static isUserExists(email) {
    // Just assume that user never exists for now
    return false;
  }
}

module.exports = MongoDb;
