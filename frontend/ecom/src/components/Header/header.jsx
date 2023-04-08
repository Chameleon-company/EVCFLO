import React from "react";
import { Headerr } from "./styleHeader";

function Header({ lanches, setLanchesFiltrados, setLanchePesquisado }) {
  function dadosImput(event) {
    setLanchePesquisado(event.target.value);
    setLanchesFiltrados(
      lanches.filter(
        (item) =>
          item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.category.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  function naoCarregarAPagina(event) {
    event.preventDefault();
  }
  return (
    <Headerr>
      <>
        <h1>EV Product</h1>
      </>

      <form>
        <input type="text" placeholder="Enter Product" onChange={dadosImput} />
        <button onClick={(e) => naoCarregarAPagina(e)}>Search</button>
      </form>
    </Headerr>
  );
}

export default Header;
