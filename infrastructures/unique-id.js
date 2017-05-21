/**
 * Unique Id class is responsible for generating a Universally unique identifier
 */
const uuidV4 = require('uuid/v4');

class UniqueId {
  /**
   * getNewUuid() Generate new Universally unique identifier
   */
  static getNewUuid() {
    /**
     * Generate a v4 UUID (random)
     * https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29
     */
    return uuidV4();
  }
}

module.exports = UniqueId;
