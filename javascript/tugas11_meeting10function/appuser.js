// app.js
import getUser, { userRole, getUserRole } from './userutils.jsu';

console.log(getUser('John Doe'));
console.log('UserRole:', userRole);
console.log('GetUserRole:', getUserRole());