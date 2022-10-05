$(document).ready(onReady);




let operator = '';
let solution = '';
let newRecievedSolutions = [];


function onReady(){
    console.log("packages locked and loaded")
    $('.submitBtn').on('click', equalOperator);
    $('.additionBtn').on('click', additionOperator);
    $('.subtractBtn').on('click', subtractionOperator);
    $('.multiplyBtn').on('click', multiplicationOperator);
    $('.divideBtn').on('click', divisionOperator);
    $('.clearBtn').on('click', clearOperator);

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
        newRecievedSolutions.push(response);

        // newRecievedSolutions = response;
        render();  
    })
    .catch(err => {
        console.log('GET calc solution error')
    })
};      


function render(){
    console.log('in render');
    console.log(newRecievedSolutions);
    $('.currentSolution').empty();
    $('.currentSolution').append(`<h2>${newRecievedSolutions[newRecievedSolutions.length -1].solution}</h2>`);        
    $('#pastCalcs').empty();
    for (let calc of newRecievedSolutions){
        $('#pastCalcs').append(`<li>${calc.firstNumberInput} ${calc.operator} ${calc.secondNumberInput} = ${calc.solution}`)
    };
    
    // $('#pastCalcs').append(`<li><h3>${newRecievedSolutions[newRecievedSolutions.length -1].firstNumberInput} ${newRecievedSolutions[newRecievedSolutions.length -1].operator} ${newRecievedSolutions[newRecievedSolutions.length -1].secondNumberInput}
    //  = ${newRecievedSolutions[newRecievedSolutions.length -1].solution}</h3></li>
    // `);
}

function clearOperator (evt){
    evt.preventDefault();
    console.log('in clear all function');
    $('#firstNumInput').val('');
    $('#secondNumInput').val('');
    $('.currentSolution').empty();

}

