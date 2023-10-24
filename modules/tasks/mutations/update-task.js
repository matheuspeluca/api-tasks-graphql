const models = require('../../../models');

module.exports = async (root, { id, input }, context) => {
  const index = models.tasks.findIndex((item) => item.id === id);
  const item = models.tasks.splice(index, 1);

  return models.tasks.push({
    ...item,
    ...input,
  });
};
