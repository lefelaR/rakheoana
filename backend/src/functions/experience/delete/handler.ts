import "source-map-support/register";
import { APIGatewayEvent } from "aws-lambda";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { deleteExperience } from "@services/deleteExperience";

const deleteExperienceHandler = async (event: APIGatewayEvent) => {
	try {
		const id = event.pathParameters?.id;
		if (!id) {
			return ResponseModel.badRequest(null, "Experience id is required");
		}

		const role = await deleteExperience(id);
		if (!role) {
			return ResponseModel.notFound(null, "Experience not found");
		}

		return ResponseModel.ok(role, "Experience deleted");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(deleteExperienceHandler);
