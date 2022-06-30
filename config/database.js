module.exports = ({ env }) => {
  return {
    connection: {
      client: "mysql",
      connection: {
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: false,
      },
      debug: false, //env('NODE_ENV') !== 'production',
    },
  };
};
