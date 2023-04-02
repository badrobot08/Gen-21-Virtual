import React from "react";

export default function (props) {
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.personName}</h1>
            <h1>{item.description}</h1>
            hh
            <hr />
          </div>
        );
      })}
    </div>
  );
}
