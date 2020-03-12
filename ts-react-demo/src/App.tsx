import React from 'react';
import './App.css';
import logo from './logo.svg';

interface Person {
  age?: number;
  name: string;
}

let a:Person ={
  name:'1'
}


function buildName(firstName = "Will", lastName: string) {
  return firstName + " " + lastName;
}

function buildName2(firstName , lastName?: string) {
  return firstName + " " + lastName;
}


var aa=12;
let result1 = buildName(undefined,"Bob");  
let result2 = buildName2(1,'2');  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}




class Db {
  /**
 * @param config - An object that expects the mongo_uri path
 * @returns Returns the mongo connection
 */
  public static connect = (config: {mongo_uri: string}) => {
   
  };
}


export default App;
