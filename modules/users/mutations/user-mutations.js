const models = require('../../../models');

const createUser = async (root, { input }, context) => {
    return models.users.push(input);
};

const deleteUser = async (root, { id }, context) => {
    const index = models.users.findIndex((item) => item.id === id);
    return models.users.splice(index, 1);
};

const updateUser = async (root, { id, input }, context) => {
    const index = models.users.findIndex((item) => item.id === id);
    const item = models.users.splice(index, 1);

    return models.users.push({
        ...item,
        ...input,
  });
};

module.exports = {
    createUser,
    deleteUser,
    updateUser
};
