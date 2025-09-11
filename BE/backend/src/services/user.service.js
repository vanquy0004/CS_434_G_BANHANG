const users = [];

const getAll = async () => {
  return users;
};

const create = async (data) => {
  const newUser = { id: users.length + 1, ...data };
  users.push(newUser);
  return newUser;
};

export default { getAll, create };
