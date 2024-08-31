import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../components/DynamicForm/styles.module.css";

function DynamicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const firstName = watch("firstName");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <h2>Registration Form</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "First Name should contain at least 3 characters",
            },
          })}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>
      {firstName.length >= 3 && (
        <div className={styles.inputContainer}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Last Name should contain at least 3 characters",
              },
            })}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
