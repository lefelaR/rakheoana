import "source-map-support/register";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { listExperience } from "@services/listExperience";

const listExperienceHandler = async () => {
	try {
		const data = await listExperience();
		return ResponseModel.ok(data, "Fetched experience");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(listExperienceHandler);