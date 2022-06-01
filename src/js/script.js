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

// let carrinho = [];
// addEventListener("click", (event) => {
//   const clickTarget = event.target;
//   if (clickTarget.className === "btn-add") {
//     carrinho.push(data[Number(clickTarget.id - 1)]);
//     cart.innerHTML = "";
//     carrinho.map((element, index) => {
//       createCart(element, index);
//     });
//   }
//   if (clickTarget.className === "btn-remove") {
//     carrinho.splice(Number(clickTarget.id - 1), 1);
//     cart.innerHTML = "";
//     carrinho.map((element, index) => {
//       createCart(element, index);
//     });
//   }
//   if (carrinho.length > 0) {
//     const price = carrinho.reduce((acc, adedonha) => {
//       return acc + adedonha.value;
//     }, 0);
//     const total = document.querySelector(".emptyTotal");
//     total.innerHTML = "";
//     total.insertAdjacentHTML(
//       "beforeend",
//       `<div class="total">
//       <p>Quantidade: <span>${carrinho.length}</span></p>
//       <p>Total: <span>R$${price}.00</span></p>
//       </div>
//       `
//     );
//   }
//   if (carrinho.length === 0) {
//     const total = document.querySelector(".emptyTotal");
//     total.innerHTML = "";
//     cart.innerHTML = "";
//     cart.insertAdjacentHTML(
//       "beforeend",
//       `
//       <img class="img-cart" src="img/logo-bigorna.svg" alt="" />
//       <p>Adicione suas espadas</p>
//       `
//     );
//   }
// });
// cart.insertAdjacentHTML(
//   "beforeend",
//   `
//   <img class="img-cart" src="img/logo-bigorna.svg" alt="" />
//   <p>Adicione suas espadas</p>

//   `
// );

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
