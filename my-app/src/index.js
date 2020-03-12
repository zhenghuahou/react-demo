// index.js
import React from 'react'
import ReactDOM from 'react-dom'

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
    </div>
  )
}

// eslint-disable-next-line 
class UNControlledComponents extends React.Component {
  constructor() {
    super()
    // 在构造函数中创建一个引用
    this.second = React.createRef()
  }
  handleSubmit = e => {
    // 阻止原生默认事件的触发
    e.preventDefault()
    const demo = document.getElementById('demo');
    console.warn(' React.createRef():',React.createRef(),' this.seconde:',this.second);
    console.warn(' this.second.current == demo',this.second.current === demo);//true
    console.warn('this.second.current.value:',this.second.current.value)
  }
  render() {
    return (
      <div>
        {/* 自动将输入框中输入的值放在实例的second属性上 */}
        密码
        <input name="password" type="text" id='demo' ref={this.second} />
        <br />
        <button onClick={this.handleSubmit}>非受控组件</button>
      </div>
    )
  }
}

// eslint-disable-next-line 
class ControlledComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {txtVal: ''};
    window.ccin = this;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({txtVal: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.txtVal);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          txtVal:{this.state.txtVal} 
          <br></br>
          <input type="text" value={this.state.txtVal} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'hello'
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <div className={'category'}>
        {/* <UNControlledComponents></UNControlledComponents> */}
        <ControlledComponents></ControlledComponents>
        <p>test</p>
        <input type="text" value={this.state.msg} readOnly/>
        <p>msg:{this.state.msg}</p>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Main />, rootElement)

export default App
