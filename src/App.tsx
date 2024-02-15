import "./App.css";
import { Contador } from "./paginas/contador/Contador";
import { Home } from "./paginas/home/Home";

function App() {
  return (
    <>
      <Home title="Home" texto="Texto da Home" />
      <Contador />
    </>
  );
}

export default App;
