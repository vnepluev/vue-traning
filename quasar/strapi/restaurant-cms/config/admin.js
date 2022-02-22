module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ca56e35c5f76ee9e9a4cf6a442db9033'),
  },
});
