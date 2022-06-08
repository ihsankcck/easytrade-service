'use strict';

/**
 *  transaction controller
 */




const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::transaction.transaction', ({ strapi }) =>  ({
    async create(ctx) {
        console.log("dsdsd")

        const response = await super.create(ctx);
        return response
    }
}))

// module.exports = createCoreController('api::transaction.transaction', ({ strapi }) => ({
//     async create(ctx) {
//         console.log("dsdsd")

//         const response = await super.create(ctx);
//         return response
//     }
// }));
