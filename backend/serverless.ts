import type { AWS } from '@serverless/typescript';
import * as hello from '@functions/hello';
import DynamoDBTables from "./resources/DynamoDBTables"
// send contact email
// login authentication
// backend functions



const serverlessConfiguration: AWS = {
  service: 'rakheoana-backend',
  frameworkVersion: '3',
  plugins: [
    'serverless-esbuild'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region:'eu-west-1',
    tracing:{
      apiGateway:true,
      lambda:true,
    },

    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    stage:"dev",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      USERS_TABLE: "${self:service}-${self:provider.stage}-users",
      CONTACT_TABLE: "${self:service}-${self:provider.stage}-contact",
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
            Effect: "Allow",
            Action: ["sns:*"],
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
    // deploymentBucket:{
    //   name:"rakheoana-serverless-deployments",
    //   serverSideEncryption: "AES256",
    // }
  },
  // import the function via paths
  functions: { 
    ...hello,
  },

resources:{
  Resources: DynamoDBTables,
},

  package:{ patterns: ["!.dynamodb/**", "!node_modules/**"] },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    dynamodb:{
      stages:['dev','staging','main'],    
    }
  },
};

module.exports = serverlessConfiguration;
