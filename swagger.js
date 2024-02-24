const swaggerJSDoc = require('swagger-jsdoc');
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
          title: "Profile",
          version: "1.0.0",
          description: "Description of your API",
        },
      servers: [{ url: "http://localhost:5000/api/v1/" }],
    },
    apis: ["./api/routes/*.js"],
  };

  const specs = swaggerJSDoc(options);

  module.exports = specs;
