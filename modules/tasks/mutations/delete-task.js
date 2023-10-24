const models = require('../../../models');

module.exports = async (root, { id }, context) => {
  const index = models.tasks.findIndex((item) => item.id === id);
  return models.tasks.splice(index, 1);
};
