import React from "react";
import { useFormik } from "formik";
import { validSchema } from "./ValidSchema";

function Register() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: validSchema,
      onSubmit: (values, actions) => {
        console.log(values);
        actions.resetForm();
      },
    });

  return (
    <section
      className="vh-150 bg-image"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp",
        margin: "5px 0px 5px 0px",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Créer un compte
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <label htmlFor="name">Nom :</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Saisir votre nom"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />

                      <div className="error_container">
                        {errors.name && touched.name && (
                          <p className="form_error text-danger">
                            {errors.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label htmlFor="email">Email :</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Saisir votre email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <div className="error_container">
                        {errors.email && touched.email && (
                          <p className="form_error text-danger">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label htmlFor="password">Mot de passe :</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Saisir votre mot de passe"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <div className="error_container">
                        {errors.password && touched.password && (
                          <p className="form_error text-danger">
                            {errors.password}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label htmlFor="confirmPassword">
                        Confirmer mot de passe :
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control form-control-lg"
                        placeholder="Saisir le mot de passe de nouveau"
                        value={values.confirmPassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <div className="error_container">
                        {errors.confirmPassword && touched.confirmPassword && (
                          <p className="form_error text-danger">
                            {errors.confirmPassword}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        S'enregistrer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
