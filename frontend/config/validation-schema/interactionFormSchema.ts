import * as Yup from "yup";

const interactionFormSchema = Yup.object().shape({
    type: Yup.string().required("The interaction type is required"),
    title: Yup.string().required("Description is required"),
    notes: Yup.string().required("Notes are required"),
});

export default interactionFormSchema
