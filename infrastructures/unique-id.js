/**
 * Unique Id class is responsible for generating a Universally unique identifier
 */
const uuidV4 = require('uuid/v4');

class UniqueId {

  // generate() creates a new Universally unique identifier
  static generate() {
    // Generate a v4 UUID (random)
    // https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29
    return uuidV4();
  }
}

module.exports = UniqueId;
