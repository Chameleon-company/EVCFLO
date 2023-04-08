import { DivCard, DivContainer, DivContainerImg, DivInfo } from "./styleCard";

export default function Card({
  adicionarAoCarrinho,
  LanchesFiltrados,
  lanchePesquisado,
}) {
  return (
    <>
      <DivContainer>
        {LanchesFiltrados.map((lanch) => (
          <DivCard key={lanch.id}>
            <DivContainerImg>
              <img src={lanch.img} alt="imagem" />
            </DivContainerImg>
            <DivInfo>
              <h3>{lanch.name}</h3>
              <span>Charging capacity : {lanch.price}</span>
              <br />
              <span>EVs simultaneously : {lanch.simultaneously}</span>
              <br />
              <span>Cable type : {lanch.type}</span>
              <br />
              <span>Dimensions :  {lanch.Dimensions}</span>
              <br />
              <p>Price : {lanch.price}</p>
              <br />
              <button onClick={() => adicionarAoCarrinho(lanch)}>
                Add to cart
              </button>
            </DivInfo>
          </DivCard>
        ))}
      </DivContainer>
    </>
  );
}
