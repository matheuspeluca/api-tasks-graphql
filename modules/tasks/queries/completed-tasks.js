const models = require('../../../models');

module.exports = async (root, args, context) => {
  return models.tasks.filter(task => task.isCompleted);
};
