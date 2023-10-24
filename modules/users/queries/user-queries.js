const models = require('../../../models');

const getUserById = async (root, { id }, context) => {
  return models.users.find((item) => item.id === id);
};

const getAllUsers = async (root, args, context) => {
  return models.users;
};

module.exports = {
  getUserById,
  getAllUsers
};