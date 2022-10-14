import * as yup from "yup";

export const formSchema = yup.object().shape({
  title: yup.string().required("Nome da tecnologia é obrigatório"),
  status: yup.string(),
});
