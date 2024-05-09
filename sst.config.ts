/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "my-nuxt-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("MyBucket", {
      public: true
    });
    new sst.aws.Nuxt("MyWeb", {
      link: [bucket]
    });

    return {
      name: bucket.name
    };
  },
});
