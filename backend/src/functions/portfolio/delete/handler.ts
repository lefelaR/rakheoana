import "source-map-support/register";
import { APIGatewayEvent } from "aws-lambda";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { deletePortfolio } from "@services/deletePortfolio";

const deletePortfolioHandler = async (event: APIGatewayEvent) => {
	try {
		const id = event.pathParameters?.id;
		if (!id) {
			return ResponseModel.badRequest(null, "Portfolio id is required");
		}

		const project = await deletePortfolio(id);
		if (!project) {
			return ResponseModel.notFound(null, "Portfolio project not found");
		}

		return ResponseModel.ok(project, "Portfolio project deleted");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(deletePortfolioHandler);
