import "source-map-support/register";
import { APIGatewayEvent } from "aws-lambda";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { getSkill } from "@services/getSkill";

const getSkillHandler = async (event: APIGatewayEvent) => {
	try {
		const id = event.pathParameters?.id;
		if (!id) {
			return ResponseModel.badRequest(null, "Skill id is required");
		}

		const skill = await getSkill(id);
		if (!skill) {
			return ResponseModel.notFound(null, "Unknown skill");
		}

		return ResponseModel.ok(skill, "Fetched skill");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(getSkillHandler);
