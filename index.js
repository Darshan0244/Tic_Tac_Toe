let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX, player0

// Storing the Winning Patterns in 2D ARRAY..!!!
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Reset the Game..!!!!!!
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// Adding EventListners to All buttons & Adding X / O to Buttons...
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Box was Clicked");
        if(turn0){
            //Player0
            box.innerText = "O";
            turn0 = false;
        }else{
            //PlayerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

//Disable the Boxes after Game Completion
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
//Enable the Boxes for new Game
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

// Showing the Winner...!!!!!!
const showWinner = (winner) => {
    msg.innerText = `🎉Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

//Checking the Winner..!!!
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }       
    }
};


// After clicking new Game Button
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);