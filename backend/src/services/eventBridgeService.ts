import {
	EventBridgeClient,
	PutEventsCommand,
	PutEventsCommandInput,
	PutEventsCommandOutput,
} from "@aws-sdk/client-eventbridge";
import { region } from "./awsService";

export const Buses = {
	notificationBus:
		"arn:aws:events:eu-central-1:768086662889:event-bus/notifications",
};

const client = new EventBridgeClient({
	region: region(),
	...(process.env.IS_OFFLINE ? { endpoint: "http://127.0.0.1:4080" } : {}),
});

export const putEvents = (
	input: PutEventsCommandInput
): Promise<PutEventsCommandOutput> => client.send(new PutEventsCommand(input));

export default { putEvents };
