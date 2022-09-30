$(document).ready(onReady);


let pastSubmissions = [];
let allSubmissions = [];
let additionAnswers = [];
let subtractionAnswers = [];
let muliplicationAnswers = [];
let divisionAnswers = [];

function onReady(){
    console.log("packages locked and loaded")
    $('.submitBtn').on('click', onCalcSubmit);
    $('.additionBtn').on('click', additionOperator);
    $('.subtractBtn').on('click', subtractOperator);
    $('.multiplyBtn').on('click', multiplyOperator);
    $('.divideBtn').on('click', divisionOperator);
    $('.clearBtn').on('click', clearOperator);

}

function additionOperator(evt){
    evt.preventDefault();
    console.log('in addOperator');

    let additionSubmissions = {
        firstNumber: $('#firstNumInput').val(),
        secondNumber: $('#secondNumInput').val()
    };
    additionSubmissions.firstNumber = Number(additionSubmissions.firstNumber);
    additionSubmissions.secondNumber = Number(additionSubmissions.secondNumber);
    let additionAnswer = 0;
    additionAnswer = additionSubmissions.firstNumber += additionSubmissions.secondNumber
    additionAnswer = additionAnswers;
    // additionAnswers.push(additionAnswer)
    // console.log(additionAnswer);
    onCalcSubmit();
    // render();
};


function subtractOperator(evt){
    evt.preventDefault();
    console.log('in subtractOperator');

    let subtractSubmissions = {
        firstNumber: $('#firstNumInput').val(),
        secondNumber: $('#secondNumInput').val()
    };

    subtractSubmissions.firstNumber = Number(subtractSubmissions.firstNumber);
    subtractSubmissions.secondNumber = Number(subtractSubmissions.secondNumber);
    let subtractionAnswer = 0;
    subtractionAnswer = subtractSubmissions.firstNumber -= subtractSubmissions.secondNumber
    subtractionAnswers.push(subtractionAnswer);
    console.log(subtractionAnswer);
};


function multiplyOperator(evt){
    evt.preventDefault();
    console.log('in multiplyOperator');

    let multiplySubmissions = {
        firstNumber: $('#firstNumInput').val(),
        secondNumber: $('#secondNumInput').val()
    };

    multiplySubmissions.firstNumber = Number(multiplySubmissions.firstNumber);
    multiplySubmissions.secondNumber = Number(multiplySubmissions.secondNumber);
    let multiplyAnswer = 0;
    multiplyAnswer = multiplySubmissions.firstNumber * multiplySubmissions.secondNumber
    muliplicationAnswers.push(multiplyAnswer);
    console.log(multiplyAnswer);
};

function divisionOperator(evt){
    evt.preventDefault();
    console.log('in divisionOperator');

    let divisionSubmissions = {
        firstNumber: $('#firstNumInput').val(),
        secondNumber: $('#secondNumInput').val()
    };

    divisionSubmissions.firstNumber = Number(divisionSubmissions.firstNumber);
    divisionSubmissions.secondNumber = Number(divisionSubmissions.secondNumber);
    let divisionAnswer = 0;
    divisionAnswer = divisionSubmissions.firstNumber / divisionSubmissions.secondNumber
    divisionAnswers.push(divisionAnswer);
    console.log(divisionAnswer);
};



function onCalcSubmit(evt){
    evt.preventDefault();
    console.log('in onCalcSubmit');
    console.log(additionAnswers);

    additionAnswers.push(additionAnswer)
    console.log(additionAnswer);

    let calcSubmissions = {
        firstNumber: $('#firstNumInput').val(),
        secondNumber: $('#secondNumInput').val()
    };



//     ????????????????????/
//     allSubmissions.push(calcSubmissions);
//     console.log(allSubmissions);

//     $.ajax({
//         url: '/server-calc',
//         method: 'POST',
//         data: calcSubmissions
//     })

//     .then((response) => {
//         console.log('POST calc submissions');
//         loadCalcHistory();
//     })

//     .catch((err) =>{
//         console.log('POST calcSubmissions error');
//     })
//     additionOperator();
//     render();

}






function clearOperator(evt){
    evt.preventDefault();
    console.log('in clearOperator');
}

// function loadCalcHistory(){
//     console.log('in loadCalcHistory');

//     $.ajax({
//         url: '/server-calc',
//         method: 'GET'
//     })

//         .then((response) =>{
//             console.log('GET calcHistory');
//             pastCalculations = response;
//         })

//         .catch((err) =>{
//             console.log('GET calcHistory error')
//         })
    
//     render();
// }

function render(){
    console.log('in render');
    // $('#pastCalcs').empty();
    // for (let cal of pastCalculations){
    //     $('#pastCalcs').append(`
    //     <li>${cal.firstNumber}</li>`);
    // };
}