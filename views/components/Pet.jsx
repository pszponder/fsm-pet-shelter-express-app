import React from "react";

const Pet = ({ img, name, alt, breed, description }) => {
  return (
    <li>
      <img src={img} alt={alt} />
      <h3>{name}</h3>
      <p>
        <span>Breed: </span>
        {breed}
      </p>
      <p>
        <span>Description: </span>
        {description}
      </p>
      <ul className="buttons">
        <li className="btn edit">
          <a href="/edit">Change Info</a>
        </li>
        <li className="btn delete">
          <a href="/delete">New Home</a>
        </li>
      </ul>
    </li>
  );
};

export default Pet;
