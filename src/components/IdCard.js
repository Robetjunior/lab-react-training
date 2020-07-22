import React from "react";

function IdCard(props) {
  return (
    <div className="id-card">
      <img src={props.picture} alt="A person" />
      <ul>
        <li>
          <strong>First Name: </strong> {props.firstName}
        </li>
      </ul>
      <ul>
        <li>
          <strong>Last Name: </strong> {props.lastName}
        </li>
      </ul>
      <ul>
        <li>
          <strong>Gender: </strong> {props.gender}
        </li>
      </ul>
      <ul>
        <li>
          <strong>Birth: </strong> {props.birth.toDateString()}
        </li>
      </ul>
    </div>
  );
}

export default IdCard;
