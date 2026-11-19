// CJS packages export the function itself. A default import compiles to `.default`,
// which is undefined here and crashes the Lambda before it can respond.
const middy = require("@middy/core");
const middyJsonBodyParser = require("@middy/http-json-body-parser");

export const middyfy = (handler: any) => {
  const wrapped = middy(handler).use(middyJsonBodyParser());
  // Node.js 24 rejects handlers whose signature includes the callback argument.
  return async (event: unknown, context: unknown) => wrapped(event, context);
};
