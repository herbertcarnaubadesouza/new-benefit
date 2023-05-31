const Cliente = () => {
  return (
    <section>
      <div className="cliente" id="cliente">
        <div className="image-wrapper"></div>
        <div className="container__cliente">
          <h2>O Maior Clube de Vantagens da América Latina </h2>
          <div className="caixa__branca">
            <div className="content-block-caixa">
              <h1 id="number-clientes">+17.500 </h1>
              <p>Lojas </p>
            </div>
            <div className="content-block-caixa">
              <h1 id="number-clientes">+1.400 </h1>
              <p>Parceiras</p>
            </div>
          </div>
          <h3>Nenhum outro oferece tantas opcões</h3>
          <button className="botao__cliente">Seja cliente</button>
        </div>
      </div>
    </section>
  );
};
export default Cliente;
