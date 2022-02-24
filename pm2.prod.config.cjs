module.exports = {
  apps: [
    {
      name: "prod:@gjsify/website-backend",
      script: "npm run start:backend",
      instances: 1,
      env: {},
    },
  ],
};
