import React from "react";
import Nav from "./components/Nav";
import DefaultLayout from "./layouts/default";

const Login = (props) => {
  return (
    <DefaultLayout title="Edit Cat">
      <Nav />
      {props.message ? <h2>{props.message}</h2> : null}
      <form
        // Required
        action="/login"
        method="POST" // overwrite the default GET method
        encType="multipart/form-data"
        // Optional
        class="cat-form"
      >
        <h2>Login</h2>
        <div className="">
          <input type="text" name="email" placeholder="Add email here..." />
        </div>
        <div className="">
          <input
            type="password"
            name="password"
            placeholder="Add password..."
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </DefaultLayout>
  );
};

module.exports = Login;
