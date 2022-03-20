
function computerPlay(){
        r=Math.floor(Math.random() * 3);

        if(r==1){
            r="Rock";
        }
        else if(r==2){
            r="Paper";
        }
        else if(r==0){
            r="Tijeras";
        }

        return r;
    }
    
    function playRound(player,computer){
    if(computer==player){
        text="Drawn";
    }
    else if((computer=="Rock" && player=="Paper")||(computer=="Tijeras" && player=="Rock")||(computer=="Paper" && player=="Tijeras")){
        text="player wins";
    }
    else{
        text="computer wins";
    }

    return text;
    }
    
    

    function oneGame(play){
        let computer= computerPlay();
        let text=playRound(play,computer);
        if(text=="player wins"){
            p++;
        }
        else if(text="computer wins"){
            c++;
        }

        marcador.textContent= "player ="+ p +"_____________computer="+c;
        if(p==5 || c==5){
            p=0;
            c=0;
            let ganador="";
            if(c>=p){ 
                ganador=" computador";
            } 
            else {
                gandor=" player";
            }
            marcador.textContent= "Ha ganado"+ ganador;
            
            
        }
    
    }

    const demo=document.querySelector('#demo');
    const marcador=document.createElement('marcador');
    marcador.classList.add=("display-1");
    marcador.style.color='white';
    marcador.textContent= "player = 0"+ "_____________computer= 0";
    demo.appendChild(marcador);
    let c=0;
    let p=0;
 

    const btn1 = document.querySelector('#bttn1');
    btn1.addEventListener('click', () => {
    oneGame("Rock");
    });
    const btn2 = document.querySelector('#bttn2');
    btn2.addEventListener('click', () => {
    oneGame("Paper");
    });
    const btn3 = document.querySelector('#bttn3');
    btn3.addEventListener('click', () => {
    oneGame("Tijeras");
    });