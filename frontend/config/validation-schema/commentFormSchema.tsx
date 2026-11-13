import * as Yup from "yup";

const issueFormSchema = Yup.object().shape({
    author: Yup.string().required("Name is required"),
    message: Yup.string().required("Comment is required")
});

export default issueFormSchema
