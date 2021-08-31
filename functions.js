let matrix = [
            ['0','0','0'],
            ['0','0','0'],
            ['0','0','0']
            ];

let player1 = true;
let player2 = false; 

function update_matrix(row,col){
    matrix[row][col] = player1?"x":"o";
    console.log(matrix);
    //Validar Cual jugador Ganó   
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
    document.getElementById("button_active1").style.visibility = 'visible';
    document.getElementById("button_active2").style.visibility = 'visible';
    document.getElementById("button_active3").style.visibility = 'visible';
    document.getElementById("button_active4").style.visibility = 'visible';
    document.getElementById("button_active5").style.visibility = 'visible';
    document.getElementById("button_active6").style.visibility = 'visible';
    document.getElementById("button_active7").style.visibility = 'visible';
    document.getElementById("button_active8").style.visibility = 'visible';
    document.getElementById("button_active9").style.visibility = 'visible';
    player_turn();
}

/** Fila 1 ************************************************************/
function active_c_11(){
    const c11 = document.getElementById("c1_1");

    if(player1){
        c11.innerText = "x";
        c11.style.color = 'tomato';
    }
    else{
        c11.innerText = "o";
        c11.style.color = '#1E90FF';
    }
    update_matrix(0,0);
    player1= !player1; //Niega el Booleano
    player2= !player2;
    player_turn();
}

function active_c_12(){
    const c12 = document.getElementById("c1_2");

    if(player1){
        c12.innerText = "x";
        c12.style.color = 'red';
    }
    else{
        c12.innerText = "o";
        c12.style.color = '#1E90FF';
    }
    update_matrix(0,1);
    player1= !player1; //Niega el Booleano
    player2= !player2;
    player_turn();
}

function active_c_13(){
    const c13 = document.getElementById("c1_3");

    if(player1){
        c13.innerText = "x";
        c13.style.color = 'red';
    }
    else{
        c13.innerText = "o";
        c13.style.color = '#1E90FF';
    }

    update_matrix(0,2);
    player1= !player1; //Niega el Booleano
    player2= !player2;
    player_turn();
}

/** Fila 2 ************************************************************/
function active_c_21(){
    const c21 = document.getElementById("c2_1");

    if(player1){
        c21.innerText = "x";
        c21.style.color = 'tomato';
        
    }
    else{
        c21.innerText = "o";
        c21.style.color = '#1E90FF';
    }
    update_matrix(1,0);
    player1= !player1; //Niega el Booleano
    player2= !player2;
    player_turn();
}

function active_c_22(){
    const c22 = document.getElementById("c2_2");

    if(player1){
        c22.innerText = "x";
        c22.style.color = 'red';
    }
    else{
        c22.innerText = "o";
        c22.style.color = '#1E90FF';
    }
    update_matrix(1,1);
    player1= !player1; //Niega el Booleano
    player2= !player2;
    player_turn();
}

function active_c_23(){
    const c23 = document.getElementById("c2_3");

    if(player1){
        c23.innerText = "x";
        c23.style.color = 'red';
    }
    else{
        c23.innerText = "o";
        c23.style.color = '#1E90FF';
    }

    update_matrix(1,2);
    player1= !player1; //Niega el Booleano
    player2= !player2;
    player_turn();
}

/** Fila 3 ************************************************************/
function active_c_31(){
    const c31 = document.getElementById("c3_1");

    if(player1){
        c31.innerText = "x";
        c31.style.color = 'tomato';
        
    }
    else{
        c31.innerText = "o";
        c31.style.color = '#1E90FF';
    }
    update_matrix(2,0);
    player1= !player1; //Niega el Booleano
    player2= !player2;
    player_turn();
}

function active_c_32(){
    const c32 = document.getElementById("c3_2");

    if(player1){
        c32.innerText = "x";
        c32.style.color = 'red';
    }
    else{
        c32.innerText = "o";
        c32.style.color = '#1E90FF';
    }
    update_matrix(2,1);
    player1= !player1; //Niega el Booleano
    player2= !player2;
    player_turn();
}

function active_c_33(){
    const c33 = document.getElementById("c3_3");

    if(player1){
        c33.innerText = "x";
        c33.style.color = 'red';
    }
    else{
        c33.innerText = "o";
        c33.style.color = '#1E90FF';
    }

    update_matrix(2,2);
    player1= !player1; //Niega el Booleano
    player2= !player2;
    player_turn();
}