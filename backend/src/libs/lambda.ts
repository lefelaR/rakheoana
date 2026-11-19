const middy = require("@middy/core");
const middyJsonBodyParser = require("@middy/http-json-body-parser");

export const middyfy = (handler) => {
  return middy(handler).use(middyJsonBodyParser());
};
