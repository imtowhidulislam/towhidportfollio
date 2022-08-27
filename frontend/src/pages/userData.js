import React from "react";
import "../style/userStyle.css";

const UserData = ({ id, firstName, lastName, userName, email, password }) => {
  return (
    <div className="userData">
      <div key={id} className="">
        <p>
          {firstName} {lastName}
        </p>
        <h4>{userName}</h4>
        <p>{email}</p>
        <div>
          <button className="userBtn">remove</button>
        </div>
      </div>
    </div>
  );
};

export default UserData;
