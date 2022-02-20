module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cea66a61806a44bbb902fbd71fef6583'),
  },
});
