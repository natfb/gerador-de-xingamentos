////////////menu////////////////////////////////////////////////////////////
const menu = document.getElementById('a');
const atr1 = document.getElementsByClassName('l');
//const atr2 = document.getElementsByClassName('atr_link2')
menu.addEventListener('mouseover', function(){
    
    for (let x=0 ; x < atr1.length ; x++ ) {
        atr1[x].classList.add('atrhover');
     }
})
const atr2 = document.getElementById('atr2')

atr2.addEventListener('mouseover', function(){
    atr1[0].classList.add('viewnav');
    atr2.classList.add('viewnav');
})
atr2.addEventListener('mouseout', function(){
    atr1[0].classList.remove('viewnav');
    atr2.classList.remove('viewnav');
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
var pu = "idiota animal vagabundo ignorante imbecil cínico desengonçado fedelho caloteiro canalha mentecapto energúmeno bostolão burro chato lambisgoia bostinha verme ameba salafrário pilantra"
var palavra_unica = pu.split(' ');

var composta = ["filho da puta", "cadela sarnenta", "pé no saco", "pau no cu", "filho da mãe",
 "animal de teta", "você tem um QI de 5 dígitos e todos eles são zero",
 "cara de cu à paisana", "desmancha prazeres", "empaca foda"]

var complemento = ["do caralho", "do demônio", "do capeta", "da desgraça", "do cacete", 
"sem vergonha", "fudido", "desgraçado", "de merda", "de bosta", 
"vai se fuder", "vai tomar no cu", "vai a merda", 
"vai pra puta que te pariu",]

/////feminino

var puf = "idiota animal vagabunda ignorante imbecil cínica desengonçada fedelha caloteira canalha mentecapta energúmena bostolona burra chata lambisgoia bostinha verme ameba salafrária pilantra"
var palavra_unica_fem = puf.split(' ');

var composta_fem = ["filha da puta", "cadela sarnenta", "pé no saco", "pau no cu", "filha da mãe",
 "animal de teta", "você tem um QI de 5 dígitos e todos eles são zero",
 "cara de cu à paisana", "desmancha prazeres", "empaca foda"]

var complemento_fem = ["do caralho", "do demônio", "do capeta", "da desgraça", "do cacete", 
"sem vergonha", "fudida", "desgraçada", "de merda", "de bosta", 
"vai se fuder", "vai tomar no cu", "vai a merda", 
"vai pra puta que te pariu",]

var length1 = palavra_unica.length ;

var length2 = composta.length;
var length3 = complemento.length ;

var ramdom1; //posicao aleatoria
var ramdom2; 
var ramdom3; 

var divtexto = document.querySelector("#divtexto p");
var text; //palavra alaeatoria selec
var text1; 
var text2;

var igual1;
var igual2;
var igual3;


var word1 = [],
    word2 = [],
    word3 = [];

    ////desidir se e fem ou masc
    var gen = document.getElementsByClassName('checkmark');
    var fem;
    var masc;
    gen[0].addEventListener('click', function(){
        fem = 0;
        masc = 1;
    })
    gen[1].addEventListener('click', function(){
        fem = 1;
        masc = 0; 
        console.log("minhabundinha")
    })


function clickk() {
    console.log("jj")
    word1.length = length1; 
    word1.fill(0);
    word2.length = length2;
    word2.fill(0);
    word3.length = length3;
    word3.fill(0);    

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
var teste_ramdom,
    teste_ramdom2;
 

function gene(){
    if(fem == 1){
        text = document.createTextNode(palavra_unica_fem[ramdom1]); //palavra alaeatoria selec
        text1 = document.createTextNode(composta_fem[ramdom2]);
        text2 = document.createTextNode(complemento_fem[ramdom3]);
    }else{
        text = document.createTextNode(palavra_unica[ramdom1]); //palavra alaeatoria selec
        text1 = document.createTextNode(composta[ramdom2]);
        text2 = document.createTextNode(complemento_fem[ramdom3]);
    }
}    
function gerar(){
    do{       ////loop para nao gerar aleatorio igual ao anterior
        ramdom1 = Math.floor(Math.random() * length1); 
    }while(ramdom1 == teste_ramdom);
    teste_ramdom = ramdom1;

    igual1 = ramdom1;
    
    do{       ////loop para nao gerar aleatorio igual ao anterior
        ramdom2 = Math.floor(Math.random() * length2); 
    }while(ramdom2 == teste_ramdom2);
    teste_ramdom2 = ramdom2;
    
    igual2 = ramdom2;
    //igual2 = ramdom2;

    gene();

    let ramdomsw = Math.floor(Math.random() * 2) + 1;
        if(ramdomsw == 1){ 
            //text = document.createTextNode(palavra_unica[ramdom1]);
            divtexto.innerHTML = "";
            gene();
            divtexto.innerHTML = `${text.nodeValue.toUpperCase()}`;
         //palavra alaeatoria selec
            console.log(`gear ${ramdom1} ${palavra_unica[ramdom1]}`)
        }else if(ramdomsw == 2){  
            
            divtexto.innerHTML = "";
            gene();
            divtexto.innerHTML = `${text1.nodeValue.toUpperCase()}`;
        }   
}
var teste_ramdom_2,
    teste_ramdom2_2,
    teste_ramdom3; 

function palavra1(){};
function palavra2(){};
function palavra3(){}; 

let ramdomsw = 0;
let compl_test;
function gerar2(){
    do{       ////loop para nao gerar aleatorio igual ao anterior
        ramdom1 = Math.floor(Math.random() * length1); 
    }while(ramdom1 == teste_ramdom_2);
    teste_ramdom_2 = ramdom1;
    console.log('aqui')
    do{       ////loop para nao gerar aleatorio igual ao anterior
        ramdom2 = Math.floor(Math.random() * length2); 
    }while(ramdom2 == teste_ramdom2_2);
    teste_ramdom2_2 = ramdom2;
    console.log('sai desse loop?')

    ramdom3 = Math.floor(Math.random() * length3);
    

///////////////////////////////////////////////////////////////////
    
    gene();

    
    do{       ////loop para nao gerar aleatorio igual ao anterior
        ramdomsw = Math.floor(Math.random() * 3) + 1;
    }while(compl_test == ramdomsw);
    compl_test = ramdomsw;

    console.log(`antes do if ${word1[ramdom1]}`)
        if(ramdomsw == 1 && word1[ramdom1] == 0){   
            console.log('aqui')
            palavra1();
            console.log('aqui')
        }else if(ramdomsw == 1 && word1[ramdom1] != 0){
            console.log("word1 = 1")
            do{       ////loop para nao gerar aleatorio igual ao anterior
                ramdom1 = Math.floor(Math.random() * length1); 
                console.log("dentro do loop" + word1[ramdom1])
            }while(word1[ramdom1] == 1);
            console.log('loop??aqui')
            if(ramdomsw == 1 && igual1 == ramdom1){
                console.log('entra aqui')
                do{       ////loop para nao gerar aleatorio igual ao gerar()
                    ramdom1 = Math.floor(Math.random() * length1); 
                }while(ramdom1 == igual1);
                
                
                divtexto.innerHTML += ", ";
                gene();
                divtexto.innerHTML +=` ${text.nodeValue.toUpperCase()}`;
                console.log('aqui')
                
                //console.log(`print word = 1 | r: ${ramdom1} word1=${word1[ramdom1]}`)  
                word1[ramdom1] = 1;
            }else if(ramdomsw == 1){
                console.log('ou entra aqui')
                divtexto.innerHTML += ", ";
                gene();
                divtexto.innerHTML +=` ${text.nodeValue.toUpperCase()}`;
                //console.log(`print word = 1 | r: ${ramdom1} word1=${word1[ramdom1]}`)  
                word1[ramdom1] = 1;
                console.log('aqui')
            }

        }

        if(ramdomsw == 2 && word2[ramdom2] == 0){ 
            palavra2();
            console.log('aqui')
        }
            else if(ramdomsw == 2 && word2[ramdom2] != 0){
                console.log('aqui')
            //console.log(`if word1[r1]: word1 = ${word1[ramdom1]} r:${ramdom1}`);
            console.log(`antes do loop word2=${word2[ramdom2]} r:${ramdom1}`)
            do{       ////loop para nao gerar aleatorio igual ao anterior
                ramdom2 = Math.floor(Math.random() * length2); 
            }while(word2[ramdom2] == 1);
            console.log(`deposi do loop word2=${word2[ramdom2]} r:${ramdom2}`)
            console.log('aqui')
            if(ramdomsw == 2 && ramdom2 == igual2){
                do{       ////loop para nao gerar aleatorio igual ao gerar()
                    ramdom2 = Math.floor(Math.random() * length1); 
                }while(ramdom2 == igual2);
                //teste_ramdom_2 = ramdom1;
                divtexto.innerHTML += ", ";
                gene();
                divtexto.innerHTML +=` ${text1.nodeValue.toUpperCase()}`;
                console.log(`print w2!=0 word2: ${word2[ramdom2]} r:${ramdom2}`)
                word2[ramdom2] = 1; 
                console.log('aqui')
            }else if(ramdomsw == 2){
                divtexto.innerHTML += ", ";
                gene();
                divtexto.innerHTML += ` ${text1.nodeValue.toUpperCase()}`;
                console.log(`print w2!=0 word2: ${word2[ramdom2]} r:${ramdom2}`)
                word2[ramdom2] = 1;
                console.log('aqui')
            }
        }
        else if(ramdomsw == 3 && word3[ramdom3] == 1){
            do{       ////loop para nao gerar aleatorio igual ao gerar()
                ramdom3 = Math.floor(Math.random() * length3); 
            }while(word3[ramdom3] == 1);
            console.log('aqui')
        }else if(ramdomsw == 3){
            gene();
            divtexto.innerHTML +=  ` ${text2.nodeValue.toUpperCase()}`;  
            word3[ramdom3] = 1;  
            console.log('aqui')
        }     
}

function palavra1(){
    console.log("m")
    if(ramdomsw == 1 && igual1 == ramdom1){
        do{       ////loop para nao gerar aleatorio igual ao gerar()
            ramdom1 = Math.floor(Math.random() * length1); 
            console.log("dentro do loppp")
        }while(ramdom1 == igual1 || word1[ramdom1] == 1);   //gerando outro aleatorio que fode a 
        console.log("fora do loop")                            //checagem
        
        gene();
        divtexto.innerHTML += ", ";
        divtexto.innerHTML +=` ${text.nodeValue.toUpperCase()}`;
        console.log('aqui')
        //console.log(`print | if f() palavra1 word1: ${word1[ramdom1]} r:${ramdom1}`)
        
        word1[ramdom1] = 1;
    }else if(ramdomsw == 1){
        divtexto.innerHTML += ", ";
        divtexto.innerHTML +=` ${text.nodeValue.toUpperCase()}`;
        
        console.log("coisa bugada " + word1[wtf])
        word1[ramdom1] = 1;
       
        
    }
}

function palavra2(){
    
    if(ramdomsw == 2 && ramdom2 == igual2){
        do{       ////loop para nao gerar aleatorio igual ao gerar()
            ramdom2 = Math.floor(Math.random() * length2); 
        }while(ramdom2 == igual2 || word2[ramdom2] == 1);
        //teste_ramdom_2 = ramdom1;
        
        gene();
        divtexto.innerHTML += ", ";
        divtexto.innerHTML +=` ${text1.nodeValue.toUpperCase()}`;

        
        word2[ramdom2] = 1;
        
    }else if(ramdomsw == 2){
        divtexto.innerHTML += ", ";
        gene();
        divtexto.innerHTML += ` ${text1.nodeValue.toUpperCase()}`;
        
        word2[ramdom2] = 1;
        
    }
}



