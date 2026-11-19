import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "eu-central-1" });

export const sendEmail = async (
	to: string,
	from: string,
	subject: string,
	text: string
) => {
	const params = {
		Destination: {
			ToAddresses: [`${to}`],
		},
		Message: {
			Body: {
				Text: { Data: `${text}` },
			},
			Subject: { Data: `${subject}` },
		},
		Source: `${from}`,
	};

	try {
		return await ses.send(new SendEmailCommand(params));
	} catch (res) {
		console.log(res);
		return (res as Error).message;
	}
};
