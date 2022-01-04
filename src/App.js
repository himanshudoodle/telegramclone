import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber } from "./Redux/actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{myState}</h1>
      <button onClick={() => dispatch(incNumber(5))}>inc</button>
    </div>
  );
}

export default App;
