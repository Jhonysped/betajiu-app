function entrar(){


let usuario = document.getElementById("usuario").value;

let senha = document.getElementById("senha").value;


let perfil = "";


if(usuario=="admin" && senha=="1234"){

perfil="Administrador";

}


else if(usuario=="professor" && senha=="1234"){

perfil="Professor";

}


else if(usuario=="aluno" && senha=="1234"){

perfil="Aluno";

}


else{

document.getElementById("mensagem").innerHTML=
"Usuário ou senha incorretos";

return;

}



document.getElementById("login").style.display="none";

document.getElementById("painel").style.display="block";


document.getElementById("tituloPainel").innerHTML=
"Bem-vindo - " + perfil;



let opcoes="";



if(perfil=="Administrador"){

opcoes=
"👥 Alunos<br><br>"+
"🥋 Professores<br><br>"+
"📅 Treinos<br><br>"+
"📊 Relatórios";

}



if(perfil=="Professor"){

opcoes=
"👥 Minha turma<br><br>"+
"✅ Fazer chamada<br><br>"+
"📝 Avaliações<br><br>"+
"🥋 Graduações";

}



if(perfil=="Aluno"){

opcoes=
"🥋 Minha graduação<br><br>"+
"📅 Meus treinos<br><br>"+
"📈 Minha evolução<br><br>"+
"📢 Avisos";

}



document.getElementById("opcoes").innerHTML=opcoes;


}



function sair(){

location.reload();

}
