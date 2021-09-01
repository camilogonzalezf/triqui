var nuevoJuego = false;

let matrix = [
            ['0','0','0'],
            ['0','0','0'],
            ['0','0','0']
            ];
var player1;
var player2;

var score1 = 0;
var score2 = 0;
var contador_selecciones = 0; 

function winPlayer1(){
    const img_player1 = document.getElementById("img_player1");
    img_player1.src="./images/win.png";
    img_player1.style.width = '80%';
    const img_player2 = document.getElementById("img_player2");
    img_player2.src="./images/lose.png";
    img_player2.style.width = '80%';
    document.getElementById("player1_title").style.fontSize = '18px'; 
    document.getElementById("player2_title").style.fontSize = '18px';
    score1 +=1;
    const score_1 = document.getElementById("score_1");
    const score_1m = document.getElementById("score_1m");
    score_1.innerText = score1;
    score_1m.innerText = score1;
    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = false;
    nextButton.style.backgroundColor = "#f5ce22";
    nextButton.style.cursor = "pointer";

    for (i=1; i<10; i++){
        let string = "button_active"+i;
        document.getElementById(string).disabled = true;
    }
    contador_selecciones = 0;
}

function winPlayer2(){
    const img_player1 = document.getElementById("img_player1");
    img_player1.src="./images/lose.png";
    img_player1.style.width = '80%';
    const img_player2 = document.getElementById("img_player2");
    img_player2.src="./images/win.png";
    img_player2.style.width = '80%';
    document.getElementById("player1_title").style.fontSize = '18px'; 
    document.getElementById("player2_title").style.fontSize = '18px';
    score2 +=1;
    const score_2 = document.getElementById("score_2");
    const score_2m = document.getElementById("score_2m");
    score_2.innerText = score2;
    score_2m.innerText = score2;
    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = false;
    nextButton.style.backgroundColor = "#f5ce22";
    nextButton.style.cursor = "pointer";

    for (i=1; i<10; i++){
        let string = "button_active"+i;
        document.getElementById(string).disabled = true;
    }
    contador_selecciones = 0;
}


function validar(){

    contador_selecciones+=1;

    let simbolo; 

    if(player1){
        simbolo = 'x';
    }
    else{
        simbolo = 'o';
    }
    //PRIMERA FILA
    if(simbolo === matrix[0][0] && simbolo === matrix[0][1] && simbolo === matrix[0][2]){
        if(simbolo=="x"){
            winPlayer1();
            return true;
        }
        else if(simbolo=="o"){
            winPlayer2();
            return true;
        }
        else {
            return false; 
        }
    }
    //SEGUNDA FILA
    if(simbolo === matrix[1][0] && simbolo === matrix[1][1] && simbolo === matrix[1][2]){
        if(simbolo=="x"){
            winPlayer1();
            return true;
        }
        else if(simbolo=="o"){
            winPlayer2();
            return true;
        }
        else {
            return false; 
        }
    }
    //TERCERA FILA
    if(simbolo === matrix[2][0] && simbolo === matrix[2][1] && simbolo === matrix[2][2]){
        if(simbolo=="x"){
            winPlayer1();
            return true;
        }
        else if(simbolo=="o"){
            winPlayer2();
            return true;
        }
        else {
            return false; 
        }
    }

    //PRIMERA COLUMNA
    if(simbolo === matrix[0][0] && simbolo === matrix[1][0] && simbolo === matrix[2][0]){
        if(simbolo=="x"){
            winPlayer1();
            return true;
        }
        else if(simbolo=="o"){
            winPlayer2();
            return true;
        }
        else {
            return false; 
        }
    }

    //SEGUNDA COLUMNA
    if(simbolo === matrix[0][1] && simbolo === matrix[1][1] && simbolo === matrix[2][1]){
        if(simbolo=="x"){
            winPlayer1();
            return true;
        }
        else if(simbolo=="o"){
            winPlayer2();
            return true;
        }
        else {
            return false; 
        }
    }
    //TERCERA COLUMNA
    if(simbolo === matrix[0][2] && simbolo === matrix[1][2] && simbolo === matrix[2][2]){
        if(simbolo=="x"){
            winPlayer1();
            return true;
        }
        else if(simbolo=="o"){
            winPlayer2();
            return true;
        }
        else {
            return false; 
        }
    }

    //DIAGONAL 1

    if(simbolo === matrix[0][0] && simbolo === matrix[1][1] && simbolo === matrix[2][2]){
        if(simbolo=="x"){
            winPlayer1();
            return true;
        }
        else if(simbolo=="o"){
            winPlayer2();
            return true;
        }
        else {
            return false; 
        }
    }

    //DIAGONAL 2
    if(simbolo === matrix[0][2] && simbolo === matrix[1][1] && simbolo === matrix[2][0]){
        if(simbolo=="x"){
            winPlayer1();
            return true;
        }
        else if(simbolo=="o"){
            winPlayer2();
            return true;
        }
        else {
            return false; 
        }
    }
    console.log(contador_selecciones);
    if(contador_selecciones===9){
        contador_selecciones = 0;
        const nextButton = document.getElementById("nextButton");
        nextButton.disabled = false;
        nextButton.style.backgroundColor = "#f5ce22";
        nextButton.style.cursor = "pointer";
        return false;
    }
}


