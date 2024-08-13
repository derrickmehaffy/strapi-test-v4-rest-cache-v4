module.exports = ({ env }) => ({
  redis: {
    enabled: true,
    config: {
      connections: {
        default: {
          connection: {
            host: env("REDIS_HOST", "localhost"),
            port: env.int("REDIS_PORT", 6379),
            db: env.int("REDIS_DB", 0),
          },
          settings: {
            debug: true,
          },
        },
      },
    },
  },
  "rest-cache": {
    enabled: true,
    config: {
      provider: {
        name: "redis",
        options: {
          connection: "default",
        },
      },
      strategy: {
        debug: true,
        enableEtag: false,
        enableXCacheHeaders: true,
        enableAdminCTBMiddleware: true,
        resetOnStartup: false,
        clearRelatedCache: true,
        keysPrefix: env("REST_CACHE_KEYS_PREFIX", "rest-cache"),
        contentTypes: [
          {
            contentType: "api::test.test",
            routes: [
              {
                path: "/api/tests/custom/hello",
                method: "GET",
              },
            ],
          },
        ],
      },
    },
  },
});
