/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer; /*gamePlaying*/

init();
//var lastDice;
document.querySelector('.btn-roll').addEventListener('click', function() {
  /*if (gamePlaying) {*/
    // Random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
   // display the result
       document.getElementById('dice-1').style.display = 'block';
       document.getElementById('dice-2').style.display = 'block';

       document.getElementById('dice-1').src = 'dice-' + dice1 +'.png';
       document.getElementById('dice-2').src = 'dice-' + dice2 +'.png';

       // update the current IF the number geerated by the dice not equal 1
    /* if (dice === 6 && lastDice === 6) {
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer ).textContent = '0';
        nextPlayer();
     }*/
      if(dice1 !== 1 && dice2 !== 1 ){
       //update the score
       roundScore = dice1 + dice2;
       //update the UI the give the HUND to the next player
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

     } else {
      nextPlayer();
    }
    /*
     lastDice = dice;
  }*/

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    // and the CURRNT score to the GLOBOL score
    //if (gamePlaying) {
      scores[activePlayer] += roundScore;

      // update the UI and give the hund to the next player
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      var input = document.querySelector('.final-score').value;
      var winningScore;
      //check if the player won the game
      if (input) {
         winningScore = input;
      }else {
         winningScore = 100;
      }
      if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying =false;
      }else {
        nextPlayer();
      }


});

function nextPlayer(){

  activePlayer === 0 ?  activePlayer = 1 :activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';


};

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  //gamePlaying = true;

  var score0 = document.getElementById('score-0');
  var score1 = document.getElementById('score-1');
  var current0 = document.getElementById('current-0');
  var current1 = document.getElementById('current-1');
  score0.textContent = '0';
  score1.textContent = '0';
  current0.textContent ='0';
  current1.textContent = '0';
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  //document.querySelector('.player-1-panel').classList.toggle('active');

}
//var x = document.querySelector('#current-0').textContent;
//console.log(x);
