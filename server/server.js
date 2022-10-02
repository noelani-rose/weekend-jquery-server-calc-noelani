console.log('in server.js');
const express = require('express');
const bodyParser = require('body-parser');
const { get, post } = require('jquery');
const { send } = require('process');
const app = express();
const PORT = 3100;


let calcSubmissions = [];




app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log ('We\'re LIVE!!! Server Calc is running', PORT)

})


app.post('/calc-submission', (req, res)=> {
  console.log('in POST calc submission')



  let newCalcSubmissions = req.body;
  calcSubmissions.push(newCalcSubmissions)


  res.sendStatus(201);
});


app.get('/calc-solution', (req, res) => {
  console.log('in GET calc solution');

  if (calcSubmissions[calcSubmissions.length -1].operator === '+'){
    calcSubmissions[calcSubmissions.length -1].solution = Number(calcSubmissions[calcSubmissions.length -1].firstNumberInput) + Number(calcSubmissions[calcSubmissions.length -1].secondNumberInput)
    res.send(calcSubmissions);

  }

  else if (calcSubmissions[calcSubmissions.length -1].operator === '-'){
    calcSubmissions[calcSubmissions.length -1].solution = Number(calcSubmissions[calcSubmissions.length -1].firstNumberInput) - Number(calcSubmissions[calcSubmissions.length -1].secondNumberInput)
    res.send(calcSubmissions);
  }

  else if (calcSubmissions[0].operator === '*'){
    calcSubmissions[calcSubmissions.length -1].solution = Number(calcSubmissions[calcSubmissions.length -1].firstNumberInput) * Number(calcSubmissions[calcSubmissions.length -1].secondNumberInput)
    res.send(calcSubmissions);
  }

  else if (calcSubmissions[0].operator === '/'){
    calcSubmissions[calcSubmissions.length -1].solution = Number(calcSubmissions[calcSubmissions.length -1].firstNumberInput) / Number(calcSubmissions[calcSubmissions.length -1].secondNumberInput)
    res.send(calcSubmissions);
  }

})





