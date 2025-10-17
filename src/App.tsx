import "./App.css";
import Header from "./components/Header";
import Pesquisa from "./components/Pesquisa";
import UltimosLancamentos from "./components/UltimosLancamentos";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Pesquisa />
      </div>
      <div className="AppSmall">
        <UltimosLancamentos />
      </div>
    </>
  );
}

export default App;
