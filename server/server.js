console.log('in server.js');
const express = require('express');
const bodyParser = require('body-parser');
const { get } = require('jquery');
const { send } = require('process');
const app = express();
const PORT = 3100;

let calculations = [];


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log ('We\'re LIVE!!! Server Calc is running', PORT)

})


app.post('/server-calc', (req, res)=> {
  console.log('in app.POST server-calc', calculations)

  
  let newCalculations = req.body;

  calculations.push(newCalculations);

  res.sendStatus(201);
});


app.get('/server-calc', (req, res) =>{
  console.log('in app.GET server-calc')

  res.send(calculations);
});



// app.get('/guess-game', (req, res)=>{
//   // console.log('guess-game GET playerguesses', playerGuesses);
//   for (let i = 0; i < playerGuesses.length; i++){
//     // console.log('this is player ones guess', playerGuesses[i].player1);
//     playerGuesses[i].player1 = Number(playerGuesses[i].player1);
//     if (theRandomNumber === playerGuesses[i].player1){
//       console.log('you\re on the right track!');
//     }
//   }
//   // playerGuesses.player1 = Number(playerGuesses.player1);
//   // playerGuesses.player2 = Number(playerGuesses.player2);
//   // console.log('is this the object as a number?', playerGuesses[0]);
//   // if (theRandomNumber === playerGuesses[i].player1){
//   //   alert('YOU ROCK!!!')
//   // }
//   // else if (theRandomNumber > playerGuesses[i].player1){
//   //   alrert('you\'re sooooo high')
//   // }
//   // else if (theRandomNumber < playerGuesses[i].player1){
//   //   alert('too slow and too low')
//   // };
//   res.send(playerGuesses);
// })

// app.post('/guess-game', (req, res)=> {
//   console.log('in POST guess-game', playerGuesses )
  
//   let newPlayerGuesses = req.body;

//   playerGuesses.push(newPlayerGuesses);

//   res.sendStatus(201);
// })

// app.get('/guess-game-random', (req, res)=>{
//    console.log('in guess-game GET random number');
//   // let randoNumber = getRanNumber()

//    res.send(randoNumber);
// })

// function getRanNumber (){
//   let ranNum = Math.floor(Math.random() * 25) + 1;
//   theRandomNumber = ranNum;
//   console.log('here are the player guesses', playerGuesses);
//   return theRandomNumber;

// }

