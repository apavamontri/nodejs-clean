/**
 * User usecases is a business logic of user
 */
const UserDomain = require('../domains/user');

class User {
  constructor(options) {
    this.configurationData = options.ConfigurationData;
    this.authenticationInterface = options.AuthenticationInterface;
    this.databaseInterface = options.DatabaseInterface;
  }

  createNewEmailUser(options) {
    if (!options && typeof options === 'undefined') {
      throw new Error('Missing (Email) user information');
    }

    if (!options.Email
      || !options.Password) {
      throw new Error('Missing Email and/or password information');
    }

    if (this.databaseInterface.isUserExists(options.Email)) {
      throw new Error(`User [${options.Email} already exists.`);
    }

    const newUser = new UserDomain();

    newUser.Id = this.authenticationInterface.getNewUserId();
    newUser.Email = options.Email;
    newUser.Password = options.Password;

    newUser.WebToken = this.authenticationInterface.getNewWebToken({
      tokenPayload: {
        Id: newUser.Id,
      },
      secret: this.configurationData.SecretKey,
      expiration: this.expiresOneYearFromNow(),
    });

    return this.databaseInterface.saveEmailUser(newUser);
  }

  // Get number of seconds until token is expired
  // This is will be used in the "expiresIn" options
  // when creating the JWT token
  // More info: https://tools.ietf.org/html/rfc7519#section-4.1.4
  expiresOneYearFromNow() {
    const now = new Date();
    const nowInMilliseconds = now.getTime();

    const nextYearInMilliseconds = new Date(
      new Date().setFullYear(now.getFullYear() + 1)).getTime();

    return (nextYearInMilliseconds - nowInMilliseconds) / 1000;
  }

  static toString() {
    return 'User interactor';
  }
}

module.exports = User;
