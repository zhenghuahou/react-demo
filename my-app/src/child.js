import React from "react";

function Child(props) {
  console.warn('[Child]',props);
  return (
    <>
      <button onClick={props.onClick}>改标题</button>
      <h1>{props.name}</h1>
    </>
  );
}

//减少重新 render 的次数
export default React.memo(Child);