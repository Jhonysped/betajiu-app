let alunos = [];


function abrirAlunos(){

document.getElementById("inicio").style.display="none";

document.getElementById("alunos").style.display="block";

}


function voltarInicio(){

document.getElementById("inicio").style.display="block";

document.getElementById("alunos").style.display="none";

}



function salvarAluno(){

let nome = document.getElementById("nome").value;

let faixa = document.getElementById("faixa").value;


if(nome==""){

alert("Digite o nome do aluno");

return;

}


let aluno = {

nome:nome,

faixa:faixa

};


alunos.push(aluno);


mostrarAlunos();


document.getElementById("nome").value="";


}



function mostrarAlunos(){

let lista=document.getElementById("listaAlunos");


lista.innerHTML="";


alunos.forEach(function(aluno){


let item=document.createElement("li");


item.innerHTML=
aluno.nome + " - Faixa " + aluno.faixa;


lista.appendChild(item);


});


}
