function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        alert('Elemento não encontrado');
        return;
    }

    if (elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('O seletor não corresponde a um elemento de áudio');
    }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    
    tecla.onkeydown = function( evento) {

        if (evento.code === 'Space' || evento.code === 'Enter')
        tecla.classList.add('ativa');
    };

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    };
}
