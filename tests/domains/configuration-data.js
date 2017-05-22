const expect = require('chai').expect;
const ConfigrationData = require('../../domains/configuration-data');

describe('ConfigurationData', () => {
  describe('Properties', () => {
    let config;

    beforeEach(() => {
      config = new ConfigrationData();
    });

    it('should return correct MongoDBUrl', () => {
      const mongoDBUrl = 'mongodb://localhost:27017';

      config.MongoDBUrl = mongoDBUrl;

      expect(config.MongoDBUrl).to.equal(mongoDBUrl);
    });

    it('should return correct Node Envioronment', () => {
      const nodeEnvironment = 'test';

      config.NodeEnv = nodeEnvironment;

      expect(config.NodeEnv).to.equal(nodeEnvironment);
    });

    it('should return correct Secret key', () => {
      const secretKey = "super-secret";

      config.SecretKey = secretKey;

      expect(config.SecretKey).to.equal(secretKey);
    });
  });

  describe('toString()', () => {
    it('should produce the correct output', () => {
      const config = new ConfigrationData();

      config.MongoDBUrl = 'mongodb://localhost:27017';
      config.NodeEnv = 'testing';
      config.SecretKey = 'super-secret';

      const output = config.toString();

      const expected = {
        MongoDBUrl: 'mongodb://localhost:27017',
        NodeEnv: 'testing',
        SecretKey: 'super-secret',
      };

      const expectOutput = JSON.stringify(expected, null, 2);

      expect(output).to.equal(expectOutput);
    });
  });
});

