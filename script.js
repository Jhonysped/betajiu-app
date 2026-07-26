let perfilAtual = "";

let aulas = [];



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


let opcoes = "";



if(perfilAtual=="Administrador"){


opcoes =

"<button onclick='abrirAulas()'>📅 Aulas</button><br><br>"+

"<button>👥 Alunos</button><br><br>"+

"<button>🥋 Professores</button><br><br>"+

"<button>📢 Avisos</button><br><br>"+

"<button>📊 Relatórios</button>";



}



if(perfilAtual=="Professor"){


opcoes =

"👥 Minhas turmas<br><br>"+

"✅ Fazer chamada<br><br>"+

"📝 Avaliações<br><br>"+

"🥋 Graduações";



}



if(perfilAtual=="Aluno"){


opcoes =

"🥋 Minha graduação<br><br>"+

"📅 Meus treinos<br><br>"+

"📈 Minha evolução<br><br>"+

"📢 Avisos";



}



document.getElementById("opcoes").innerHTML = opcoes;



}







function abrirAulas(){


document.getElementById("painel").style.display="none";


document.getElementById("telaAulas").style.display="block";


mostrarAulas();


}







function salvarAula(){


let nome = document.getElementById("nomeAula").value;

let dia = document.getElementById("diaAula").value;

let horario = document.getElementById("horarioAula").value;

let professor = document.getElementById("professorAula").value;



let aula = {

nome:nome,

dia:dia,

horario:horario,

professor:professor

};



aulas.push(aula);



mostrarAulas();



document.getElementById("nomeAula").value="";

document.getElementById("diaAula").value="";

document.getElementById("horarioAula").value="";

document.getElementById("professorAula").value="";



}







function mostrarAulas(){


let lista = document.getElementById("listaAulas");


lista.innerHTML="";



aulas.forEach(function(aula){


let item = document.createElement("li");


item.innerHTML =

"🥋 "+aula.nome+
"<br>"+
"📅 "+aula.dia+
"<br>"+
"⏰ "+aula.horario+
"<br>"+
"Professor: "+aula.professor+
"<br><br>";



lista.appendChild(item);



});



}







function voltarPainel(){


document.getElementById("telaAulas").style.display="none";


document.getElementById("painel").style.display="block";


}







function sair(){


location.reload();


  }
