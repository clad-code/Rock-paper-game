let player_move = ""
let computer_move = ""
let result_string = ""
let score = {
  win : 0,
  tie : 0,
  lose : 0
}
let player_comp = []
const game_choice = ["rock","paper","scissor"]
const user_field = document.getElementById("player-move")
const comp_field = document.getElementById("computer-move")
const result = document.getElementById("result")
const score_rate = document.getElementById("score-rate")
document.querySelectorAll("button").forEach(butt=>{
  butt.addEventListener("click",(e)=>{
    player_comp = []
    player_move = e.target.dataset.choice
    computer_move = generateRandom()
    result_string = checkResult(player_move,computer_move)
    
    result_show(result_string)
    display(player_move,computer_move,result_string)
    
    player_comp = [player_move,computer_move,result_string]
    localStorage.setItem("playing",JSON.stringify(player_comp))
  })
})

function display(player_move,computer_move,result_string){
  user_field.innerHTML = `<p id="player-move">Player : <span>${player_move.toUpperCase()}</span></p>`
comp_field.innerHTML = `<p id="computer-move">Computer : <span>${computer_move.toUpperCase()}</span></p>`
  result.innerHTML = `<p id="result">Result : <span>A ${result_string.toUpperCase()}</span></p>`
}

function generateRandom(){
  return computer_move = game_choice[Math.floor(Math.random()*3)]
}

//localStorage.clear()

const play = JSON.parse(localStorage.getItem("playing"))
if(play){
  player_comp = play
  display(player_comp[0],player_comp[1],player_comp[2])
}

function checkResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie"
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "scissor" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return "win"
  }

  return "lose"
}
function result_show(res){
  if(res === "win"){
    score.win ++
  }else if(res === "tie"){
    score.tie ++
  }else{
    score.lose ++
  }
  score_rate.innerHTML = `<span>Win : ${score.win} Tie : ${score.tie} Lose : ${score.lose}</span>`
  
  localStorage.setItem("score",JSON.stringify([score]))
}
//localStorage.clear()
let data = JSON.parse(localStorage.getItem("score"))
if (data){
  score = {
    win : data[0].win,
    tie : data[0].tie,
    lose : data[0].lose
  }
  result_show(result_string)
  
}