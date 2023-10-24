const models = require('../../../models');

const createTask = async (root, { input }, context) => {
  return models.tasks.push({ ...input });
};

const deleteTask = async (root, { input }, context) => {
  const index = models.tasks.findIndex((item) => item.id === id);
  return models.tasks.splice(index, 1);};

const uptadeTask = async (root, { input }, context) => {
  const index = models.tasks.findIndex((item) => item.id === id);
  const item = models.tasks.splice(index, 1);

  return models.tasks.push({
    ...item,
    ...input,
  });
};

module.exports = {
  createTask,
  deleteTask,
  uptadeTask
};




