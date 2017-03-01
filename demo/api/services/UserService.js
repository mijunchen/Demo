
module.exports = {
  passOrNot: function (options, done) {
    sails.models
      .user.findOne({email: options.email})
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
  },

  register: function (options,done) {
      sails.models
          .user.findOne({email: options.email})
          .exec(function (err, user) {
              if (err)
                  return done(err);

              if (!user) {
                  sails.models
                      .module
                      .create(options.values)
                      .exec(function (err, record) {
                          if (err)
                              return done(err);

                          if (record && record.id)
                              sails.redis.module(record.id)
                                  .set()
                                  .then(function (retVal) {
                                      var success = retVal.success;
                                      sails.log.silly('[UserService:register]redis.set ' + success);
                                  });

                          return done(null, record);
                      });
                 // return done(null, true);
              }
              else {
                  return done(null, false);
              }
          });
  }
};
