
module.exports = {
  passOrNot: function (options, done) {
    sails.models
      .user.findOne({id: options.id})
      .exec(function (err, user) {
        if (err)
          return done(err);

        if (user && user.password == options.password) {
          return done(null, true);
        }
        else {
          return done(null, false);
        }
      });
  }
};
