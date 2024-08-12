// src/components/ContactForm.tsx
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import styles from "../styles/Contact.module.css";

// Define el tipo para los valores del formulario
interface FormValues {
  name: string;
  email: string;
  message: string;
}

// Validaciones con Yup
const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo es obligatorio"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000); // Mensaje visible durante 5 segundos

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    setIsSubmitting(true);

    // Simula un envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      resetForm();
    }, 2000);
  };

  return (
    <div id="contact">
      <div className={styles.container}>
        <h1 className={styles.skillsHeading}>Contacto</h1>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.formGroup}>
                <Field
                  type="text"
                  name="name"
                  className={`${styles.formInput} ${
                    touched.name && errors.name ? styles.error : ""
                  } ${touched.name && !errors.name ? styles.success : ""}`}
                  placeholder="Nombre"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>

              <div className={styles.formGroup}>
                <Field
                  type="email"
                  name="email"
                  className={`${styles.formInput} ${
                    touched.email && errors.email ? styles.error : ""
                  } ${touched.email && !errors.email ? styles.success : ""}`}
                  placeholder="Correo electrónico"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>

              <div className={styles.formGroup}>
                <Field
                  as="textarea"
                  name="message"
                  className={`${styles.formInput} ${styles.formInputTextarea} ${
                    touched.message && errors.message ? styles.error : ""
                  } ${
                    touched.message && !errors.message ? styles.success : ""
                  }`}
                  placeholder="Mensaje"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>

              {isSubmitting && <div className={styles.spinner}>🔄</div>}
              {isSubmitted && !isSubmitting && (
                <div className={styles.successMessage}>
                  ¡Mensaje enviado con éxito!
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
