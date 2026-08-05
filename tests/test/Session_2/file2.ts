import { User } from './file1';

const userObj = { name: "Veera", age: 27 };

const user = User.createFromObject(userObj);

console.log(user.greet());