function calculadoraDeNotas(){
   let mediadaescola = parseInt(document.getElementById("media").value);
   let notaum = parseInt(document.getElementById("nota1").value);
   let notadois = parseInt(document.getElementById("nota2").value);
   let notatres = parseInt(document.getElementById("nota3").value);

   let resultado = Number(notaum + notadois + notatres);
   let media = resultado /3;

   let mediaAluno = document.getElementById("resultado").textContent = media;

   if(media < mediadaescola){
      alert("Infelizmente você reprovou ＞︿＜, mais na proxima você consegue 👍");
   }else {
      alert("Parabens você passou!! *^____^*");
   }
}