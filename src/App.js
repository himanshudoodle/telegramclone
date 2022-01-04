import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber } from "./Redux/actions/index";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
