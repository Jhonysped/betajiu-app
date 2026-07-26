let perfilAtual = "";

let usuarioLogado = "";

let professorLogado = null;


let aulas = JSON.parse(localStorage.getItem("aulas")) || [];

let alunos = JSON.parse(localStorage.getItem("alunos")) || [];

let professores = JSON.parse(localStorage.getItem("professores")) || [];

let chamadas = JSON.parse(localStorage.getItem("chamadas")) || [];




// LOGIN

function entrar(){


let usuario =
document.getElementById("usuario").value;


let senha =
document.getElementById("senha").value;



// ADMINISTRADOR

if(usuario === "admin" && senha === "1234"){


perfilAtual = "Administrador";

usuarioLogado = "admin";


abrirSistema();


return;

}




// PROFESSORES

let professorEncontrado =
professores.find(function(professor){


return professor.usuario === usuario &&
professor.senha === senha;


});




if(professorEncontrado){


perfilAtual = "Professor";

usuarioLogado = usuario;

professorLogado = professorEncontrado;


abrirSistema();


return;

}




// ALUNO (reservado para próxima etapa)

if(usuario === "aluno" && senha === "1234"){


perfilAtual = "Aluno";

usuarioLogado = usuario;


abrirSistema();


return;

}





document.getElementById("mensagem").innerHTML =
"Usuário ou senha incorretos";



}







function abrirSistema(){


document.getElementById("login").style.display="none";


document.getElementById("painel").style.display="block";



if(perfilAtual === "Professor"){


document.getElementById("tituloPainel").innerHTML =
"🥋 Professor: " + professorLogado.nome;


}


else{


document.getElementById("tituloPainel").innerHTML =
"Painel - " + perfilAtual;


}



mostrarMenu();


}






// MENU PRINCIPAL

