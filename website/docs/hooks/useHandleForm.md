---
sidebar_position: 4
---

# useHandleForm

A lightweight implementation to handle simple forms.

## Import

```jsx
import { useHandleForm } from 'hooks-arsenal';
```

## Examples

### Simple Form

The simplest usage is to provide a function to the `submitFunction` key when calling `useHandleForm`, and then using the `handleUpdate` and `handleSubmit` values to collect and update your form data.

The function provided to `submitFunction` will be called with the form values, represented as an object, where each key is an `input`'s `name` property, and its value is the `input`'s current value.

```jsx
import { useHandleForm } from 'hooks-arsenal';

function MyForm() {
  const submitFunction = (values) => {
    console.log(values); // on object with a 'username', 'password', and 'remember' key.
  };
  const { handleUpdate, handleSubmit } = useHandleForm({ submitFunction });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input name="username" onChange={handleUpdate} />
      </label>
      <label>
        Password
        <input name="password" onChange={handleUpdate} />
      </label>
      <label>
        Remember Me
        <input name="remember" type="checkbox" onChange={handleUpdate} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
```

### Async Form Submission

This hook also provides an `isSubmitting` key, which will be `true` if the `submitFunction` return value represents an inflight `Promise`. Should an error occur, the exception is caught and the `experiencedError` key will then be set to `true`. Both are reset with each form submission.

```jsx
import { useHandleForm } from 'hooks-arsenal';

function MyAsyncForm() {
  const submitFunction = async (values) => {
    // You can run through any validation here before submitting,
    // and throw an error should the validation fail to set `experiencedError`.
    await fetch('/my/api/endpoint', {
      method: 'POST',
      body: JSON.stringify(values),
    });
  };

  const { handleUpdate, handleSubmit, isSubmitting, experiencedError } = useHandleForm({
    submitFunction,
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name
        <input name="firstName" onChange={handleUpdate} />
      </label>
      <label>
        Last Name
        <input name="lastName" onChange={handleUpdate} />
      </label>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {experiencedError && <p>Sorry, something went wrong.</p>}
    </form>
  );
}

export default MyAsyncForm;
```

### Controlled Form

If you need to make the input controllable to pre-populate data, run validation on change, or change what's rendering you can access the current form data through the `formValues` key. This can be pre-filled by providing an optional `initialValue` key to `useHandleForm`.

```jsx
import { useHandleForm } from 'hooks-arsenal';

function MyControlledForm() {
  const submitFunction = (values) => {
    // whatever onSubmit logic you need.
  };

  const initialValue = { firstName: 'Bojack', lastName: 'Horseman' };

  const { handleUpdate, handleSubmit, formValues } = useHandleForm({
    submitFunction,
    initialValue,
  });

  const { firstName, lastName } = formValues;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name
        <input name="firstName" onChange={handleUpdate} value={firstName} />
      </label>
      <label>
        Last Name
        <input name="lastName" onChange={handleUpdate} value={lastName} />
      </label>
      <button type="submit">Submit</button>
      <div>
        <p>{`Hello there ${firstName} ${lastName}!`}</p>
      </div>
    </form>
  );
}

export default MyControlledForm;
```
