const createUser = User => (name, birthday) => {
  if (!name || !birthday)
    throw new Error(`Name: ${name} birthday: ${birthday}`);

  const user = new User({ name, birthday });
  return user.save();
};

const listUsers = User => () => {
  return User.find({});
};

module.exports = User => {
  return {
    createUser: createUser(User),
    listUsers: listUsers(User)
  };
};
