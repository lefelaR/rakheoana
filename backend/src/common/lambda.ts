// CJS packages export the function itself. A default import compiles to `.default`,
// which is undefined here and crashes the Lambda before it can respond.
const middy = require("@middy/core");
const middyJsonBodyParser = require("@middy/http-json-body-parser");

export const middyfy = (handler: any) => {
  return middy(handler).use(middyJsonBodyParser());
};
