import AWS from "aws-sdk";
import axios from "axios";

const SES = new AWS.SES({ region: "eu-west-1" });

export const sendEmail = async (
  to: string,
  from: string,
  subject: string,
  text: string
) => {
  var params = {
    Destination: {
      BccAddresses: [],
      CcAddresses: ["recipient3@example.com"],
      ToAddresses: [`${to}`, "rakheoanalefela@yahoo.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: "This is the message body in text format.",
        },
      },
      Subject: {
        Data: "Test email",
      },
    },
    Source: "rakgew@hotmail.com",
  };

  try {
    const result = SES.sendEmail(params).promise();
    return result;
  } catch (res: any) {
    console.log(res);
    return res.message;
  }
};
