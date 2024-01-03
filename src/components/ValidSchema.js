import React from "react";
import * as Yup from "yup";

export const validSchema = Yup.object({
  name: Yup.string().min(3).required("Le nom est obligatoire"),
  email: Yup.string()
    .email("Il faut saisir un email valide !")
    .required("L'adresse mail est obligatoire !"),
  password: Yup.string().required("Le mot de passe est obligatoire !"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Les mots de passe ne sont pas identiques !"
    )
    .required("Prière de confirmer le mot de passe !"),
});
