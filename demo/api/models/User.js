module.exports = {

    attributes: {
        id: {
            type: 'integer',
            autoIncrement: true
        },

        //注册邮箱
        email: {
            type: 'email',
            required: true,
        },

        //密码
        password: {
            type: 'password',
            required: true
        },

        //店铺名称
        storeName: {
            type: 'text'
        },

        //店铺类型
        // 0 => 企业商户
        // 1 => 个体商户
        storeType: {
            type: 'integer',
            defaultsTo: 0
        },

        //联系人
        telephone: {
            type: 'text'
        }


    }
};

