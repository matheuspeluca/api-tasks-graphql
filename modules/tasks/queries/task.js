const models = require('../../../models');

module.exports = async (root, { id }, context) => {
  return models.tasks.find((item) => item.id === id);
};
