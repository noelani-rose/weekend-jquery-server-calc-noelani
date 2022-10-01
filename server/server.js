console.log('in server.js');
const express = require('express');
const bodyParser = require('body-parser');
const { get, post } = require('jquery');
const { send } = require('process');
const app = express();
const PORT = 3100;

// let submissionsNumOne = [];
// let submissionsNumTwo = [];
// let submissionsOperator = [];
// let solution = 0;

let calcSubmissions = [];

// let postedSubmissionAnswers = [];  



app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log ('We\'re LIVE!!! Server Calc is running', PORT)

})


app.post('/calc-submission', (req, res)=> {
  console.log('in POST calc submission')

  // let newCalcSubmissionsNumOne = req.body.firstNumberInput;
  // submissionsNumOne.push(newCalcSubmissionsNumOne);

  // let newCalcSubmissionsNumTwo = req.body.secondNumberInput;
  // submissionsNumTwo.push(newCalcSubmissionsNumTwo);

  // let newCalcSubmissionOperator = req.body.operator;
  // submissionsOperator.push(newCalcSubmissionOperator);


  let newCalcSubmissions = req.body;
  calcSubmissions.push(newCalcSubmissions)
  console.log(calcSubmissions);


  res.sendStatus(201);
});


app.get('/calc-solution', (req, res) => {
  console.log('in GET calc solution');

  if (calcSubmissions[0].operator === '+'){
  let newSolution = Number(calcSubmissions[0].firstNumberInput) + Number(calcSubmissions[0].secondNumberInput)
  calcSubmissions[0].solution = newSolution 

  console.log(calcSubmissions);
  res.send('workin on it!');

  }

  else if (calcSubmissions[0].operator === '-'){
  let newSolution = Number(calcSubmissions[0].firstNumberInput) - Number(calcSubmissions[0].secondNumberInput)
  calcSubmissions[0].solution = newSolution 
  }

  else if (calcSubmissions[0].operator === '*'){
    let newSolution = Number(calcSubmissions[0].firstNumberInput) * Number(calcSubmissions[0].secondNumberInput)
    calcSubmissions[0].solution = newSolution 
  }

  else if (calcSubmissions[0].operator === '/'){
    let newSolution = Number(calcSubmissions[0].firstNumberInput) / Number(calcSubmissions[0].secondNumberInput)
    calcSubmissions[0].solution = newSolution 
  }

})


// app.get('/server-calc', (req, res) =>{
//   console.log('in app.GET server-calc')

//   res.send(calculations);
// });



