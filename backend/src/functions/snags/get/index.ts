import { handlerPath } from "@common/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  tracing: true,
  events: [
    {
      http: {
        method: "get",
        path: "/snags/{snagId}",
        cors: true,
        authorizer: {
          name: "authorizer",
          arn: "arn:aws:cognito-idp:eu-central-1:550384794237:userpool/eu-central-1_404AJBMoz",
        },
      },
    },
  ],
};
