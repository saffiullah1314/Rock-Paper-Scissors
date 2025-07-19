let userImg = document.querySelector(".user-img");
let compImg = document.querySelector(".comp-img");
let screenBoard = document.querySelector(".board");
const boxes = document.querySelectorAll(".box");
let usPoint = document.querySelector(".user-point");
let coPoint = document.querySelector(".comp-point");
let userPoint = 0;  // Initialize as a number
let compPoint = 0;  // Initialize as a number

for (let box of boxes) {
    box.addEventListener("click", () => {
        defaultImg(userImg,compImg);
        const userChoice = box.getAttribute("id");
        screenBoard.innerText = "Wait!!";
        screenBoard.style.color = "#257180";
        userImg.classList.add("useranimate");
        compImg.classList.add("companimate");

        setTimeout(() => {   
            changeUserImg(userChoice, userImg);
            userImg.classList.remove("useranimate");
            compImg.classList.remove("companimate");
            playGame(userChoice);
        }, 2000);
        
    });
}
const defaultImg = (userImg,compImg) => {
    userImg.src = "rock.png";
    compImg.src = "rock.png";
}
const changeUserImg = (usChoice, usImage) => {
    if (usChoice === "rock") {
        usImage.src = "rock.png";
    } else if (usChoice === "paper") {
        usImage.src = "paper.jpg";
    } else {
        usImage.src = "scissor.jpg";  
    }
}

const genCompChoice = () => {
    const choiceOption = ["rock", "paper", "scissor"];  
    let randIdx = Math.floor(Math.random() * 3);
    const userChoice = choiceOption[randIdx];
    changeCompImg(userChoice, compImg);
    return userChoice;  // Computer choice
}

const changeCompImg = (cuChoice, cuImage) => {
    if (cuChoice === "rock") {
        cuImage.src = "rock.png";
    } else if (cuChoice === "paper") {
        cuImage.src = "paper.jpg";
    } else {
        cuImage.src = "scissor.jpg";  
    }
}

const playGame = (user) => { 
    const comp = genCompChoice();  // Computer choice
    let userWin = true;  // Initialize userWin
    if (user === comp) {
        console.log("Draw");
        screenBoard.innerText = "Draw!";
        screenBoard.style.color = "#FD8B51";
    } else {
        if (user === "rock") {
            userWin = comp === "paper" ? false : true; 
        } else if (user === "paper") {
            userWin = comp === "scissor" ? false : true; 
        } else {
            userWin = comp === "rock" ? false : true; 
        }
        showWinner(userWin);
    }
     
}

const showWinner = (userWin) => {
    if (userWin) {
        screenBoard.innerText = "You win"; 
        screenBoard.style.color = "green";
        userPoint++;
        usPoint.innerText = userPoint;
            
    } else {
        screenBoard.innerText = "Computer win"; 
        screenBoard.style.color = "red";
        compPoint++;
        coPoint.innerText = compPoint;
    }
}
