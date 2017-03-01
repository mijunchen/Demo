var serviceUser = require('../services/UserService');

/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    //判断账号密码是否匹配
    passOrNot: function (req, res) {
        var email = req.query.email;
        var password = req.query.password;

        var options = {
            email: email,
            password: password
        };

        var done = function (err, retVal) {
            if (err) {
                return res.serverError({
                    message: '登录失败'
                });
            }
            return res.ok({
                success: true,
                message: '登录成功'
            });
        };

        serviceUser.passOrNot(options, done);
    },

    //商家注册
    register: function (req, res) {
        // var email = req.query.email;
        // var password = req.query.password;
        // var storeName = req.query.storeName;
        // var storeType = req.query.storeType;
        // var telephone = req.query.telephone;
        //
        // var options = {
        //     email: email,
        //     password: password,
        //     storeName: storeName,
        //     storeType: storeType,
        //     telephone: telephone
        // };
        //
        // var done = function (err, retVal) {
        //     if (err) {
        //         return res.serverError(err);
        //     }
        //     return res.ok(retVal);
        // };
        //
        // serviceUser.register(options, done);

        var options = {
            values: {
                email: req.body.email,
                password: req.body.password,
                storeName: req.body.storeName,
                storeType: req.body.storeType,
                telephone: req.body.telephone
            }
        };

        var done = function (err, record) {
            if (err) {
                sails.log.error(err);
                return res.serverError({
                    message: '注册失败'
                });
            }
            sails.log.silly(record);
            return res.ok({
                success: true,
                message: '注册成功'
            });
        };

        serviceUser.register(options, done);
    }
};

