"use strict";

/**
 *  recipe controller
 */

/*
	ctx.query = { 'ingridients.ingridient_in': [ 'rice', 'tuna' ] }
*/

const _ = require("lodash");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::recipe.recipe", ({ strapi }) => ({
  async findAnd(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const rez = ctx.state.auth.strategy;
    console.log(rez, ctx.state);

    const allRecipesList = await Promise.all(
      ctx.query["ingridients.ingridient_in"].map(async (ingredient) => {
        const recipes = await strapi.service("api::recipe.recipe").find({
          "ingridients.ingridient_in": ingredient,
        });
        return recipes;
      })
    );

    // console.warn("allRecipesList =", allRecipesList);
    // console.log(allRecipesList[0], allRecipesList[1]);

    const intersection = allRecipesList.reduce((acc, list) =>
      _.intersectionWith(
        acc,
        list,
        (first, second) => first.id === second.id,
        allRecipesList[0]
      )
    );

    console.log("intersection", intersection);

    const entity = await strapi.service("api::recipe.recipe").find(id, query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
