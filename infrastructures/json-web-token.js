/**
 * JSON Web Token class is responsible for creating the JSON Web Token
 * More info: https://tools.ietf.org/html/rfc7519
 */
const jwt = require('jsonwebtoken');

class JsonWebToken {

  // generate() creates new token
  // options parameter contains the following
  //    tokenPayload
  //    secret
  //    expiration
  static generate(options) {
    const tokenOptionalInfo = {
      algorithm: 'HS256',
      expiresIn: options.expiration,
    };

    return jwt.sign(
      options.tokenPayload,
      options.secret,
      tokenOptionalInfo);
  }
}

module.exports = JsonWebToken;
