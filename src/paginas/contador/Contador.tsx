import { useState } from "react";

export function Contador() {
  const [valor, setValor] = useState(0);

  function incrementar() {
    setValor(valor + 1);
  }

  return (
    <>
      <h1>Contador: {valor}</h1>
      <button onClick={incrementar}>Incrementar 1</button>
    </>
  );
}
