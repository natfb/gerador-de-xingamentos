/*function CORSSolve(){
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById('titulo').innerText = xhttp.responseText
            (xhttp.responseText)
        }
    }
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com//https://offensive-profanity.herokuapp.com", true)
    xhttp.send()
    (xhttp.responseText)
    fetch('https://cors-anywhere.herokuapp.com//https://offensive-profanity.herokuapp.com')
    .then(res => res.text())
    .then(data => (data))
    

fetch('https://offensive-profanity.herokuapp.com/allow-cors', {mode:'cors'})
    .then(res => res.text())
    .then(data => (data))*/
//gpl licence
    

/*var words = "filho-de-uma-alucinação filho-de-uma-assombração filho-de-uma-calopsita filho-de-uma-comedora-de-habibs filho-de-uma-feiosa filho-de-uma-festa-da-torcida filho-de-uma-gonorreia filho-de-uma-potranca babaca bostolão burro cafajeste canalha cretino cuzão delinquente espantalho estorvo estupido fanfarrão fuinha galeroso histérico idiota imbecil jegue jumento mané navalha obliquo otário palerma palhaço panaca paquiderme paspalho patife pilantra porifero rato rebostola safado salafrário sem-noção tapado xеrеta zé-goiaba zé-ruela"
var words2 = "afogador-de-ganso base-de-vigota engolidor-de-espadas frequentador-de-micareta furna-de-robalo jogador-de-queimada melador-de-cueca pão-de-salsicha usuario-de-crocs";
var wordsArray1 = words.split(' ');
var wordsArray2 = words2.split(' ');*/


////////////menu////////////////////////////////////////////////////////////
const menu = document.getElementById('a');
const atr1 = document.getElementsByClassName('l');
//const atr2 = document.getElementsByClassName('atr_link2')
menu.addEventListener('mouseover', function(){
    console.log('gm')
    for (let x=0 ; x < atr1.length ; x++ ) {
        atr1[x].classList.add('atrhover');
     }
})

atr1[1].addEventListener('mouseover', function(){
    atr1[0].classList.add('viewnav');
    atr1[1].classList.add('viewnav');
})
atr1[1].addEventListener('mouseout', function(){
    atr1[0].classList.remove('viewnav');
    atr1[1].classList.remove('viewnav');
})
////////TOOLTIP COPIAR////////////////////////////////////////////////////////////////////
const tooltip2 = document.getElementById('tool'); 

function copyToClipboard() {
    let text = document.getElementById('texto').innerHTML;
    
    navigator.clipboard.writeText(text) 
    tooltip2.classList.remove('notview') 
    tooltip2.classList.remove('tooltip')   //<---texto copiado
    tooltip2.innerHTML = 'Copiado';
    }

function mouse(){
    tooltip2.classList.add('view');
    tooltip2.classList.remove('notview');
    
    if(tooltip2.innerHTML == 'Copiado'){
        tooltip2.innerHTML = 'Copiar';
    }
} 
function mouseout(){
    tooltip2.classList.add('notview');
    tooltip2.classList.remove('view');
    ('kdsj');
} 
///////////////////////////////////////////////////////////////////////////////    
////////////////////SLIDER NUMBER/////////////////////////////////////////////////
const slider_spread = document.getElementById('spread');

const label_spread = document.querySelector('[for="spread"]');
var spread;

slider_spread.addEventListener('change', function(e){
    spread = e.target.value;
    (spread)
    upspread();
});
function upspread(){ 
    slider_spread.value = spread;
    label_spread.innerText = spread;    
}
//////////////////GERAR PALAVRAS//////////////////////////////////////////////////
var pu = "idiota vagabundo ignorante imbecil bostolão"
var palavra_unica = pu.split(' ');

var composta = ["filho da puta", "filho de um pai que foi comprar cigarro e nunca mais voltou"]

var complemento = ["do caralho", "do demonio"]

var length1 = palavra_unica.length ;

var lenght2 = composta.length;
var lenght3 = complemento.length ;

var ramdom1; //posicao aleatoria
var ramdom2; 
var ramdom3; 

