// userUtils.js
const userRole = 'admin';

function getUser(name) {
  return `User: ${name}`;
}

function getUserRole() {
  return userRole;
}

export default getUser;
export { userRole, getUserRole };