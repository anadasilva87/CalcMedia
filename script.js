function calculoMedia() {
    let primeiro = document.getElementById("first").value;
    let segundo = document.getElementById("second").value;
    let terceiro = document.getElementById("third").value;
    let quarto = document.getElementById("fourth").value;
  
    let media = document.getElementById("media").value;
  
    let notaFinal =
      (Number(primeiro) + Number(segundo) + Number(terceiro) + Number(quarto)) /
      4;
  
    document.getElementById("aprovado").style.display = "none";
    document.getElementById("reprovado").style.display = "none";
  
    if (notaFinal >= media) {
      document.getElementById("aprovado").style.display = "flex";
      document.getElementById("aprovado").innerHTML =
        '<span class="apto">PARABÉNS! </span>' +
        "Você foi aprovado com média: " +
        notaFinal;
    } else {
      document.getElementById("reprovado").innerHTML =
        '<span class="rep">REPROVADO! </span>' + "Sua média foi: " + notaFinal;
      document.getElementById("reprovado").style.display = "FLEX";
    }
  }
  