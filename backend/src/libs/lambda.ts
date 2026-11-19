const middy = require("@middy/core");
const middyJsonBodyParser = require("@middy/http-json-body-parser");

export const middyfy = (handler) => {
  const wrapped = middy(handler).use(middyJsonBodyParser());
  return async (event, context) => wrapped(event, context);
};
