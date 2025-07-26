import React, { useActionState } from "react";

import {
  hasMinLength,
  isEmail,
  isEqualToOtherValue,
  isNotEmpty,
} from "../util/validation";

export default function Signup() {
  function signupAction(prevFormState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const role = formData.get("role");
    // console.log(role)
    const acquisition = formData.getAll("acquisition");
    const terms = formData.get("terms");
    //console.log(acquisition);

    let errors = [];

    if (!isEmail(email)) {
      errors.push("Invalid Email Address");
    }
    if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
      errors.push("You must provide password with at least six characters");
    }
    if (!isEqualToOtherValue(password, confirmPassword)) {
      errors.push("Passwords do not match");
    }
    if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
      errors.push("Please provide both your first name and last name");
    }
    if (!isNotEmpty(role)) errors.push("Please enter a role");
    if (!terms) {
      errors.push("You must agree to the terms and conditions");
    }
    if (!acquisition.length === 0) {
      errors.push("Please select at least one acquisition channel");
    }

    console.log("Signup action");

    if (errors.length > 0) {
      return { errors };
    }
    return { errors: null };
  }

  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  }); // useActionState wants first arg as an action function. Second arg is the initial value, when the signupAction is not yet executed

  const options = ["Student", "Teacher", "Employee", "Founder", "Other"];

  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          {options.map((it) => (
            <option value={it} key={it}>{it}</option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      {formState.errors && (
        <ul className="errors">
          {formState.errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
