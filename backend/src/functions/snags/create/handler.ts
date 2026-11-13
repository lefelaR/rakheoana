import "source-map-support/register";
import ResponseModel, { StatusCode } from "@common/response.model";
import { createSnag } from "@repositories/snagsRepository";
import Snag from "@models/snag.model";
import Issue from "@models/issue.model";
import { middyfy } from "@common/lambda";
import Image from "@models/image.model";

const create = async (event: any) => {
  try {
    const { body } = event;
    const snag = new Snag();
    snag.title = body.title;
    snag.userid = event.requestContext.authorizer.claims.sub;
    snag.issues;
    const data = await createSnag(snag);
    
    return ResponseModel.ok(data, "Snag created");
  } catch (error) {
    const response =
      error instanceof ResponseModel
        ? error
        : new ResponseModel(null, StatusCode.ERROR, error.message);
    return response.generate();
  }
};
export const main = middyfy(create);
