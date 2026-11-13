import "source-map-support/register";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { selectSkill } from "@services/selectSkill";

const selectSkillHandler = async (event: { body?: { name?: string } }) => {
	try {
		const name = event.body?.name?.trim();
		if (!name) {
			return ResponseModel.badRequest(null, "Skill name is required");
		}

		const skill = await selectSkill(name);
		if (!skill) {
			return ResponseModel.badRequest(null, "Unknown skill");
		}

		return ResponseModel.created(skill, "Skill selected");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(selectSkillHandler);
