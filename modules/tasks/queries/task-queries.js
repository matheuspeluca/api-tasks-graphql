const models = require('../../../models');

const getCompletedTasks = async (root, args, context) => {
    return models.tasks.filter(task => task.isCompleted);
};
  
const getPendingTasks = async (root, args, context) => {
    return models.tasks.filter(task => !task.isCompleted);
};
  
const getTaskById = async (root, { id }, context) => {
    return models.tasks.find((item) => item.id === id);
};
  
const getAllTasks = async (root, args, context) => {
    return models.tasks;
};
  
module.exports = {
    getCompletedTasks,
    getPendingTasks,
    getTaskById,
    getAllTasks
};