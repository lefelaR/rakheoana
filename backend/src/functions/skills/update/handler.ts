import "source-map-support/register";
import { APIGatewayEvent } from "aws-lambda";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { updateSkill } from "@services/updateSkill";

const updateSkillHandler = async (event: APIGatewayEvent) => {
	try {
		const id = event.pathParameters?.id;
		if (!id) {
			return ResponseModel.badRequest(null, "Skill id is required");
		}

		const selected = (event.body as { selected?: unknown } | null)?.selected;
		if (typeof selected !== "boolean") {
			return ResponseModel.badRequest(null, "Skill selected flag is required");
		}

		const skill = await updateSkill(id, selected);
		if (!skill) {
			return ResponseModel.badRequest(null, "Unknown skill");
		}

		return ResponseModel.ok(skill, "Skill updated");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(updateSkillHandler);
