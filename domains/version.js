/**
 * Version domain: Responsible for displaying current number.
 * We are following the symantic version number (http://semver.org/)
 *
 *   MAJOR version when you make incompatible API changes,
 *   MINOR version when you add functionality in a backwards-compatible manner, and
 *   PATCH version when you make backwards-compatible bug fixes.
 */
class Version {
  static toString() {

    // Hard-code version number to 1 for now
    return '1.0.0';
  }
}

module.exports = Version;
