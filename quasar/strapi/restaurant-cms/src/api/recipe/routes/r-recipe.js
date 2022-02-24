module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/recipes/and",
      handler: "recipe.findAnd",
    },
  ],
};
