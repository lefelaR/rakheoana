export default {
  // IssuesTable: {
  //   Type: "AWS::DynamoDB::Table",   
  //   Properties: {
  //     TableName: "${self:provider.environment.ISSUE_TABLE}",
  //     BillingMode: "PAY_PER_REQUEST",
  //     AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
  //     KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
    
  //   },
  // },
  // CategoriesTable: {
  //   Type: "AWS::DynamoDB::Table",
  //   Properties: {
  //     TableName: "${self:provider.environment.CATEGORY_TABLE}",
  //     BillingMode: "PAY_PER_REQUEST",
  //     AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
  //     KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
    
  //   },
  // },
  // DepartmentsTable: {
  //   Type: "AWS::DynamoDB::Table",
  //   Properties: {
  //     TableName: "${self:provider.environment.DEPARTMENT_TABLE}",
  //     BillingMode: "PAY_PER_REQUEST",
  //     AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
  //     KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
    
  //   },
  // },
  RolesTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "${self:provider.environment.ROLES_TABLE}",
      BillingMode: "PAY_PER_REQUEST",
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
     
    },
  },
  // LogsTable: {
  //   Type: "AWS::DynamoDB::Table",
  //   Properties: {
  //     TableName: "${self:provider.environment.LOG_TABLE}",
  //     BillingMode: "PAY_PER_REQUEST",
  //     AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
  //     KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
  //   },
  // },
  UsersTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "${self:provider.environment.USERS_TABLE}",
      BillingMode: "PAY_PER_REQUEST",
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
    
    },
  },
  // NewslettersTable: {
  //   Type: "AWS::DynamoDB::Table",
  //   Properties: {
  //     TableName: "${self:provider.environment.NEWSLETTERS_TABLE}",
  //     BillingMode: "PAY_PER_REQUEST",
  //     AttributeDefinitions: [
  //       { AttributeName: "newsletterId", AttributeType: "S" },
  //       { AttributeName: "slug", AttributeType: "S" },
  //     ],
  //     KeySchema: [{ AttributeName: "newsletterId", KeyType: "HASH" }],
  //     GlobalSecondaryIndexes: [
  //       {
  //         IndexName: "slug",
  //         KeySchema: [{ AttributeName: "slug", KeyType: "HASH" }],
  //         Projection: { ProjectionType: "ALL" },
  //       },
  //     ],
  //   },
  // },
  // // propertiesTable: {
  // //   Type: "AWS::DynamoDB::Table",
  // //   Properties: {
  // //     TableName: "${self:provider.environment.PROPERTY_TABLE}",
  // //     BillingMode: "PAY_PER_REQUEST",
  // //     AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
  // //     KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
    
  // //   },
  // // },
  // RSVPTable: {
  //   Type: "AWS::DynamoDB::Table",
  //   Properties: {
  //     TableName: "${self:provider.environment.RSVP_TABLE}",
  //     BillingMode: "PAY_PER_REQUEST",
  //     AttributeDefinitions: [{ AttributeName: "rsvpId", AttributeType: "S" }],
  //     KeySchema: [{ AttributeName: "rsvpId", KeyType: "HASH" }],
    
  //   },
  // },
  // InteractionsTable: {
  //   Type: "AWS::DynamoDB::Table",
  //   Properties: {
  //     TableName: "${self:provider.environment.INTERACTIONS_TABLE}",
  //     BillingMode: "PAY_PER_REQUEST",
  //     AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
  //     KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
     
  //   },
  // },
  // AGMTable: {
  //   Type: "AWS::DynamoDB::Table",
  //   Properties: {
  //     TableName: "${self:provider.environment.AGM_TABLE}",
  //     BillingMode: "PAY_PER_REQUEST",
  //     AttributeDefinitions: [
  //       { AttributeName: "documentId", AttributeType: "S" },
  //     ],
  //     KeySchema: [{ AttributeName: "documentId", KeyType: "HASH" }],
     
  //   },
  // },
  // MailSubscribersTable: {
  //   Type: "AWS::DynamoDB::Table",
  //   Properties: {
  //     TableName: "${self:provider.environment.MAIL_SUBSCRIBER_TABLE}",
  //     BillingMode: "PAY_PER_REQUEST",
  //     AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
  //     KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
  //   },
  // },
 
};
