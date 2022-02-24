module.exports = {
  apps: [
    {
      name: "dev:@gjsify/website-backend",
      script: "npm run watch:backend",
      instances: 1,
      env: {},
    },
    {
      name: "dev:@gjsify/website-theme",
      script: "npm run watch:theme",
      instances: 1,
      env: {},
    },
  ],
};