var divtexto = document.querySelector("#divtexto p");
var text; //palavra alaeatoria selec
var text1; 
var text2;

var igual1 = [];
var igual2 = [];
var igual3 = [];

function clickk() {
   
switch(parseInt(slider_spread.value)){
    case 1:
        gerar();
    break;
    case 2:
        gerar()
        for(i=0; i<parseInt(slider_spread.value)-1; i++){
            gerar2();
        }
        
    break;
    case 3:
        gerar()
        for(i=0; i < parseInt(slider_spread.value)-1; i++){
            gerar2();
        }
    break;
    case 4:
        gerar()
        for(i=0; i<parseInt(slider_spread.value)-1; i++){
            gerar2();
        }
    break;
    case 5:
        gerar()
        for(i=0; i<parseInt(slider_spread.value)-1; i++){
            gerar2();
        }
    break;
    case 6:
        gerar()
        for(i=0; i<parseInt(slider_spread.value)-1; i++){
            gerar2();
        }
    break;
    case 7:
        gerar()
        for(i=0; i<parseInt(slider_spread.value)-1; i++){
            gerar2();
        }
    break;
    case 8:
        gerar()
        for(i=0; i<parseInt(slider_spread.value)-1; i++){
            gerar2();
        }
    break;
    case 9:
        gerar()
        for(i=0; i<parseInt(slider_spread.value)-1; i++){
            gerar2();
        }
    break;
    case 10:
        gerar()
        for(i=0; i<parseInt(slider_spread.value)-1; i++){
            gerar2();
        }
    break;   
}
} 

var numram;
var numram2;
function gerar(){
    var random;
    ramdom1 = Math.floor(Math.random() * length1); //posicao aleatoria 
    igual1[ramdom1] = 0;
    igual1[ramdom1] = 1;
    numram = ramdom1;
    ramdom2 = Math.floor(Math.random() * lenght2);
    igual2[ramdom2] = 0;
    igual2[ramdom2] = 1;
    numram2 = ramdom2;

    text = document.createTextNode(palavra_unica[ramdom1]); //palavra alaeatoria selec
    text1 = document.createTextNode(composta[ramdom2]);

    let ramdomsw = Math.floor(Math.random() * 2) + 1;
        if(ramdomsw == 1){ 
            //text = document.createTextNode(palavra_unica[ramdom1]);
            divtexto.innerHTML = "";
            divtexto.innerHTML = `${text.nodeValue}`;  //palavra alaeatoria selec
            console.log(`gear ${ramdom1} ${palavra_unica[ramdom1]}`)
        }else if(ramdomsw == 2){  
            divtexto.innerHTML = "";
            divtexto.innerHTML = `${text1.nodeValue}`;
        }   
}

function gerar2(){
    ramdom1 = Math.floor(Math.random() * length1); //posicao aleatoria 
    ramdom2 = Math.floor(Math.random() * lenght2);
    ramdom3 = Math.floor(Math.random() * lenght3);
        let ramdomsw = 0;
        ramdomsw = Math.floor(Math.random() * 3) + 1;
        if(ramdomsw == 1){
            if(igual1[numram] == 1){
                console.log("teste p ver se é igual 1")
                while(ramdom1 == numram){
                    console.log('entrou no while 1')
                    ramdom1 = Math.floor(Math.random() * length1); 
                    
                };
                divtexto.innerHTML +=` ${text.nodeValue}`;
                console.log(`gerar 2${ramdom1} ${palavra_unica[ramdom1]}`)
            }else{
              
                divtexto.innerHTML +=` ${text.nodeValue}`; 
            }   
        }else if(ramdomsw == 2){
            if(igual2[numram2] == 1){
                console.log("teste p ver se é igual 2")
                while(ramdom2 == numram2){
                    console.log('entrou no while 2')
                    ramdom2 = Math.floor(Math.random() * lenght2);
                     
                }
                divtexto.innerHTML +=` ${text1.nodeValue}`;
            }else{
                
                divtexto.innerHTML +=  ` ${text1.nodeValue}`; 
            }  
        }else if(ramdomsw == 3){
            divtexto.innerHTML +=  ` ${text2.nodeValue}`;    
        }     
}
  






