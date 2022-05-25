function criarCard(product) {
  const lista = document.createElement("li");
  const imagem = document.createElement("img");
  const nome = document.createElement("h3");
  const paragrafo = document.createElement("p");
  const preco = document.createElement("span");

  imagem.src = product.img;
  imagem.alt = product.nome;
  nome.innerText = product.nome;
  preco.innerText = product.secao;
  paragrafo.innerText = `R$${product.preco}.00`;

  lista.append(imagem, nome, preco, paragrafo );

  return lista;
}

function renderizarCard(productsArray) {
  const ulLista = document.querySelector(".containerListaProdutos ul");
  ulLista.innerHTML = "";
  productsArray.forEach((element) => {
    const productsList = criarCard(element);
    ulLista.append(productsList);
  });
}

function barraDePesquisa() {
  const buttonPesquisar = document.querySelector(
    ".estiloGeralBotoes--botaoBuscaPorNome"
  );
  const inputSearch = document.querySelector(".campoBuscaPorNome");
  buttonPesquisar.addEventListener("click", (event) => {
    const inputFilter = produtos.filter(
      (element) =>
        element.nome.toLowerCase() == inputSearch.value.toLowerCase() ||
        element.categoria.toLowerCase() == inputSearch.value.toLowerCase()
    );
    renderizarCard(inputFilter);
    criarTotal(inputFilter);
  });
}

function btnHortifruti() {
  const btnMostrarHorti = document.querySelector(
    ".estiloGeralBotoes--filtrarHortifruti"
  );
  btnMostrarHorti.addEventListener("click", () => {
    const listaHortifruti = produtos.filter((produto) => {
      return produto.secao === "Hortifruti";
    });
    renderizarCard(listaHortifruti);
    criarTotal(listaHortifruti);
  });
}

function btnPanificadora() {
  const btnMostrarPanificadora = document.querySelector(
    ".estiloGeralBotoes--filtrarPanificadora"
  );
  btnMostrarPanificadora.addEventListener("click", () => {
    const listaPanificadora = produtos.filter((produto) => {
      return produto.secao === "Panificadora";
    });
    renderizarCard(listaPanificadora);
    criarTotal(listaPanificadora);
  });
}

function btnLaticinios() {
  const btnMostrarLaticinios = document.querySelector(
    ".estiloGeralBotoes--filtrarLaticinios"
  );
  btnMostrarLaticinios.addEventListener("click", () => {
    const listaLaticinios = produtos.filter((produto) => {
      return produto.secao === "Laticínio";
    });
    renderizarCard(listaLaticinios);
    criarTotal(listaLaticinios);
  });
}

function btnMostarTudo() {
  const btnMostrarTodos = document.querySelector(
    ".estiloGeralBotoes--mostrarTodos"
  );
  btnMostrarTodos.addEventListener("click", () => {
    renderizarCard(produtos);
    criarTotal(produtos);
  });
}

function criarTotal(precoTotal) {
  const price = precoTotal.reduce((element, obj) => {
    return element + obj.preco;
  }, 0);
  const valorTotal = document.querySelector("#precoTotal");
  valorTotal.innerText = `R$ ${price}.00`;
}

function chamadaDasFuncoes() {
  renderizarCard(produtos);
  criarTotal(produtos);
  btnMostarTudo();
  btnHortifruti();
  btnLaticinios();
  btnPanificadora();
  barraDePesquisa();
}
chamadaDasFuncoes();
