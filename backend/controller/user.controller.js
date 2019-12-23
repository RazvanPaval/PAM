const User = require("../model/User");
const userCtrl = {};

const users = [];
users.push(new User("Dany", "400"));
users.push(new User("Alex", "7500"));
users.push(new User("Dorel", "50"));

userCtrl.user = (request, response) => {
    response.send(users);
};
userCtrl.userByname = (request, response) => {
    console.log(request.params.name);

    response.send(users.find(h => h.highscore === parseInt(request.params.highscore)));
};

module.exports = userCtrl;