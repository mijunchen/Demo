var serviceUser = require('../services/UserService');

/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	passOrNot: function (req, res) {
	  var id = req.query.id;
    var password = req.query.password;

    var options = {
      id: id,
      password: password
    };

    var done = function (err, retVal) {
      if (err) {
        return res.serverError(err);
      }
      return res.ok(retVal);
    };

    serviceUser.passOrNot(options, done);
  }
};

