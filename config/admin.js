module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '33c3fb0787f7318ff5d487d0ebbc78c5'),
  },
});
