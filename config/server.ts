export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
  url:'https://humble-boat-e900a8f80d.strapiapp.com'
});