function update_matrix(row,col){
    matrix[row][col] = player1?"x":"o";
    console.log(matrix);
    //Validar Cual jugador Ganó  
    let ganador = validar();

    return ganador; 
}

function player_turn(){
    if(player1 === true){
        const img_player1 = document.getElementById("img_player1");
        img_player1.src="./images/play.png";
        img_player1.style.width = '120%';
        const img_player2 = document.getElementById("img_player2");
        img_player2.src="./images/wait.png";
        img_player2.style.width = '80%';
        document.getElementById("player1_title").style.fontSize = '30px'; 
        document.getElementById("player2_title").style.fontSize = '18px'; 
    }
    else{
        const img_player1 = document.getElementById("img_player1");
        img_player1.src="./images/wait.png";
        img_player1.style.width = '80%';
        const img_player2 = document.getElementById("img_player2");
        img_player2.src="./images/play.png";
        img_player2.style.width = '120%';
        document.getElementById("player1_title").style.fontSize = '18px'; 
        document.getElementById("player2_title").style.fontSize = '30px'; 
    }
}

function startGame(){ 
    if(!nuevoJuego){
        
        for (i=1; i<10; i++){
            let string = "button_active"+i;
            document.getElementById(string).style.display = 'block';
        }
    }
    else{
        for (i=1; i<10; i++){
            let string = "button_active"+i;
            document.getElementById(string).disabled = false;
            document.getElementById(string).style.cursor = 'pointer';
        }
        nuevoJuego = false; 
    }
    player_turn();
}

//----------------------SORTEAR PARTIDA ----------------------------
function randomGame(){ // Boton
    const ranMatch = Math.floor(Math.random()*2) + 1;
    const playerInit = document.getElementById("playerInit");
    if (ranMatch == 1){
        playerInit.innerText = "Inicia Jugador 1";
            player1 = true;
            player2 = false; 
    }
    else{
        playerInit.innerText = "Inicia Jugador 2";
            player1 = false;
            player2 = true; 
    }

    let modal = document.querySelectorAll(".modal")[0];
    let modal_container = document.querySelectorAll(".modal-container")[0];
    modal_container.style.opacity = "1";
    modal_container.style.visibility = "visible";
    modal.classList.toggle("modal-close");
    startGame();
    const button_ranGame = document.getElementById("ranGame");
    button_ranGame.disable = true;
    button_ranGame.style.backgroundColor = "gray";
    button_ranGame.style.cursor = "default";
    const button_reset = document.getElementById("cleanButton");
    button_reset.disabled = false;
    button_reset.style.backgroundColor = "#f5ce22";
    button_reset.style.cursor = "pointer";
}

//--------ANIMACIÓN PRINCIPIO --- MODEL

function start(){
    let modal = document.querySelectorAll(".modal")[0];
    let modal_container = document.querySelectorAll(".modal-container")[0];
    modal.classList.toggle("modal-close");

    setTimeout(
        function(){
            modal_container.style.opacity = "0";
            modal_container.style.visibility = "hidden";
        }
    ,1000);
}

window.addEventListener("click", 
    function (e){
        console.log(e.target);
        let modal = document.querySelectorAll(".modal")[0];
        let modal_container = document.querySelectorAll(".modal-container")[0];
            if(e.target == modal_container){
                modal.classList.toggle("modal-close");
                setTimeout(
                    function(){
                        modal_container.style.opacity = "0";
                        modal_container.style.visibility = "hidden";
                    }
                ,1000);
            }
        }

);

//------------------ REINICIAR

function resetButton(){
    let option = confirm("¿Esta seguro de Reiniciar el Juego?");
        if(option){
        location.reload();
    }
}

