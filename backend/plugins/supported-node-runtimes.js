"use strict";

// Framework 3.40's schema stops at nodejs20.x. Lambda no longer accepts
// updates for that runtime, so extend the enum before config validation.
const RUNTIMES = ["nodejs22.x", "nodejs24.x"];

class SupportedNodeRuntimes {
  constructor(serverless) {
    const runtimeSchema =
      serverless.configSchemaHandler.schema.definitions.awsLambdaRuntime;

    if (!runtimeSchema || !Array.isArray(runtimeSchema.enum)) {
      return;
    }

    for (const runtime of RUNTIMES) {
      if (!runtimeSchema.enum.includes(runtime)) {
        runtimeSchema.enum.push(runtime);
      }
    }
  }
}

module.exports = SupportedNodeRuntimes;
