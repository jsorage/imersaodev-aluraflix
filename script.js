/**
 * Pega o conteúdo do input da URL do filme.
 *
 * @return { string } - URL do filme.
 */
function pegarFilmeUrlDoInput() {
  var elementoUrlFilme = document.getElementById("filme-url");
  return elementoUrlFilme.value;
}

/**
 * Limpa input da URL do filme.
 */
function limparFilmeUrlDoInput() {
  var elementoUrlFilme = document.getElementById("filme-url");
  elementoUrlFilme.value = "";
}

/**
 * Exibe mensagem de erro na tela.
 */
function exibirMensagemErro() {
  var elementoMensagemErro = document.getElementById("mensagem-erro");
  elementoMensagemErro.style.visibility = "visible";
}

/**
 * Validar URL do filme passado por parâmetro.
 *
 * @param { string } - URL do filme a ser validado.
 * @returns { boolean } - true se a URL estiver ok, false caso contrário.
 */
function validarUrlFilme(urlFilme) {
  var tiposDeImagemAceitos = [".png", ".jpg", ".jpeg"];

  for (var tipoImagem of tiposDeImagemAceitos) {
    if (urlFilme.endsWith(tipoImagem)) {
      return true;
    }
  }

  return false;
}

/**
 * Carregar url do filme vindo do input da página e limpa input.
 */
function adicionarFilmeFavorito() {
  // pegar texto do input
  var urlFilme = pegarFilmeUrlDoInput();

  // verificar se URL é válida
  var urlValida = validarUrlFilme(urlFilme);

  if (urlValida == true) {
    // carregar imagem na tela
    carregaFilmeNaTela(urlFilme);

    // limpar texto do input
    limparFilmeUrlDoInput();
  } else {
    // exibir mensagem de erro
    exibirMensagemErro();
  }
}

/**
 * Carrega lista de filmes quando o site carregar.
 */
function inicializarListaFilmes() {
  var listaFilmes = buscarListaFilmes();

  for (var filme of listaFilmes) {
    carregaFilmeNaTela(filme);
  }
}

/**
 * Adiciona a foto de capa de um filme na tela.
 *
 * @param { string } - URL da imagem de capa do filme.
 */
function carregaFilmeNaTela(urlFilme) {
  var elementoFilme = document.createElement("img");
  elementoFilme.setAttribute("src", urlFilme);
  elementoFilme.setAttribute("class", "imagem-filme");

  var elementListaFilme = document.getElementById("lista-filmes");
  elementListaFilme.appendChild(elementoFilme);
}

/**
 * Simula uma busca aos filmes num banco de dados.
 *
 * @returns { [string] }
 */
function buscarListaFilmes() {
  var listaFilmes = [];
  listaFilmes.push(
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2-DaM8OpyTc7tBahPyUcPZ_PmvsopwsN-42T_AKlkF_-KgEu_"
  );
  listaFilmes.push(
    "https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/8676/filme_8676.jpg"
  );
  listaFilmes.push(
    "https://www.cafecomfilme.com.br/media/k2/items/cache/e4f5400ba6f2b000de3a9152e5eb34b9_XL.jpg?t=20210624_162714"
  );
  listaFilmes.push(
    "http://www.newsaiep.com/moz_news/wp-content/uploads/818382579_2_644x461_50-filmes-recentes-2017-hd-legendados-em-pt-imagens.jpg"
  );
  listaFilmes.push(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSZKtVUy1qSzlP_tyADHzW7yCp1ZTtM8r9v5FhsDr05o6X8_W"
  );

  return listaFilmes;
}

inicializarListaFilmes();