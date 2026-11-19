import type { AWS } from "@serverless/typescript";
import dynamoDbTables from "./resources/dynamodb-tables";
import * as skillFunctions from "@functions/skills";
import * as experienceFunctions from "@functions/experience";
import * as portfolioFunctions from "@functions/portfolio";

// @serverless/typescript still types runtime as nodejs14.x and older.
type ServiceConfig = Omit<AWS, "provider"> & {
  provider: Omit<AWS["provider"], "runtime"> & {
    runtime: "nodejs24.x";
  };
};

const serverlessConfiguration: ServiceConfig = {
  service: "portfolio-website-backend-dev",
  custom: {
    prune: {
      automatic: true,
      number: 1,
      includeLayers: true,
    },
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
    dynamodb: {
      stages: ["dev", "stag", "prod"],
      start: {
        port: 8000,
        dbPath: "./.dynamodb",
        sharedDb: true,
        migrate: false,
      },
    },
    "serverless-offline": {
      httpPort: 4000,
      lambdaPort: 4002,
      httpHost: "127.0.0.1",
    },
    ["serverless-offline-aws-eventbridge"]: {
      port: 4080,
      mockEventBridgeServer: true,
      pubSubPort: 4011,
      debug: true,
      account: "",
    },
    splitStacks: {
      perFunction: false,
      perType: true,
      perGroupFunction: false,
    },
  },
  plugins: [
    "./plugins/supported-node-runtimes",
    "serverless-webpack",
    "serverless-dynamodb-local",
    "serverless-deployment-bucket",
    "serverless-prune-plugin",
    "serverless-offline-aws-eventbridge",
    "serverless-plugin-split-stacks",
    "serverless-offline",
    // "serverless-stack-termination-protection",
  ],
  package: {
    patterns: ["!.dynamodb/**", "!node_modules/**"],
  },
  provider: {
    name: "aws",
    // profile: "turati",
    runtime: "nodejs24.x",
    region: "eu-central-1",
    tracing: {
      apiGateway: true,
      lambda: true,
    },
    stage: "dev",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      SKILLS_TABLE: "${self:service}-${self:provider.stage}-skills",
      EXPERIENCE_TABLE: "${self:service}-${self:provider.stage}-experience",
      PORTFOLIO_TABLE: "${self:service}-${self:provider.stage}-portfolio",
      REGION: "${self:provider.region}",
      STAGE: "${self:provider.stage}",
    },
    deploymentBucket: {
      name: "portfolio-website-backend-dev",
      serverSideEncryption: "AES256",
    },
    iam: {
      role: {
        statements: [
          {
            Effect: "Allow",
            Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
            Resource: "*",
          },
          {
            Effect: "Allow",
            Action: "events:PutEvents",
            Resource: "*",
          },
          {
            Effect: "Allow",
            Action: [
              "dynamodb:DescribeTable",
              "dynamodb:Query",
              "dynamodb:Scan",
              "dynamodb:GetItem",
              "dynamodb:PutItem",
              "dynamodb:UpdateItem",
              "dynamodb:DeleteItem",
            ],
            Resource: "*",
          },
          {
            Effect: "Allow",
            Action: ["s3:*"],
            Resource: "*",
          },
          {
            Effect: "Allow",
            Action: ["lambda:InvokeFunction"],
            Resource: "*",
          },
          {
            Effect: "Allow",
            Action: ["ses:*"],
            Resource: "*",
          },
          {
            Sid: "VisualEditor0",
            Effect: "Allow",
            Action: [
              "cloudformation:CreateStack",
              "cloudformation:DeleteStack",
              "cloudformation:DescribeStacks",
              "cloudformation:DescribeStackEvents",
              "cloudformation:DescribeStackResource",
              "cloudformation:DescribeStackResources",
              "cloudformation:ListStackResources",
              "cloudformation:UpdateStack",
              "cloudformation:ValidateTemplate",
              "logs:CreateLogGroup",
              "logs:DescribeLogGroups",
              "logs:DeleteLogGroup",
            ],
            Resource: "*",
          },
        ],
      },
    },
  },
  //@ts-ignore
  functions: {
    ...skillFunctions,
    ...experienceFunctions,
    ...portfolioFunctions,
  },

  resources: {
    Resources: dynamoDbTables,
  },
};

module.exports = serverlessConfiguration;
