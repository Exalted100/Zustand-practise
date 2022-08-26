import {useState, useEffect} from 'react';
import FirstCounter from "./components/first";
import SecondCounter from './components/second';
import ThirdCounter from './components/third';
import useStore from "./store";
import "./App.css";

function App() {
  const [select, setSelect] = useState("first")
  const counterDisplay = useStore((state) => state.counterDisplay)

  const displayAnotherCounter = useStore((state) => state.displayAnotherCounter)

  // const onSelectChange = (e) => {
  //   console.log("changing")
  //   setSelect(e.target.value);
  //   // console.log(e.target.value)
  //   displayAnotherCounter(e.target.value)
  //   // console.log(counterDisplay)
  //   console.log("function ran with no errors")
  //   console.log(select)
  // }

  return (
    <div className="App">
      <h1>Zustand Test</h1>
      <select value={select} onChange={(e) => {
        displayAnotherCounter(e.target.value)
        setSelect(e.target.value);
      }}>
        <option value="first">First Counter</option>
        <option value="second">Second Counter</option>
        <option value="third">Third Counter</option>
      </select>
      {counterDisplay === "first" && <FirstCounter />}
      {counterDisplay === "second" && <SecondCounter />}
      {counterDisplay === "third" && <ThirdCounter />}
    </div>
  );
}

export default App;
