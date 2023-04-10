import { useFormInput } from './utils/customHooks';

const FormComponent = () => {
  const firstNameProps = useFormInput('Mary');
  const lastNameProps = useFormInput('Poppins');

  return (
    <>
      <label htmlFor="firstName">
        First Name: <input type="text" name="firstName" {...firstNameProps} />
      </label>
      <br />
      <label htmlFor="lastName">
        Last Name: <input type="text" name="lastName" {...lastNameProps} />
      </label>
      <p>
        <b>
          Good Morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
};

export default FormComponent;
