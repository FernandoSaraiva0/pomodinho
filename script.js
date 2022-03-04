// Captando os dados do usuário pelo ID
let acao = document.getElementById("acao");
let pausa = document.getElementById("pausa");
let sessoes = document.getElementById("sessoes");
let segundos;

// Pegando os audios de alerta
var bell = new Audio("/audio/bell.mp3");
var volta = new Audio("/audio/volta.mp3");
var final = new Audio("/audio/final.mp3");
// Uma instancia da classe audio

// Captando ação do botoes
var audio = document.getElementById("audio");
var pause = document.getElementById("pause");
var play = document.getElementById("play");

// Captando timer e config
var config = document.getElementById("config")
var timer = document.getElementById("timer")
var fim = document.getElementById('fim')

// Funçao iniciar
function iniciar() {
  // Verificando se os campos estão preenchidos
  if (acao.value == 0) {
    document.getElementById("erro_acao").innerHTML = "Adicione os Minutos";
    acao.focus();
  } else if (pausa.value == 0) {
    document.getElementById("erro_pausa").innerHTML = "Adicione a pausa";
    pausa.focus();
  } else if (sessoes.value == 0) {
    document.getElementById("erro_sessoes").innerHTML = "Adicione as Sessões";
    sessoes.focus();
  } else {
    // Ativa o audio e some aparece o botão para pausar a musica
    audio.play();
    pause.style.setProperty("display", "block", "important");
    play.style.setProperty("display", "none", "important");
    // Fazendo a config sumir da tela e o timer aparecer
    config.style.setProperty("display", "none", "important");
    timer.style.setProperty("display", "block", "important");

    // Adicionando os valores captados na memoria do usuário
    localStorage.setItem("acao", toString(acao.value));
    localStorage.setItem("pausa", toString(pausa.value));
    localStorage.setItem("sessoes", toString(sessoes.value));

    momentAcao();
  }
}

// Player Indepenente
function tocar() {
  audio.play();
  pause.style.setProperty("display", "block", "important");
  play.style.setProperty("display", "none", "important");
}

function parar() {
  audio.pause();
  play.style.setProperty("display", "block", "important");
  pause.style.setProperty("display", "none", "important");
}

// Player independente em uma única função - Não deu certo!

// function tocar(){
//     if(audio.play() == false){
//         audio.pause();
//         play.style.setProperty('display', 'block', 'important')
//         pause.style.setProperty('display', 'none', 'important')
//     } else {
//         audio.play();
//         pause.style.setProperty('display', 'block', 'important')
//         play.style.setProperty('display', 'none', 'important')
//     }
// }

// Iniciando o contador
function momentAcao(){
    let sesoes_valor = localStorage.getItem('sessoes')
    if( sesoes_valor != '1'){
        document.getElementById('title_section').innerHTML = sesoes_valor + ' Sessões restantes'
    } else {
        document.getElementById('title_section').innerHTML = sesoes_valor + ' Sessão restante'
    }

    let title = document.getElementById('title')
    title.innerHTML = "AÇÃO"
    title.style.fontSize = '2rem'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color', '#28a745', 'important')

    min = Number(localStorage.getItem('acao'))

    min = min -1
    segundos = 59

    document.getElementById('minutes').innerHTML = min
    document.getElementById('seconds').innerHTML = segundos

    var min_interval = setInterval(minTimer, 60000);
    var seg_interval = setInterval(segTimer, 1000);

    function minTimer(){
        min = min - 1 
        document.getElementById('minutes').innerHTML = min
    }
    function segTimer(){
        segundos = segundos - 1 
        document.getElementById('seconds').innerHTML = segundos

        if(segundos <=0 ){
            if(min <= 0){
                clearInterval(min_interval)
                clearInterval(seg_interval)

                momentPausa()
            }
            segundos = 60
        }
    }

}
function momentPausa(){
    let title = document.getElementById('title')
    title.innerHTML = "AÇÃO"
    title.style.fontSize = '2rem'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color', '#28a745', 'important')

    min_pausa = Number(localStorage.getItem('acao'))

    min_pausa = min_pausa -1
    segundos = 59

    document.getElementById('minutes').innerHTML = min_pausa
    document.getElementById('seconds').innerHTML = segundos

    var min_interval = serInterval(minTimer, 60000);
    var seg_interval = serInterval(segTimer, 1000);

    function minTimer(){
        min_pausa = min_pausa - 1 
        document.getElementById('minutes').innerHTML = min_pausa
    }
    function segTimer(){
        segundos = segundos - 1 
        document.getElementById('seconds').innerHTML = segundos

        if(segundos <=0 ){
            if(min_pausa <= 0){
                // Capta a quantiade de sessoes e subtrai 1
                ses = Number(localStorage.getItem('sessoes'))
                ses = ses - 1
                // Atualizando no local storage quantas sessões ainda restam
                localStorage.setItem('sessoes', String(ses))
                clearInterval(min_interval)
                clearInterval(seg_interval)
                // Se houverem acabado as sessões ele vai limpar o local storage
                if(ses <= 0){
                    audio.pause()
                    localStorage.clear()

                    // Mostrando mensagem final

                    config.style.setProperty("display", "none", "important");
                    timer.style.setProperty("display", "none", "important");
                    fim.style.setProperty("display", "block", "important");
                } else {
                    momentAcao()
                }
            }
            segundos = 60
        }
    }
}