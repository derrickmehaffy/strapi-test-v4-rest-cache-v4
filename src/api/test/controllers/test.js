"use strict";

/**
 * test controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::test.test", ({ strapi }) => ({
  async hello(ctx) {
    return {
      hello: "world",
    };
  },
}));
