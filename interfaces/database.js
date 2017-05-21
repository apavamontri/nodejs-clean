class Database {
  constructor(options) {
    this.databaseAdapter = options.DatabaseAdapter;
  }

  saveEmailUser(user) {
    return this.databaseAdapter.saveEmailUser(user);
  }

  isUserExists(email) {
    return this.databaseAdapter.isUserExists(email);
  }
}

module.exports = Database;
