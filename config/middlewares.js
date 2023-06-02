module.exports = [
  'strapi::errors',
  'strapi::security',
  // 'strapi::cors',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      // enabled: true,
      // headers: '*',
      origin: ['http://localhost:3000','http://localhost:1337', 'https://my-strapi-application-jqci7.ondigitalocean.app', 'http://moeonlinestore.com','https://moeonlinestore.com'],
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
