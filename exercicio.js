function verificar() {
  // Cria um novo objeto de data
  let data = new Date();
  // Obtém o ano atual
  let ano = data.getFullYear();
  // Obtém o mês atual (adiciona 1 porque getMonth() retorna de 0 a 11)
  let mes = data.getMonth() + 1;
  // Obtém o elemento de entrada do ano
  let fano = document.getElementById("txtano");
  // Obtém o elemento de entrada do mês
  let fmes = document.getElementById("txtmes");

  // Verifica se os valores de entrada são válidos
  if (
    fano.value.length == 0 ||
    Number(fano.value) > ano ||
    fmes.value.length == 0 ||
    Number(fmes.value) < 1 ||
    Number(fmes.value) > 12
  ) {
    // Exibe um alerta de erro se os dados forem inválidos
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    // Obtém os elementos de entrada do gênero
    let fsex = document.getElementsByName("radsex");
    // Calcula a idade com base no ano de nascimento
    let idade = ano - Number(fano.value);

    // Ajusta a idade se o mês de aniversário ainda não passou no ano atual
    if (mes < Number(fmes.value)) {
      idade--;
    }

    let genero = "";
    // Cria um novo elemento de imagem
    let img = document.createElement("img");
    // Define o atributo id do elemento de imagem
    img.setAttribute("id", "foto");
    // Verifica se o gênero selecionado é masculino
    if (fsex[0].checked) {
      genero = "Homem";
      // Define a imagem e o texto do gênero com base na idade
      if (idade >= 0 && idade < 10) {
        genero = "Criança";
        img.setAttribute("src", "./img/menino.png");
      } else if (idade < 21) {
        genero = "Adolescente";
        img.setAttribute("src", "./img/adolecenteM.png");
      } else if (idade < 50) {
        genero = "Adulto";
        img.setAttribute("src", "./img/adulto.png");
      } else {
        genero = "Idoso";
        img.setAttribute("src", "./img/idoso.png");
      }
      // Verifica se o gênero selecionado é feminino
    } else if (fsex[1].checked) {
      genero = "Mulher";
      // Define a imagem e o texto do gênero com base na idade
      if (idade >= 0 && idade < 10) {
        genero = "Menina";
        img.setAttribute("src", "./img/menina.png");
      } else if (idade < 21) {
        genero = "Adolescente";
        img.setAttribute("src", "./img/adolecenteF.png");
      } else if (idade < 50) {
        genero = "Adulta";
        img.setAttribute("src", "./img/adulta.png");
      } else {
        genero = "Idosa";
        img.setAttribute("src", "./img/idosa.png");
      }
    }
    // Centraliza o texto do elemento de resultado
    res.style.textAlign = "center";
    // Define o conteúdo HTML do elemento de resultado
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    // Adiciona a imagem ao elemento de resultado
    res.appendChild(img);
  }
}
