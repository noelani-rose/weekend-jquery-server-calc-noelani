$(document).ready(onReady);

let firstNumSubmission = '';
let secondNumSubmission = '';
let allSubmissions = [];
// let allSubmissions = [];
// let additionAnswers = [];
// let subtractionAnswers = [];
// let muliplicationAnswers = [];
// let divisionAnswers = ''


let operator = '';
let solution = '';

// when any of these (except clear and submit) are clicked,
// store the first value
// only when submit is clicked, perform that 
// respective operation 

function onReady(){
    console.log("packages locked and loaded")
    $('.submitBtn').on('click', equalOperator);
    $('.additionBtn').on('click', additionOperator);
    // $('.subtractBtn').on('click', subtractOperator);
    // $('.multiplyBtn').on('click', multiplyOperator);
    // $('.divideBtn').on('click', divisionOperator);
    // $('.clearBtn').on('click', clearOperator);

}

function additionOperator(evt){
    evt.preventDefault();
    console.log('in additionOperator');
    operator = '+'
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
    
console.log(calcSubmissions)

    $.ajax({
        url:'/calc-submission',
        method: 'POST',
        data: calcSubmissions
    })

    .then(response => {
        console.log('in POST calc submissions', response);
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
        console.log('GET calc solution', response)
        
        // solution.push();
        // console.log(solution);
    })

    .catch(err => {
        console.log('GET calc solution error')
    })

};      

// function render(){
//     console.log('in render')
// }