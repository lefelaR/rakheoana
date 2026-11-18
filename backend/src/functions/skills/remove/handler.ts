import "source-map-support/register";
import { APIGatewayEvent } from "aws-lambda";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { removeSkill } from "@services/removeSkill";

const removeSkillHandler = async (event: APIGatewayEvent) => {
	try {
		const id = event.pathParameters?.id;
		if (!id) {
			return ResponseModel.badRequest(null, "Skill id is required");
		}

		const skill = await removeSkill(id);
		if (!skill) {
			return ResponseModel.badRequest(null, "Unknown skill");
		}

		return ResponseModel.ok(skill, "Skill removed");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(removeSkillHandler);
