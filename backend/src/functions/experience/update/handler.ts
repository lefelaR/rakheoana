import "source-map-support/register";
import { APIGatewayEvent } from "aws-lambda";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { updateExperience } from "@services/updateExperience";

const updateExperienceHandler = async (event: APIGatewayEvent) => {
	try {
		const id = event.pathParameters?.id;
		if (!id) {
			return ResponseModel.badRequest(null, "Experience id is required");
		}

		const role = await updateExperience(id, event.body ?? {});
		if (!role) {
			return ResponseModel.badRequest(null, "Invalid experience payload");
		}

		return ResponseModel.ok(role, "Experience updated");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(updateExperienceHandler);