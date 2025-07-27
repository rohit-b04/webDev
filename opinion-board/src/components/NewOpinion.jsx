import { useActionState } from "react";

import { use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function formAction(prevFormState, formData) {
    const userName = formData.get("userName");
    //console.log(userName)
    const title = formData.get("title");
    const yourOpinion = formData.get("body");

    let errors = [];
    if (!userName.trim()) {
      errors.push("Please enter user name");
    }
    if (title.trim().length < 5) {
      errors.push("Title must be at least 5 characters");
    }
    if (yourOpinion.trim().length < 10) {
      errors.push(
        "Give your brief opinion on the topic at least 10 chars long."
      );
    }
    if (errors.length !== 0) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          yourOpinion,
        },
      };
    }

    await addOpinion({ title, body: yourOpinion, userName });
    return { errors: null };
  }

  const [formState, formStateAction] = useActionState(formAction, {
    errors: null,
  });
  //console.log(formState);
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formStateAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValues?.yourOpinion}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((err) => (
              <li key={err}> {err} </li>
            ))}
          </ul>
        )}
        <Submit />
      </form>
    </div>
  );
}
