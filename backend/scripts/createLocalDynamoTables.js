/* eslint-disable @typescript-eslint/no-var-requires */
const {
  CreateTableCommand,
  DynamoDBClient,
  ListTablesCommand,
} = require("@aws-sdk/client-dynamodb");

const endpoint = process.env.DYNAMODB_ENDPOINT || "http://127.0.0.1:8000";
const region = process.env.AWS_REGION || "eu-central-1";

const dynamo = new DynamoDBClient({
  region,
  endpoint,
  credentials: {
    accessKeyId: "local",
    secretAccessKey: "local",
  },
});

const tables = [
  "rakheoana-backend-dev-dev-skills",
  "rakheoana-backend-dev-dev-experience",
  "rakheoana-backend-dev-dev-portfolio",
];

const createTable = async (TableName) => {
  try {
    await dynamo.send(
      new CreateTableCommand({
        TableName,
        AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
        KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
        ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
      })
    );
  } catch (err) {
    if (err.name === "ResourceInUseException") {
      return;
    }
    throw err;
  }
};

const waitForDynamo = async () => {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      await dynamo.send(new ListTablesCommand({}));
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
