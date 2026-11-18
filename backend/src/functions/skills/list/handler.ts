import "source-map-support/register";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { listSkills } from "@services/listSkills";

const listSkillsHandler = async () => {
	try {
		const data = await listSkills();
		return ResponseModel.ok(data, "Fetched skills");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(listSkillsHandler);