function mostrarMenu(){


let opcoes = "";




// ADMINISTRADOR

if(perfilAtual === "Administrador"){


opcoes =

"<button onclick='abrirAulas()'>📅 Aulas</button><br><br>"+

"<button onclick='abrirAlunos()'>👥 Alunos</button><br><br>"+

"<button onclick='abrirProfessores()'>🥋 Professores</button><br><br>"+

"<button>📊 Relatórios</button>";



}






// PROFESSOR

if(perfilAtual === "Professor"){


opcoes =


"<button onclick='abrirMinhasAulas()'>📅 Minhas Aulas</button><br><br>"+

"<button onclick='abrirHistorico()'>📈 Histórico</button>";



}





// ALUNO

if(perfilAtual === "Aluno"){


opcoes =

"🥋 Minha graduação<br><br>"+
"📅 Meus treinos<br><br>"+
"📈 Minha evolução";


}




document.getElementById("opcoes").innerHTML =
opcoes;
  
// =============================
// PROFESSORES
// =============================


function abrirProfessores(){


document.getElementById("painel").style.display="none";


document.getElementById("telaProfessores").style.display="block";


mostrarProfessores();


}





function salvarProfessor(){



let professor = {


id: Date.now(),


nome:
document.getElementById("nomeProfessor").value,


telefone:
document.getElementById("telefoneProfessor").value,


email:
document.getElementById("emailProfessor").value,


faixa:
document.getElementById("faixaProfessor").value,


grau:
document.getElementById("grauProfessor").value,


usuario:
document.getElementById("usuarioProfessor").value,


senha:
document.getElementById("senhaProfessor").value



};




professores.push(professor);



localStorage.setItem(

"professores",

JSON.stringify(professores)

);



mostrarProfessores();



alert("Professor cadastrado com sucesso!");



}






function mostrarProfessores(){


let lista =
document.getElementById("listaProfessores");


lista.innerHTML="";



professores.forEach(function(professor){



let item =
document.createElement("li");



item.innerHTML =


"🥋 "+professor.nome+

"<br>Faixa: "+professor.faixa+

"<br>Grau: "+professor.grau+

"<br>Usuário: "+professor.usuario+

"<br><br>";



lista.appendChild(item);



});



}







// =============================
// ALUNOS
// =============================



function abrirAlunos(){


document.getElementById("painel").style.display="none";


document.getElementById("telaAlunos").style.display="block";


mostrarAlunos();


}





function salvarAluno(){



let aluno = {


id: Date.now(),


nome:
document.getElementById("nomeAluno").value,


nascimento:
document.getElementById("nascimentoAluno").value,


telefone:
document.getElementById("telefoneAluno").value,


faixa:
document.getElementById("faixaAluno").value,


grau:
document.getElementById("grauAluno").value



};




alunos.push(aluno);



localStorage.setItem(

"alunos",

JSON.stringify(alunos)

);



mostrarAlunos();



}







function mostrarAlunos(){


let lista =
document.getElementById("listaAlunos");


lista.innerHTML="";



alunos.forEach(function(aluno){



let item =
document.createElement("li");



item.innerHTML =


"🥋 "+aluno.nome+

"<br>Faixa: "+aluno.faixa+

"<br>Grau: "+aluno.grau+

"<br>ID: "+aluno.id+

"<br><br>";



lista.appendChild(item);



});



}








// =============================
// AULAS
// =============================



function abrirAulas(){


document.getElementById("painel").style.display="none";


document.getElementById("telaAulas").style.display="block";


carregarProfessoresNaAula();


mostrarAulas();



}







function carregarProfessoresNaAula(){


let select =
document.getElementById("professorAula");


select.innerHTML="";



if(professores.length === 0){


let opcao =
document.createElement("option");


opcao.textContent =
"Nenhum professor cadastrado";


select.appendChild(opcao);


return;


}




professores.forEach(function(professor){



let opcao =
document.createElement("option");



opcao.value =
professor.id;



opcao.textContent =
professor.nome;



select.appendChild(opcao);



});



}







function salvarAula(){



let professorId =
Number(document.getElementById("professorAula").value);



let professor =
professores.find(function(p){


return p.id === professorId;


});





let aula = {


id: Date.now(),


nome:
document.getElementById("nomeAula").value,


dia:
document.getElementById("diaAula").value,


horario:
document.getElementById("horarioAula").value,


professorId:
professor.id,


professorNome:
professor.nome



};




aulas.push(aula);



localStorage.setItem(

"aulas",

JSON.stringify(aulas)

);



mostrarAulas();
  



  }
  // =============================
// CHAMADA
// =============================

function abrirMinhasAulas() {

    document.getElementById("painel").style.display = "none";
    document.getElementById("telaChamada").style.display = "block";

    let lista = document.getElementById("listaChamada");
    let titulo = document.getElementById("tituloChamada");

    lista.innerHTML = "";

    const minhasAulas = aulas.filter(function(aula) {
        return aula.professorId === professorLogado.id;
    });

    if (minhasAulas.length === 0) {
        titulo.innerHTML = "Nenhuma aula encontrada.";
        return;
    }

    const aula = minhasAulas[0];

    titulo.innerHTML =
        aula.nome + " - " + aula.dia + " às " + aula.horario;

    alunos.forEach(function(aluno) {

        let linha = document.createElement("div");

        linha.innerHTML =
            "<label>" +
            "<input type='checkbox' id='aluno_" + aluno.id + "'>" +
            " " + aluno.nome +
            "</label>";

        lista.appendChild(linha);

    });

}

function salvarChamada() {

    const minhasAulas = aulas.filter(function(aula) {
        return aula.professorId === professorLogado.id;
    });

    if (minhasAulas.length === 0) {
        alert("Nenhuma aula encontrada.");
        return;
    }

    const aula = minhasAulas[0];

    alunos.forEach(function(aluno) {

        let presente =
            document.getElementById("aluno_" + aluno.id).checked;

        chamadas.push({

            data: new Date().toLocaleDateString(),

            alunoId: aluno.id,

            alunoNome: aluno.nome,

            aulaId: aula.id,

            aulaNome: aula.nome,

            professorId: professorLogado.id,

            professorNome: professorLogado.nome,

            presente: presente

        });

    });

    localStorage.setItem(
        "chamadas",
        JSON.stringify(chamadas)
    );

    alert("Chamada salva com sucesso!");
  // =============================
// HISTÓRICO
// =============================

function abrirHistorico() {

    document.getElementById("painel").style.display = "none";
    document.getElementById("telaHistorico").style.display = "block";

    let lista = document.getElementById("listaHistorico");
    lista.innerHTML = "";

    let historicoProfessor = chamadas.filter(function(chamada) {
        return chamada.professorId === professorLogado.id;
    });

    if (historicoProfessor.length === 0) {

        let item = document.createElement("li");
        item.innerHTML = "Nenhuma chamada registrada.";
        lista.appendChild(item);

        return;
    }

    historicoProfessor.forEach(function(chamada) {

        let item = document.createElement("li");

        item.innerHTML =
            "<strong>" + chamada.data + "</strong><br>" +
            "Aluno: " + chamada.alunoNome + "<br>" +
            "Aula: " + chamada.aulaNome + "<br>" +
            "Status: " +
            (chamada.presente ? "✅ Presente" : "❌ Ausente") +
            "<br><br>";

        lista.appendChild(item);

    });

}



// =============================
// NAVEGAÇÃO
// =============================

function voltarPainel() {

    document.getElementById("telaAulas").style.display = "none";
    document.getElementById("telaAlunos").style.display = "none";
    document.getElementById("telaProfessores").style.display = "none";
    document.getElementById("telaChamada").style.display = "none";
    document.getElementById("telaHistorico").style.display = "none";

    document.getElementById("painel").style.display = "block";

}



// =============================
// SAIR
// =============================

function sair() {

    perfilAtual = "";
    usuarioLogado = "";
    professorLogado = null;

    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("mensagem").innerHTML = "";

    document.getElementById("painel").style.display = "none";
    document.getElementById("telaAulas").style.display = "none";
    document.getElementById("telaAlunos").style.display = "none";
    document.getElementById("telaProfessores").style.display = "none";
    document.getElementById("telaChamada").style.display = "none";
    document.getElementById("telaHistorico").style.display = "none";

    document.getElementById("login").style.display = "block";

}



// =============================
// INICIALIZAÇÃO
// =============================

window.onload = function() {

    console.log("🥋 BetaJiu carregado com sucesso!");

};

}


}
