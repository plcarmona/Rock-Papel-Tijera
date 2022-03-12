
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
    function oneGame(){
    let c=0;
    let p=0;
    for (let i = 0; i < 5; i++) {
        let text=prompt("Elegir","Rock, Paper or Tijeras");
        text=playRound(text,computerPlay);
        if(text=="player wins"){
            p++;
        }
        else if(text="computer wins"){
            c++;
        }
     }
    
     document.getElementById("demo").innerHTML = "player:"+p+" // computer:"+ c;
    }