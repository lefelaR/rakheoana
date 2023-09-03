import * as Yup from "yup";

const issueFormSchema = Yup.object().shape({
    createdBy: Yup.string().required("Name is required").min(3, "Name must be atleast 3 characters."),
    creatorEmail: Yup.string().trim()
        .required("Email is required")
        .email("Please enter a valid email address"),
    categoryId: Yup.string().required("Please choose a category"),
    description: Yup.string().required("Please enter a description").min(5, "Description must be atleast 5 characters."),
    address: Yup.string().notRequired()
});

export default issueFormSchema
