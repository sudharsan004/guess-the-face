import "./styles.css";
import Nav from ".Components/Nav";
import RandomFace from ".Components/RandomFace";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid" style={{ padding: "5% 7%" }}>
        <RandomFace />
      </div>

      {/* <Coins /> */}
    </div>
  );
}
