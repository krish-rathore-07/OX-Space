let turnO = true;
let scoreO = 0;
let scoreX = 0;
let d = document.getElementById('resultid');
let rstbtn = document.getElementById('resetgame')
let plyagn = document.getElementById('playagain')
let audio = document.getElementById("myaudio");
let choices = document.querySelectorAll(".button");
let msgcon = document.getElementById('messegeid')
let btncon = document.getElementById('buttoncontainerid')
let entid = document.getElementById('enterid')
choices.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
    if (turnO) {
      button.innerHTML = "O";
      turnO = false;
      button.disabled = true; 
    } else {
      button.innerHTML = "X";
      turnO = true;
      button.disabled = true;
    }
    checkwinner();
  });
});
const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const disablebuttons = () => {
  choices.forEach((button) => {
    button.disabled = true;
  });
};
const enablebuttons = () => {
  choices.forEach((button) => {
    button.disabled = false;
  });
};
const resetgamefunc = () => {
  choices.forEach((button) => {
    button.innerText = "";
    button.disabled = false;
  });
};
const playagainfunc = () => {
  choices.forEach((button) => {
    button.innerText = "";
    button.disabled = false;
    plyagn.style.display = "none";
    rstbtn.style.display = "block";
    d.innerText = "";
  });
};
const checkwinner = () => {
  for (let pattern of winpattern) {
    //  let samplearr = [pattern[0],pattern[1],pattern[2]];
    let posOne = choices[pattern[0]].innerText;
    let posTwo = choices[pattern[1]].innerText;
    let posThree = choices[pattern[2]].innerText;

    if (posOne != "" && posTwo != "" && posThree != "") {
      if (posOne === posTwo && posTwo === posThree) {
        console.log("winner");
        if (posOne === "O") {
          scoreO++;
        }
        if (posOne === "X") {
          scoreX++;
        }
        choices[pattern[0]].style.backgroundColor = "green"
        choices[pattern[2]].style.backgroundColor = "green"
        choices[pattern[1]].style.backgroundColor = "green"
        document.getElementById("playerO").innerText = scoreO;
        document.getElementById("playerX").innerText = scoreX;
        rstbtn.style.display = "none";
        plyagn.style.display = "block";
        d.style.display = "block";
        d.innerText = `Player ${posOne} win This Game.`;
        disablebuttons();
      }
    }
  }
};
const submitbutton = () => {
    entid.style.display = "none";
    btncon.style.display = "block";
    msgcon.style.display = "block";
}