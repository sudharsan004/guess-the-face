import "./styles.css";
import Nav from "./Components/Nav";
import RandomFace from "./Components/RandomFace";
import Face from "./Components/Face"

export default function App() {
  
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid" style={{ padding: "5% 7%" }}>
        {/* <RandomFace /> */}
        <Face/>
        <h1>test</h1>
      </div>

      {/* <Coins /> */}
    </div>
  );
}
