"use strict";

/**
 *  transaction controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::transaction.transaction",
  ({ strapi }) => ({
    async create(ctx) {
      try {
        const {
          amount: transactionAmount,
          fromAccount: fromAccountId,
          toAccount: toAccountId,
        } = ctx.request.body.data;

        const fromAccount = await strapi.db
          .query("api::account.account")
          .findOne({
            select: ["amount", "currencyCode"],
            where: { id: fromAccountId },
          });

        const toAccount = await strapi.db
          .query("api::account.account")
          .findOne({
            select: ["amount", "currencyCode"],
            where: { id: toAccountId },
          });

        if (fromAccount?.amount < transactionAmount) {
          throw new Error("Bakiye yetersiz");
        }

        if (fromAccount?.currencyCode !== toAccount?.currencyCode) {
          throw new Error("Hesap para birimleri uyuşmuyor");
        }

        await strapi.db.query("api::account.account").update({
          where: { id: fromAccountId },
          data: {
            amount: fromAccount.amount - transactionAmount,
          },
        });

        await strapi.db.query("api::account.account").update({
          where: { id: toAccountId },
          data: {
            amount: toAccount.amount + transactionAmount,
          },
        });

        const response = await super.create(ctx);
        return response;
      } catch (error) {
        ctx.badRequest(error.message);
      }
    },
  })
);
