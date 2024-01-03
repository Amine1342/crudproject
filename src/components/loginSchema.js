import React from "react";
import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Il faut saisir un email valide !")
    .required("L'adresse mail est obligatoire !"),
  password: Yup.string().required("Le mot de passe est obligatoire !"),
});
