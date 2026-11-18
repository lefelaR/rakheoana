import "source-map-support/register";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { createExperience } from "@services/createExperience";

const createExperienceHandler = async (event: { body?: Record<string, unknown> }) => {
	try {
		const role = await createExperience(event.body ?? {});
		if (!role) {
			return ResponseModel.badRequest(null, "Invalid experience payload");
		}

		return ResponseModel.created(role, "Experience created");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(createExperienceHandler);