import swaggerJSDoc from 'swagger-jsdoc';

const PORT = process.env.PORT || 3000;
const options = {
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'Hoyo Api', // Title (required)
      version: '1.0.0', // Version (required)
    },
    components: {
      securitySchemes: {
        basicAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    basePath: '/api/v1',
    tags: [
      {
        name: 'general',
        description: 'model name goes here, eg "users"',
        externalDocs: {
          description: 'Find out more about swagger-js docs',
          url:
            'https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md',
        },
      },
      {
        name: 'user',
        description: 'user endpoints',
      },
      {
        name: 'items',
        description: 'items endpoints',
      },
      {
        name: 'cart',
        description: 'cart endpoints',
      },
    ],
    servers: [
      {
        url: `http://localhost:${PORT}/api/v1`,
        description: 'Local server',
      },
    ],
  },
  // Path to the API docs
  apis: ['**/routes/*.ts'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
export const swaggerSpec = swaggerJSDoc(options);
