module.exports = {
  routes: [
    {
      method: "GET",
      path: "/tests/custom/hello",
      handler: "api::test.test.hello",
    },
  ],
};