/** Fila 1 ************************************************************/
function active_c_11(){
    const button_selection = document.getElementById("button_active1");
    if(player1){
        button_selection.innerText = "x";
        button_selection.style.color = 'tomato';
    }
    else{
        button_selection.innerText = "o";
        button_selection.style.color = '#1E90FF';
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    let  ganador =  update_matrix(0,0);
    if(!ganador){
        player1= !player1; //Niega el Booleano
        player2= !player2;
        player_turn();
    }
}

function active_c_12(){
    const button_selection = document.getElementById("button_active2");
    if(player1){
        button_selection.innerText = "x";
        button_selection.style.color = 'tomato';
    }
    else{
        button_selection.innerText = "o";
        button_selection.style.color = '#1E90FF';
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    let  ganador =  update_matrix(0,1);
    if(!ganador){
        player1= !player1; //Niega el Booleano
        player2= !player2;
        player_turn();
    }
}

function active_c_13(){
    const button_selection = document.getElementById("button_active3");
    if(player1){
        button_selection.innerText = "x";
        button_selection.style.color = 'tomato';
    }
    else{
        button_selection.innerText = "o";
        button_selection.style.color = '#1E90FF';
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    let  ganador =  update_matrix(0,2);
    if(!ganador){
        player1= !player1; //Niega el Booleano
        player2= !player2;
        player_turn();
    }
}

/** Fila 2 ************************************************************/
function active_c_21(){
    const button_selection = document.getElementById("button_active4");
    if(player1){
        button_selection.innerText = "x";
        button_selection.style.color = 'tomato';
    }
    else{
        button_selection.innerText = "o";
        button_selection.style.color = '#1E90FF';
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    let  ganador =  update_matrix(1,0);
    if(!ganador){
        player1= !player1; //Niega el Booleano
        player2= !player2;
        player_turn();
    }
}

function active_c_22(){
    const button_selection = document.getElementById("button_active5");
    if(player1){
        button_selection.innerText = "x";
        button_selection.style.color = 'tomato';
    }
    else{
        button_selection.innerText = "o";
        button_selection.style.color = '#1E90FF';
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    let  ganador =  update_matrix(1,1);
    if(!ganador){
        player1= !player1; //Niega el Booleano
        player2= !player2;
        player_turn();
    }
}

function active_c_23(){
    const button_selection = document.getElementById("button_active6");
    if(player1){
        button_selection.innerText = "x";
        button_selection.style.color = 'tomato';
    }
    else{
        button_selection.innerText = "o";
        button_selection.style.color = '#1E90FF';
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    let  ganador =  update_matrix(1,2);
    if(!ganador){
        player1= !player1; //Niega el Booleano
        player2= !player2;
        player_turn();
    }
}

/** Fila 3 ************************************************************/
function active_c_31(){
    const button_selection = document.getElementById("button_active7");
    if(player1){
        button_selection.innerText = "x";
        button_selection.style.color = 'tomato';
    }
    else{
        button_selection.innerText = "o";
        button_selection.style.color = '#1E90FF';
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    let  ganador =  update_matrix(2,0);
    if(!ganador){
        player1= !player1; //Niega el Booleano
        player2= !player2;
        player_turn();
    }
}

function active_c_32(){
    const button_selection = document.getElementById("button_active8");
    if(player1){
        button_selection.innerText = "x";
        button_selection.style.color = 'tomato';
    }
    else{
        button_selection.innerText = "o";
        button_selection.style.color = '#1E90FF';
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    let  ganador =  update_matrix(2,1);
    if(!ganador){
        player1= !player1; //Niega el Booleano
        player2= !player2;
        player_turn();
    }
}

function active_c_33(){
    const button_selection = document.getElementById("button_active9");
    if(player1){
        button_selection.innerText = "x";
        button_selection.style.color = 'tomato';
    }
    else{
        button_selection.innerText = "o";
        button_selection.style.color = '#1E90FF';
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    let  ganador =  update_matrix(2,2);
    if(!ganador){
        player1= !player1; //Niega el Booleano
        player2= !player2;
        player_turn();
    }
}
//-----------------------------------


function nextGame(){

    nuevoJuego = true; 

    matrix = [
        ['0','0','0'],
        ['0','0','0'],
        ['0','0','0']
        ];

    const button_ranGame = document.getElementById("ranGame");
    button_ranGame.disable = false;
    button_ranGame.style.backgroundColor = "#f5ce22";
    button_ranGame.style.cursor = "pointer";
    const button_reset = document.getElementById("nextButton");
    button_reset.disabled = true;
    button_reset.style.backgroundColor = "gray";
    button_reset.style.cursor = "default";


    const img_player1 = document.getElementById("img_player1");
    img_player1.src="./images/wait.png";
    img_player1.style.width = '80%';
    const img_player2 = document.getElementById("img_player2");
    img_player2.src="./images/wait.png";
    img_player2.style.width = '80%';
    document.getElementById("player1_title").style.fontSize = '18px'; 
    document.getElementById("player2_title").style.fontSize = '18px'; 
    
    for (i=1; i<10; i++){
        let string = "button_active"+i;
        document.getElementById(string).innerText = null;
        document.getElementById(string).disabled = true;
        document.getElementById(string).style.cursor = 'default';
    }
}

