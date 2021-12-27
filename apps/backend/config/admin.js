module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "secret"), //Enter your own secret
  },
});
