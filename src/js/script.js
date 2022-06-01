function criarCard(product) {
  const lista = document.createElement("li");
  const imagem = document.createElement("img");
  const nome = document.createElement("h3");
  const paragrafo = document.createElement("p");
  const preco = document.createElement("span");
  const btnAdd = document.createElement("button");

  imagem.src = product.img;
  imagem.alt = product.nome;
  nome.innerText = product.nome;
  preco.innerText = product.secao;
  paragrafo.innerText = `R$${product.preco}`;
  btnAdd.innerText = "Comprar";

  lista.classList.add("listCards");
  btnAdd.classList.add("btnAddCart");
  btnAdd.id = `${product.id - 1}`;

  lista.append(
    imagem,
    nome,
    preco,
    createCardList(product.componentes),
    paragrafo,
    btnAdd
  );

  return lista;
}
function createCardList(createListVita) {
  const ol = document.createElement("ol");
  for (let i = 0; i < createListVita.length; i++) {
    const li = document.createElement("li");
    li.innerText = `${i + 1}:${createListVita[i]}`;
    ol.append(li);
  }
  return ol;
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
  buttonPesquisar.addEventListener("click", () => {
    const inputFilter = produtos.filter((element) =>
      element.nome.toLowerCase().includes(inputSearch.value.toLowerCase())
    );
    renderizarCard(inputFilter);
    // criarTotal(inputFilter);
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
    // criarTotal(listaHortifruti);
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
    // criarTotal(listaPanificadora);
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
    // criarTotal(listaLaticinios);
  });
}

function btnMostarTudo() {
  const btnMostrarTodos = document.querySelector(
    ".estiloGeralBotoes--mostrarTodos"
  );
  btnMostrarTodos.addEventListener("click", () => {
    renderizarCard(produtos);
    // criarTotal(produtos);
  });
}

// function criarTotal(precoTotal) {
//   const price = precoTotal.reduce((element, obj) => {
//     return element + obj.preco;
//   }, 0);
//   const valorTotal = document.querySelector("#precoTotal");
//   valorTotal.innerText = `R$ ${price}.00`;
// }
function criarProdutoCart(item) {
  const cart = document.querySelector(".cart");

  const liCart = document.createElement("li");
  const imgCart = document.createElement("img");
  const divCartInfos = document.createElement("div");
  const tituloCart = document.createElement("h3");
  const paragrafoCart = document.createElement("p");
  const precoCart = document.createElement("span");
  const btnLixeira = document.createElement("button");

  imgCart.src = item.img;
  imgCart.alt = item.nome;
  tituloCart.innerText = item.nome;
  paragrafoCart.innerText = item.secao;
  precoCart.innerText = `R$${item.preco}`;

  liCart.classList.add("card--carrinho");
  divCartInfos.classList.add("card--infos");
  btnLixeira.classList.add("cart--lixeira");

  cart.append(liCart);

  liCart.append(imgCart, divCartInfos, btnLixeira);
  divCartInfos.append(tituloCart, paragrafoCart, precoCart);

  return cart;
}

function renderizarCarrinho(productsArray) {
  const cartLista = document.querySelector(".cart");
  cartLista.innerHTML = "";
  productsArray.forEach((element) => {
    criarProdutoCart(element);
  });
}

let carrinho = [];
addEventListener("click", (event) => {
  const clickTarget = event.target;
  if (clickTarget.className === "btnAddCart") {
    carrinho.push(produtos[Number(clickTarget.id)]);
    renderizarCarrinho(carrinho);
  }
  if (clickTarget.className === "cart--lixeira") {
    carrinho.splice(Number(clickTarget.id), 1);
    renderizarCarrinho(carrinho);
  }
  if (carrinho.length > 0) {
    const price = carrinho.reduce((acc, atual) => {
      return acc + atual.value;
    }, 0);
    const total = document.querySelector(".value--total");
    total.innerHTML = "";
    total.insertAdjacentHTML(
      "beforeend",
      `<div class="value--total">
      <p class="container--quantidade">
        <span>Quantidade:</span><span>1</span>
      </p>
      <p><span>Total:</span><span>2.00</span></p>
    </div>
      `
    );
  }
  if (carrinho.length === 0) {
    const total = document.querySelector(".emptyTotal");
    total.innerHTML = "";
    cart.innerHTML = "";
    cart.insertAdjacentHTML(
      "beforeend",
      `
      <img class="img-cart" src="img/logo-bigorna.svg" alt="" />
      <p>Adicione suas espadas</p>
      `
    );
  }
});

function chamadaDasFuncoes() {
  renderizarCard(produtos);
  btnMostarTudo();
  btnHortifruti();
  btnLaticinios();
  btnPanificadora();
  barraDePesquisa();
}
chamadaDasFuncoes();
