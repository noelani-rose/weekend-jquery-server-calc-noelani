$(document).ready(onReady);

function onReady(){
    console.log("packages locked and loaded")
    $('.submitBtn').on('click', onCalcSubmit);
}

function onCalcSubmit(evt){
    evt.preventDefault();
    console.log('in onCalcSubmit');

    let calcSubmissions = {
        firstNumber: $('#firstNumInput'),
        secondNumber: $('#secondNumberInput')
    };

    console.log(calcSubmissions);

    $.ajax({
        url: '/server-calc',
        method: 'POST',
        data: calcSubmissions
    })

    .then((response) => {
        console.log('POST calc submissions');
        loadCalcHistory();
    })




}