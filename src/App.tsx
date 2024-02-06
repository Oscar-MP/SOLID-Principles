import "./App.css";
import SingleResponsability from "./SingleResponsability/SingleResponsability";

function App() {
  return (
    <div className="root-div">
      <h1>SOLID Principles</h1>
      <ul>
        <li>
          <button>Single Responsability Principle</button>
        </li>
        <li>
          <button>Open-closed Principle</button>
        </li>
      </ul>

      <div className="wrapper">
        <SingleResponsability />
      </div>
    </div>
  );
}

export default App;
