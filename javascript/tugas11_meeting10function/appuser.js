// app.js
import getUser, { userRole, getUserRole } from './userutils.js';

console.log(getUser('John Doe'));
console.log('UserRole:', userRole);
console.log('GetUserRole:', getUserRole());