"use strict";

/**
 *  account controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::account.account", ({ strapi }) => ({
  async create(ctx) {
    try {
      const { title, currencyCode, user } = ctx.request.body.data;

      ctx.request.body.data = {
        title,
        currencyCode,
        user,
        amount: 0,
        no: String(Math.floor(Date.now() * Math.random())),
      };

      const response = await super.create(ctx);
      return response;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
}));
