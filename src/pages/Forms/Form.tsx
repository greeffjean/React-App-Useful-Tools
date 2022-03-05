import { Form, Field } from "react-final-form";
import Input from "./components/input";
import "./style.css";
import * as yup from 'yup';

const errMessageMap: {[key: string]: string} = {
  email: "Please enter a valid email address",
  age: "No udner 18's allowed"
}

// Yup Schema Validation
let schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().min(18).required(),
  bio: yup.string().max(200),
  email: yup.string().email().required(),
  password: yup.string().required()
});

// Initial Data
const initialData = {
  firstName: 'Jean'
};


const MyForm = () => {

  // Event Handlers
  const onSubmit = async (e: any) => {

    let errors = {};
    
    if (e.firstName !== "Jean") {
      return { firstName: "Unknown first name" }
    }

    for (const [key, value] of Object.entries(e)) {
      const c = await yup.reach(schema, key).isValid(value);
      if (!c) {
        errors = {
          [key]: errMessageMap[key] ? errMessageMap[key] : "This is an error!",
          ...errors
        }
      }
    }

    return Object.keys(errors).length > 0 ? errors : window.alert("Your form looks good!")
    
  };

  const validate = (e: any) => {
    const errors: any = {};
    if (e.bio && e.bio.length < 5) {
      errors.bio = "Please add more characters!"
    }

    return errors
  };

  // Example Validators
  const validateInt = (v: any) => {
    const n = parseInt(v);
    return n ? undefined : 'Must be a number';
  }

  const composeValidators = (...validators: any[]) => (value: any) =>
    validators.reduce((error, validator) => error || validator(value), undefined)

  // DOM
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialData}
      render={({ handleSubmit, submitting, submitError }) => (
        <form onSubmit={handleSubmit}>
          <h2>Simple Default Input</h2>

          <Field
            name="firstName"
            render={({ input, meta }) => (
              <div className="form-field">
                <label>First Name</label>
                <input {...input} name="firstName" required />
                {meta.error || meta.submitError && <div>{meta.error || meta.submitError}</div>}
              </div>
            )}
          />

          <Field
            name="lastName"
            render={({ input, meta }) => (
              <div className="form-field">
                <label>Last Name</label>
                <Input {...input} />
                {meta.error || meta.submitError && <div>{meta.error || meta.submitError}</div>}
              </div>
            )}
          />

          <Field
            name="age"
            // validate={validateInt}
            render={({ input, meta }) => (
              <div className="form-field">
                <label>Age</label>
                <input {...input} name="age" required />
                {meta.error || meta.submitError && <div>{meta.error || meta.submitError}</div>}
              </div>
            )}
          />

          <Field
            name="bio"
            render={({ input, meta }) => (
              <div className="form-field">
                <label>Bio</label>
                <textarea {...input} />
                {meta.error || meta.submitError && <div>{meta.error || meta.submitError}</div>}
              </div>
            )}
          />

          <Field
            name="email"
            render={({ input, meta }) => (
              <div className="form-field">
                <label>Email</label>
                <input {...input} name="email" required />
                {meta.error || meta.submitError && <div>{meta.error || meta.submitError}</div>}
              </div>
            )}
          />

          <Field
            name="password"
            render={({ input, meta }) => (
              <div className="form-field">
                <label>Password</label>
                <input {...input} name="password" required />
                {meta.error || meta.submitError && <div>{meta.error || meta.submitError}</div>}
              </div>
            )}
          />

          {submitError && <div className="error">{submitError}</div>}
          <button type="submit" disabled={submitting}>Submit</button>
        </form>
      )}
    />
  )
}



export default MyForm