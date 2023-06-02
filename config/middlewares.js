module.exports = [
  'strapi::errors',
  // {
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': [
              "'self'",
              'data:',
              'blob:',
              'dl.airtable.com',
              '*.digitaloceanspaces.com',
            ],
            'media-src': [
              "'self'",
              'data:',
              'blob:',
              'dl.airtable.com',
              '*.digitaloceanspaces.com',
            ],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
  // }
  // 'strapi::security',
  // 'strapi::cors',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      // enabled: true,
      // headers: '*',
      origin: ['http://localhost:3000','http://localhost:1337', 'http://my-strapi-application-jqci7.ondigitalocean.app','https://my-strapi-application-jqci7.ondigitalocean.app', 'http://moeonlinestore.com','https://moeonlinestore.com'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],

    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
