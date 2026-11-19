import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
	BatchWriteCommand,
	BatchWriteCommandInput,
	BatchWriteCommandOutput,
	DeleteCommand,
	DeleteCommandInput,
	DeleteCommandOutput,
	DynamoDBDocumentClient,
	GetCommand,
	GetCommandInput,
	GetCommandOutput,
	PutCommand,
	PutCommandInput,
	PutCommandOutput,
	QueryCommand,
	QueryCommandInput,
	QueryCommandOutput,
	ScanCommand,
	ScanCommandInput,
	ScanCommandOutput,
	UpdateCommand,
	UpdateCommandInput,
	UpdateCommandOutput,
} from "@aws-sdk/lib-dynamodb";
import * as awsXRay from "aws-xray-sdk";
import BusinessException from "../common/businessException.model";
import { region } from "./awsService";

const buildDocumentClient = (): DynamoDBDocumentClient => {
	const offline = Boolean(process.env.IS_OFFLINE);
	const client = new DynamoDBClient(
		offline
			? {
					region: "eu-central-1",
					endpoint: "http://localhost:8000",
					credentials: {
						accessKeyId: "local",
						secretAccessKey: "local",
					},
				}
			: { region: region() }
	);

	if (!offline) {
		awsXRay.captureAWSv3Client(client);
	}

	return DynamoDBDocumentClient.from(client);
};

class DynamoDatabaseService {
	documentClient: DynamoDBDocumentClient;

	constructor() {
		this.documentClient = buildDocumentClient();
	}

	public create = async (params: PutCommandInput): Promise<PutCommandOutput> => {
		try {
			return await this.documentClient.send(new PutCommand(params));
		} catch (error) {
			throw new BusinessException(`create-error: ${error}`);
		}
	};

	public batchCreate = async (
		params: BatchWriteCommandInput
	): Promise<BatchWriteCommandOutput> => {
		try {
			return await this.documentClient.send(new BatchWriteCommand(params));
		} catch (error) {
			throw new BusinessException(`batch-write-error: ${error}`);
		}
	};

	public update = async (
		params: Omit<UpdateCommandInput, "ReturnValues"> & { ReturnValues?: string }
	): Promise<UpdateCommandOutput> => {
		try {
			return await this.documentClient.send(
				new UpdateCommand(params as UpdateCommandInput)
			);
		} catch (error) {
			throw new BusinessException(`update-error: ${error}`);
		}
	};

	public query = async (
		params: QueryCommandInput
	): Promise<QueryCommandOutput> => {
		try {
			return await this.documentClient.send(new QueryCommand(params));
		} catch (error) {
			throw new BusinessException(`query-error: ${error}`);
		}
	};

	public get = async (params: GetCommandInput): Promise<GetCommandOutput> => {
		try {
			return await this.documentClient.send(new GetCommand(params));
		} catch (error) {
			throw new BusinessException(`get-error: ${error}`);
		}
	};

	public delete = async (
		params: DeleteCommandInput
	): Promise<DeleteCommandOutput> => {
		try {
			return await this.documentClient.send(new DeleteCommand(params));
		} catch (error) {
			throw new BusinessException(`delete-error: ${error}`);
		}
	};

	public async scan(params: ScanCommandInput): Promise<ScanCommandOutput> {
		try {
			return await this.documentClient.send(new ScanCommand(params));
		} catch (error) {
			throw new BusinessException(`get-all-error: ${error}`);
		}
	}
}

export default new DynamoDatabaseService();
