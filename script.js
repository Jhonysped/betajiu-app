let perfilAtual = "";

let aulas = JSON.parse(localStorage.getItem("aulas")) || [];

let alunos = JSON.parse(localStorage.getItem("alunos")) || [];





function entrar(){


let usuario = document.getElementById("usuario").value;

let senha = document.getElementById("senha").value;



if(usuario=="admin" && senha=="1234"){

perfilAtual="Administrador";

}

else if(usuario=="professor" && senha=="1234"){

perfilAtual="Professor";

}

else if(usuario=="aluno" && senha=="1234"){

perfilAtual="Aluno";

}

else{

document.getElementById("mensagem").innerHTML =
"Usuário ou senha incorretos";

return;

}



document.getElementById("login").style.display="none";

document.getElementById("painel").style.display="block";


document.getElementById("tituloPainel").innerHTML =
"Painel - " + perfilAtual;


mostrarMenu();

}







function mostrarMenu(){


let opcoes="";



if(perfilAtual=="Administrador"){


opcoes =

"<button onclick='abrirAulas()'>📅 Aulas</button><br><br>"+

"<button onclick='abrirAlunos()'>👥 Alunos</button><br><br>"+

"<button>🥋 Professores</button><br><br>"+

"<button>📢 Avisos</button><br><br>"+

"<button>📊 Relatórios</button>";

}


if(perfilAtual=="Professor"){


opcoes=

"👥 Minhas turmas<br><br>"+
"✅ Fazer chamada<br><br>"+
"📝 Avaliações<br><br>"+
"🥋 Graduações";


}


if(perfilAtual=="Aluno"){


opcoes=

"🥋 Minha graduação<br><br>"+
"📅 Meus treinos<br><br>"+
"📈 Minha evolução<br><br>"+
"📢 Avisos";


}


document.getElementById("opcoes").innerHTML=opcoes;


}







function abrirAulas(){

document.getElementById("painel").style.display="none";

document.getElementById("telaAulas").style.display="block";

mostrarAulas();

}







function salvarAula(){


let aula={

nome:document.getElementById("nomeAula").value,

dia:document.getElementById("diaAula").value,

horario:document.getElementById("horarioAula").value,

professor:document.getElementById("professorAula").value

};



aulas.push(aula);


localStorage.setItem("aulas",JSON.stringify(aulas));


mostrarAulas();


}







function mostrarAulas(){


let lista=document.getElementById("listaAulas");


lista.innerHTML="";


aulas.forEach(function(aula){


let item=document.createElement("li");


item.innerHTML=

"🥋 "+aula.nome+
"<br>"+
"📅 "+aula.dia+
" ⏰ "+aula.horario+
"<br>"+
"Professor: "+aula.professor+
"<br><br>";


lista.appendChild(item);


});


}








function abrirAlunos(){


document.getElementById("painel").style.display="none";

document.getElementById("telaAlunos").style.display="block";


mostrarAlunos();


}







function salvarAluno(){


let aluno={


nome:document.getElementById("nomeAluno").value,

nascimento:document.getElementById("nascimentoAluno").value,

telefone:document.getElementById("telefoneAluno").value,

faixa:document.getElementById("faixaAluno").value,

grau:document.getElementById("grauAluno").value,

aula:document.getElementById("aulaAluno").value,

professor:document.getElementById("professorAluno").value


};



alunos.push(aluno);


localStorage.setItem("alunos",JSON.stringify(alunos));


mostrarAlunos();


}







function mostrarAlunos(){


let lista=document.getElementById("listaAlunos");


lista.innerHTML="";



alunos.forEach(function(aluno){


let item=document.createElement("li");


item.innerHTML=

"🥋 "+aluno.nome+
"<br>"+
"Faixa: "+aluno.faixa+
" - Grau: "+aluno.grau+
"<br>"+
"Aula: "+aluno.aula+
"<br>"+
"Professor: "+aluno.professor+
"<br><br>";



lista.appendChild(item);


});


}








function voltarPainel(){


document.getElementById("telaAulas").style.display="none";

document.getElementById("telaAlunos").style.display="none";


document.getElementById("painel").style.display="block";


}







function sair(){

location.reload();

}
