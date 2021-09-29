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
      document.getElementById("aprovado").style.display = "block";
      document.getElementById("aprovado").innerHTML =
        '<span class="apto">PARABÉNS! </span>' +
        "Você foi aprovado com média: " +
        notaFinal + '<img width="400" height="200"  src="https://i.pinimg.com/originals/a8/8c/c8/a88cc85ba0b2cbf03eef5329ba89a9b6.gif">';
    } else {
      document.getElementById("reprovado").innerHTML =
          '<span class="rep">REPROVADO! </span>' + "Sua média foi: " + notaFinal + '<iframe width="400" height="200" src="https://www.youtube.com/embed/0-sQrPu26zc?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        document.getElementById("reprovado").style.display = "block";
      }
    }
