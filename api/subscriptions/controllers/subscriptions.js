'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async (ctx) => {
        ctx.request.body.author = ctx.state.user.id;
        return strapi.services.subscriptions.create(ctx.request.body);
      },
      
};
