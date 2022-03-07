module.exports = {
  apps: [
    {
      name: "prod:@gjsify/website-backend",
      script: "npm run start:prod",
      instances: 1,
      env: {},
    },
  ],
};
