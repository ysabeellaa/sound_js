function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');//pega todos os elementos com a classe .tecla


for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];//pega o _pom _clap de cada .tecla_som_x
    const idAudio = `#som_${instrumento}`;//string do instrumento

    tecla.onclick = function (){
        tocaSom(idAudio);
    }


}