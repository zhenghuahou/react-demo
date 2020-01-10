import React, { useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import Child from "./child";

function App() {
  const [title, setTitle] = useState("这是一个 title");
  const [subtitle, setSubtitle] = useState("我是一个副标题");
  console.warn(' [App','title:',title,' subtitle:',subtitle)
  const callback = () => {
      setTitle("标题改变了");
      return '华子'
    };
    //减少重新 render 的次数
    // eslint-disable-next-line
    const memoizedCallback = useMemo(()=>callback, [])
    const memoizedCallback2 = useCallback(callback,[])

    // console.error(' memoizedCallback2:',memoizedCallback2,' memoizedCallback:',memoizedCallback, memoizedCallback=== memoizedCallback2)//memoizedCallback=== memoizedCallback2 :true

  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button onClick={() => setSubtitle("副标题改变了")}>改副标题</button><br></br><br></br>
      <Child onClick={memoizedCallback} name="桃桃" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;