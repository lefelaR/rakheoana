import "source-map-support/register";
import { APIGatewayEvent } from "aws-lambda";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { updatePortfolio } from "@services/updatePortfolio";

const updatePortfolioHandler = async (event: APIGatewayEvent) => {
	try {
		const id = event.pathParameters?.id;
		if (!id) {
			return ResponseModel.badRequest(null, "Portfolio id is required");
		}

		const project = await updatePortfolio(id, event.body ?? {});
		if (!project) {
			return ResponseModel.badRequest(null, "Invalid portfolio payload");
		}

		return ResponseModel.ok(project, "Portfolio project updated");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(updatePortfolioHandler);
