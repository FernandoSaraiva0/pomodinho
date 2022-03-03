// Captando os dados do usuário pelo ID
let acao = document.getElementById('acao');
let pausa = document.getElementById('pausa');
let sessoes = document.getElementById('sessoes');
let segundos;

// Pegando os audios de alerta
var bell = new Audio("/audio/bell.mp3");
var volta = new Audio("/audio/volta.mp3");
var final = new Audio("/audio/final.mp3");
    // Uma instancia da classe audio

// Captando ação do botoes
    var audio = document.getElementById('audio');
    var pause = document.getElementById('pause');
    var play = document.getElementById('play');


// Funçao iniciar
    function iniciar(){
        // Verificando se os campos estão preenchidos
        if(acao.value == 0){
            document.getElementById('erro_acao').innerHTML = "Adicione os Minutos"
            acao.focus()
        } else if(pausa.value == 0){
            document.getElementById('erro_pausa').innerHTML = "Adicione a pausa"
            pausa.focus()
        } else if(sessoes.value == 0){
            document.getElementById('erro_sessoes').innerHTML = "Adicione as Sessões"
            sessoes.focus()
        } else {
            // Ativa o audio e some aparece o botão para pausar a musica
            audio.play()
            pause.style.setProperty('display', 'block', 'important')
            play.style.setProperty('display', 'none', 'important')
            
        }
    }