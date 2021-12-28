import React from "react";
import Nav from "./components/Nav";
import DefaultLayout from "./layouts/default";

const Edit = (props) => {
  return (
    <DefaultLayout title="Edit Cat">
      <Nav />
      {props.message ? <h2>{props.message}</h2> : null}
      <form
        // action="/edit"
        method="POST"
        class="cat-form"
        encType="multipart/form-data"
      >
        <h2>Edit Cat</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value="Pretty Cat" name="name" />
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description">
          Dominant and aggressive to other cats. Will probably eat you in your
          sleep. Very cute tho.
        </textarea>
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" />
        <label htmlFor="group">Breed</label>
        <select id="group" name="breed">
          <option value="Fluffy Cat">Fluffy Cat</option>
        </select>
        <input type="hidden" name="owner" value="piotr" />
        <button type="submit">Edit Cat</button>
      </form>
    </DefaultLayout>
  );
};

module.exports = Edit;
