const title = document.getElementById('title');
const cell = document.querySelectorAll('.cell');
const playagain = document.getElementById('playagain');

let turn = "X";

let squares = [];

let timeoutId;

playagain.addEventListener("click", function(){

    location.reload();
})

function end(num1,num2,num3){
    title.innerHTML = `${squares[num1]} Win`;
    document.getElementById("item" +num1).style.background= '#000';
    document.getElementById("item" +num1).style.color= '#fff';
    document.getElementById("item" +num2).style.background= '#000';
    document.getElementById("item" +num2).style.color= '#fff';
    document.getElementById("item" +num3).style.background= '#000';
    document.getElementById("item" +num3).style.color= '#fff';
    playagain.style.display = "inline-block";
    clearTimeout(timeoutId); // stop the first function by clearing the timeout
}



function winner(){
    for(let i =1 ; i< 10 ; i++){

        squares[i] = document.getElementById('item' +i).innerHTML;
    }

    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[3] !=''){
        end(1,2,3)
    }else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] !=''){
        end(4,5,6)

    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] !=''){
        end(7,8,9)

    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[7] !=''){
        end(1,4,7)

    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[9] !=''){
        end(1,5,9)

    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[8] !=''){
        end(2,5,8)

    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[9] !=''){
        end(3,6,9)

    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[7] !=''){
        end(3,5,7)
    }

    let isDraw = true;
  for(let i = 1; i <= 9; i++){
    if(squares[i] === ""){
      isDraw = false;
      break;
    }
  }
  if(isDraw){
    title.innerHTML = "Draw";
    playagain.style.display = "inline-block";
    clearTimeout(timeoutId);
  }
}

function aiturn(){
    // select a random empty cell
    const emptyCells = Array.from(cell).filter(el => el.innerHTML === "");
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const selectedCell = emptyCells[randomIndex];
    
    // set the selected cell to "O"
    selectedCell.innerHTML = "O";
    
    // switch the turn back to "X"
    turn = "X";
    
    // update the title to show it's "X" turn
    title.innerHTML = "X Turn";
    winner();
  }
  

  function display(id){
    let element = document.getElementById(id);
  
    if(turn === "X" && element.innerHTML === ""){
      element.innerHTML = "X";
      turn = "O";
      title.innerHTML = "O Turn";
      
      // check if it's the AI's turn and call aiturn()
        timeoutId =  setTimeout(aiturn, 500);
      
    }
    winner()
    
  }
  