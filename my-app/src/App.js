// index.js
import React from "react";
import ReactDOM from "react-dom";
import Child from './child';

function App() {
  // const [title, setTitle] = useState("这是一个 title")
  // const [title2, setTitle2] = useState("这是一个 title11")
  // window.tt= setTitle;
  // window.tt2= setTitle2;
  // let title ='test'
  // let  setTitle =()=>{}
  // console.warn(' [App]',title)
  return (
    <div className="App">
      {/* <h1>{ title }</h1> */}
      {/* <button onClick={() => setTitle("title 已经改变")}>改名字</button> */}
      <Child name="桃桃11"></Child>
    </div>
  );
}


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }
  render() {
      return (
      <div className={cx('category')} >
        <p>test</p>
      </div>
    );
  }
}


alert(1);
const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);

export default App;