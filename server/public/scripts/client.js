$(document).ready(onReady);

let operator = '';
let solution = '';
let newRecievedSolutions = [];

// set up click handlers 
function onReady(){
    console.log("packages locked and loaded")
    $('#submitBtn').on('click', equalOperator);
    $('#additionBtn').on('click', additionOperator);
    $('#subtractBtn').on('click', subtractionOperator);
    $('#multiplyBtn').on('click', multiplicationOperator);
    $('#divideBtn').on('click', divisionOperator);
    $('#clearBtn').on('click', clearOperator);
    
}
// function to handle addition calculations 
function additionOperator(){
    console.log('in additionOperator');
    operator = '+'
    console.log(operator);
}

// function to handle subtraction calculations 
function subtractionOperator(){
    console.log('in subtractionOperator');
    operator = '-'
    console.log(operator);
}

// function to handle multiplication calculations
function multiplicationOperator(){
    console.log('in multiplicationOperator');
    operator = '*'
    console.log(operator);
}

// function to handle division calculations 
function divisionOperator(){
    console.log('in divisionOperator');
    operator = '/'
    console.log(operator);
}

// function to handle output of each calculation 
function equalOperator(evt){
    evt.preventDefault();
    console.log('in equalOperator')
    
    let calcSubmissions = {
        firstNumberInput: $('#firstNumInput').val(),
        secondNumberInput: $('#secondNumInput').val(),
        operator: operator,
        solution: ''
    }
    $.ajax({
        url:'/calc-submission',
        method: 'POST',
        data: calcSubmissions
    })
    .then(response => {
        console.log('in POST calc submissions');
        
    })
    .catch(err => {
        console.log('POST calc submission error')
    })
    calcSolutions();
};

// getting all previous calculations 
function calcSolutions (){
    console.log('in calc solutions function');
    
    $.ajax({
        url: '/calc-solution',
        method: 'GET'
    })
    .then(response => {
        console.log('GET calc solution', response);
        newRecievedSolutions.push(response);
        
        // newRecievedSolutions = response;
        render();  
    })
    .catch(err => {
        console.log('GET calc solution error')
    })
};      

// listing previous calculations on the DOM 
function render(){
    console.log('in render');
    console.log(newRecievedSolutions);
    $('.currentSolution').empty();
    $('.currentSolution').append(`<h2>${newRecievedSolutions[newRecievedSolutions.length -1].solution}</h2>`);        
    $('#pastCalcs').empty();
    for (let calc of newRecievedSolutions){
        $('#pastCalcs').append(`<li>${calc.firstNumberInput} ${calc.operator} ${calc.secondNumberInput} = ${calc.solution}`)
    };
}

// clear input fields 
function clearOperator (evt){
    evt.preventDefault();
    console.log('in clear all function');
    $('#firstNumInput').val('');
    $('#secondNumInput').val('');
    $('.currentSolution').empty();
    
}

