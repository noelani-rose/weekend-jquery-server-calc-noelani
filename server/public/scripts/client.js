$(document).ready(onReady);

// let firstNumSubmission = '';
// let allSubmissions = [];
// let allSubmissions = [];
// let additionAnswers = [];
// let subtractionAnswers = [];
// let muliplicationAnswers = [];
// let divisionAnswers = ''


let operator = '';
let solution = '';
let newRecievedSolutions = [];

// when any of these (except clear and submit) are clicked,
// store the first value
// only when submit is clicked, perform that 
// respective operation 

function onReady(){
    console.log("packages locked and loaded")
    $('.submitBtn').on('click', equalOperator);
    $('.additionBtn').on('click', additionOperator);
    $('.subtractBtn').on('click', subtractionOperator);
    $('.multiplyBtn').on('click', multiplicationOperator);
    $('.divideBtn').on('click', divisionOperator);
    // $('.clearBtn').on('click', clearOperator);
}

function additionOperator(){
    console.log('in additionOperator');
    operator = '+'
    console.log(operator);
}

function subtractionOperator(){
    console.log('in subtractionOperator');
    operator = '-'
    console.log(operator);
}

function multiplicationOperator(){
    console.log('in multiplicationOperator');
    operator = '*'
    console.log(operator);
}

function divisionOperator(){
    console.log('in divisionOperator');
    operator = '/'
    console.log(operator);
}


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


function calcSolutions (){
    console.log('in calc solutions function');

    $.ajax({
        url: '/calc-solution',
        method: 'GET'
    })
    .then(response => {
        console.log('GET calc solution', response);
        newRecievedSolutions = response;
        render()  
    })
    .catch(err => {
        console.log('GET calc solution error')
    })

};      

function render(){
    console.log('in render');
    console.log(newRecievedSolutions);
    $('#pastCalcs').empty();
    $('.currentSolution').append(`<h2>${newRecievedSolutions[newRecievedSolutions.length -1].solution}</h2>`);
    $('#pastCalcs').append(`<li>${newRecievedSolutions}</li>`);
    
}
    // for(let i = 0; i < newRecievedSolutions.length; i++)
    // $('#pastCalcs').append(`
    // <li>${newRecievedSolutions[i][]}</li>`)
