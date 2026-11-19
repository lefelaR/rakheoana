export default {
  SkillsTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "${self:provider.environment.SKILLS_TABLE}",
      BillingMode: "PAY_PER_REQUEST",
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
    },
  },
  ExperienceTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "${self:provider.environment.EXPERIENCE_TABLE}",
      BillingMode: "PAY_PER_REQUEST",
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
    },
  },
  PortfolioTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "${self:provider.environment.PORTFOLIO_TABLE}",
      BillingMode: "PAY_PER_REQUEST",
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
    },
  },
};
