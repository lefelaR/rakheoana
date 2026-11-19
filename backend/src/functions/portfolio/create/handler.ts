import "source-map-support/register";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { createPortfolio } from "@services/createPortfolio";

const createPortfolioHandler = async (event: { body?: Record<string, unknown> }) => {
	try {
		const project = await createPortfolio(event.body ?? {});
		if (!project) {
			return ResponseModel.badRequest(null, "Invalid portfolio payload");
		}

		return ResponseModel.created(project, "Portfolio project created");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(createPortfolioHandler);
