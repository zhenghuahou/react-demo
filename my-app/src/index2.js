import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [num, setNum] = useState(0);

  // 一个非常耗时的一个计算函数
  // result 最后返回的值是 49995000
  function expensiveFn() {
    let result = 0;

    for (let i = 0; i < 10; i++) {
      console.warn('[expensiveFn] i:',i);
      result += i;
    }
    
    console.log('[expensiveFn] result:',result) // 49995000
    return result;
  }

  // const base = expensiveFn();
  const base = useMemo(expensiveFn, []);

  console.error('[App] base:',base)
  return (
    <div className="App">
      <h1>count：{num}</h1>
      <button onClick={() => setNum(num + base)}>+1</button>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;