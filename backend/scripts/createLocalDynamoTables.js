/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require("aws-sdk");

const endpoint = process.env.DYNAMODB_ENDPOINT || "http://127.0.0.1:8000";
const region = process.env.AWS_REGION || "eu-central-1";

const dynamo = new AWS.DynamoDB({
  region,
  endpoint,
  accessKeyId: "local",
  secretAccessKey: "local",
});

const tables = [
  "rakheoana-backend-dev-dev-roles",
  "rakheoana-backend-dev-dev-skills",
  "rakheoana-backend-dev-dev-users",
];

const createTable = (TableName) =>
  new Promise((resolve, reject) => {
    dynamo.createTable(
      {
        TableName,
        AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
        KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
        ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
      },
      (err) => {
        if (err && err.code === "ResourceInUseException") {
          resolve();
          return;
        }
        if (err) {
          reject(err);
          return;
        }
        resolve();
      }
    );
  });

const waitForDynamo = async () => {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      await dynamo.listTables().promise();
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
  throw new Error(`DynamoDB not reachable at ${endpoint}`);
};

const main = async () => {
  await waitForDynamo();
  for (const name of tables) {
    await createTable(name);
    console.log(`Table ready: ${name}`);
  }
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});