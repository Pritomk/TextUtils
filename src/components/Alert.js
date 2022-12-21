import React from "react";

export default function Alert(props) {
  return (
    props.alert &&
    <div>
      {console.log(props)}
      <div className={`alert alert-${props.alert.type}`} role="alert">
        {props.alert.msg}
      </div>
    </div>
  );
}
