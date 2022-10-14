import * as yup from "yup";

export const formSchema = yup.object().shape({
  title: yup
    .string()
    .required("Nome da tecnologia é obrigatório")
    .matches(/^\w*$/, "Não é permitido espaços"),
  status: yup.string(),
});
