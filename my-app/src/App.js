import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";


const Person = ({ personId }) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});

  console.error(
    "<<<<<<<<<<[Person] loading :",
    loading,
    "person:",
    person,
    " personId:",
    personId,
    " time:",
    +new Date()
  );

  useEffect(() => {
    // this : undefined
    console.warn(
      "[useEffect] personId:",
      personId,
      "loading:",
      loading,
      "person:",
      person,
      +new Date()
    );
    setLoading(true);
    setTimeout(()=>{
      // eslint-disable-next-line
        console.warn(' setTimeout after  setLoading(true) &&&&&&&& loading:',loading,+new Date);
    });
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then(response => response.json())
      .then(data => {
        // this : undefined
        console.warn(
          "[useEffect] ajax response:",
          data,
          "  time:",
          +new Date(),
          "loading:",
          loading,
          "-->person:",
          person
        );
        //
        setLoading(+new Date() + "@hjou"); //person函数会重新执行
        setPerson(data); //person函数会重新执行
      });
  // eslint-disable-next-line
  }, [personId]);

  console.error(
    ">>>>>>>>[Person] loading :",
    loading,
    "person:",
    person,
    " personId:",
    personId,
    " time:",
    +new Date()
  );
  if (loading === true) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <p>You're viewing: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
    </div>
  );
};

function App() {
  const [show, setShow] = useState("1");

  return (
    <div className="App">
      <Person personId={show} />
      <div>
        Show:{show}
        <button onClick={() => setShow("1")}>Luke</button>
        <button onClick={() => setShow("2")}>C-3PO</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;