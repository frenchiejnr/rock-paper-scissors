function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random()*choices.length);
    let play = choices[choice];
    return play;
}