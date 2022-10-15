import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Nome tem que ter no minimo 3 caracteres"),
  email: yup.string().required("Email é obrigatório").email("Email inválido!"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .matches(/[A-Z]/, "Senha com pelos menos uma letra maiúscula")
    .matches(/[a-z]/, "Senha com pelos menos uma letra minúscula")
    .matches(/[0-9]/, "Senha com pelos menos um numero")
    .matches(/\W|_/, "Senha com pelos menos um caractere especial")
    .min(8, "Senha com no minimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha é obrigatória")
    .oneOf([yup.ref("password")], "Confirmação de senha deve ser igual senha"),
  bio: yup.string().required("Bio é obrigatório"),
  contact: yup.string().required("Contato é obrigatório"),
  course_module: yup.string(),
  button: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação de senha deve ser igual senha"),
});
