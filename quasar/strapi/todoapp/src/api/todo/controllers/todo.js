/*
ctx.state.user - пользователь от которого пришел запрос
{
  id: 5,
  username: 'Strapi user',
  email: 'new_user1@test.com',
  provider: 'local',
  password: '$2a$10$.9IHHj0pSPYUQdcnx3t2TekwJJOvceAdNDQFWRCf5g9mYFmEwjx0W',
  resetPasswordToken: null,
  confirmationToken: null,
  confirmed: true,
  blocked: false,
  createdAt: '2022-02-21T09:38:08.145Z',
  updatedAt: '2022-02-21T09:38:08.145Z',
  fullName: null,
  role: {
    id: 1,
    name: 'Authenticated',
    description: 'Default role given to authenticated user.',
    type: 'authenticated',
    createdAt: '2022-02-20T20:20:57.082Z',
    updatedAt: '2022-02-21T09:21:59.853Z'
  }
}
*/

"use strict";

/**
 *  todo controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::todo.todo');

module.exports = createCoreController("api::todo.todo", ({ strapi }) => ({
  async create(ctx) {
    const todo = ctx.request.body;

    const entity = await strapi.service("api::todo.todo").create(todo);

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    sanitizedEntity.user = ctx.state.user;
    console.log(sanitizedEntity);

    return { data: sanitizedEntity };
  },

  // https://docs.strapi.io/developer-docs/latest/development/backend-customization/services.html#adding-a-new-service
  async find(ctx) {
    console.log(ctx.state.user.id);

    const entries = await strapi.db.query("api::todo.todo").findMany({
      select: ["*"],
    });

    console.log(entries);

    ctx.body = entries;

    // return { data: {} };
  },
}));
