export default (users, { text }) => {
  return users.filter((user) => {
    const textMatch = user.firstName.toLowerCase().includes(text.toLowerCase())
                      || user.lastName.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  });
};