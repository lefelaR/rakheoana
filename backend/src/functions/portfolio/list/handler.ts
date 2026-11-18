import "source-map-support/register";
import ResponseModel, { StatusCode } from "@common/response.model";
import { middyfy } from "@common/lambda";
import { listPortfolio } from "@services/listPortfolio";

const listPortfolioHandler = async () => {
	try {
		const data = await listPortfolio();
		return ResponseModel.ok(data, "Fetched portfolio");
	} catch (error) {
		const response =
			error instanceof ResponseModel
				? error
				: new ResponseModel(null, StatusCode.ERROR, error.message);
		return response.generate();
	}
};

export const main = middyfy(listPortfolioHandler);
