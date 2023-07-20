let custList = [
{   
    Name: 'Avi Cohen',
    pin: 1234,
    amount: 3000,
},
{   
    Name: 'Layla Cohen',
    pin: 4444,
    amount: 20000,
},
{   
    Name: 'Tom Cohen',
    pin: 2020,
    amount: 10000,
}
]

//setting a random customer each page reload
let randomCust = Math.floor((Math.random()*3))
cust = custList[randomCust]

//number buttons array
const numButtons = Array.from(document.querySelectorAll('.numButtons'))
//main function buttons
const cancel = document.querySelector('.cancel')
const clear = document.querySelector('.clear')
const enter = document.querySelector('.enter')

//side function buttons
let opbut1 = document.getElementById('opbut1');
let opbut2 = document.getElementById('opbut2');
let opbut3 = document.getElementById('opbut3');
let opbut6 = document.getElementById('opbut6');

//options menu
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var option5 = document.getElementById('option5');
var option6 = document.getElementById('option6');


//main function
function welcome(){
    
    console.log(cust.Name, cust.pin)
    var image = document.getElementById('image')    
    card.style.animationName='example';

    //after card is inserted show customer name & input field
    content.innerHTML ='<form><h2>WELCOME,' + cust.Name + 
    '<br> AND ENTER YOUR PIN.</h2>' + 
    '<input id="number" type=number max="9999"></form>'
    keypad();
    //upon clicking 'enter' button check pin number
    enter.onclick = checkPin
    //upon clicking 'clear' button return to 'welcome' 
    clear.onclick = welcome
    //upon clicking 'cancel' reload page
    cancel.onclick = reload
};

// welcome()


//pressing the number buttons function
function keypad(){
    let button1 = document.querySelector('#button1');
    let button2 = document.querySelector('#button2');
    let button3 = document.querySelector('#button3');
    let button4 = document.querySelector('#button4');
    let button5 = document.querySelector('#button5');
    let button6 = document.querySelector('#button6');
    let button7 = document.querySelector('#button7');
    let button8 = document.querySelector('#button8');
    let button9 = document.querySelector('#button9');
    let button0 = document.querySelector('#button0');
    let buttondel = document.querySelector('#delete');
    let buttonspa = document.querySelector('#space');

    let keypad = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, buttondel, buttonspa];

    let number = document.querySelector('#number'); 

    keypad.forEach(function (key,idx) {
        key.addEventListener('click', function(){
            console.log(Number(keypad[idx].value)); 
            number.value += Number(keypad[idx].value);
        });
    });

};

//check pin function
function checkPin() {
    console.log(number.value)
    if (Number(number.value) !==Number(cust.pin)) {
        content.innerHTML = '<h2>INVALID PIN. PLEASE TRY AGAIN.</h2>';
    } else {
        menuPage()
    }
}

//menu page after correct pin was entered

function menuPage() {
    //header
    content.innerHTML = '<h2>ATM MENU</h2>'
    //menu options text
    option1.textContent = 'Press D to Deposit Money'
    option2.textContent = 'Press W to Withdraw Money'
    option3.textContent = 'Press C to Check Balance'
    option4.textContent = '   '
    option5.textContent = '   '
    option6.textContent = 'Press Q to Exit'
    //menu button click
    opbut1.onclick = deposit
    opbut2.onclick = withdraw
    opbut3.onclick = checkBalance
    opbut6.onclick = quit

}

//reload page function
function reload() {
    location.reload();
}

//Deposite function
function deposit() {
    content.innerHTML = '<form><h2>YOUR BALANCE IS ' + cust.amount + 
    ' NIS<br> How much would you like do Deposite?</h2>'+
    '<input id="number" type=number max="9999"></form>'
    keypad();
    //clearing the previous options
    option1.textContent = ''
    option2.textContent = ''
    option3.textContent = ''
    option4.textContent = ''
    option5.textContent = ''
    option6.textContent = ''

    enter.onclick = function(){

        if (number.value == 0) {
            content.innerHTML = '<h2>Please use 20, 50 or 100 bills only</h2>'
            setTimeout(deposit,2200)
        } else if (number.value % 20 !== 0 && number.value % 50 !== 0 && number.value % 100 !== 0) {
            content.innerHTML = '<h2>Please use 20, 50 or 100 bills only</h2>'
            setTimeout(deposit,2200)
        }
        else {
            //adding the input amount to our existing amount
        let newAmount = Number(cust.amount) + Number(number.value)
        cust.amount = newAmount
        content.innerHTML = '<h2>YOUR NEW BALANCE IS ' + 
        Number(cust.amount).toFixed(2) + ' NIS</h2>'
        setTimeout(menuPage,2200)
        }

        
}}

//withdraw function
function withdraw() {
    content.innerHTML = '<form><h2>YOUR BALANCE IS ' + cust.amount + 
    ' NIS<br> How much would you like do Withdraw?</h2>'+
    '</form>'
    
    //clearing the previous options
    option1.textContent = '50'
    option2.textContent = '100'
    option3.textContent = '150'
    option4.textContent = '300'
    option5.textContent = 'Other'
    option6.textContent = ''

    option1.onclick = wd50
    option2.onclick = wd100
    option3.onclick = wd150
    option4.onclick = wd300
    option5.onclick = other

    function wd50() {
        let min50 = Number(cust.amount) - 50
        
        if (cust.amount < 50) {
            content.innerHTML = '<h2>You dont have enough Money'
            setTimeout(withdraw,2200)
        } else{
            cust.amount = min50
            content.innerHTML = '<h2>YOUR NEW BALANCE IS ' + 
            Number(cust.amount).toFixed(2) + ' NIS</h2>'
            setTimeout(menuPage,2200)
    } }
    function wd100() {
        let min100 = Number(cust.amount) - 100
        
        if (cust.amount < 100) {
            content.innerHTML = '<h2>You dont have enough Money'
            setTimeout(withdraw,2200)
        } else{
            cust.amount = min100
            content.innerHTML = '<h2>YOUR NEW BALANCE IS ' + 
            Number(cust.amount).toFixed(2) + ' NIS</h2>'
            setTimeout(menuPage,2200)
    } }
    function wd150() {
        let min150 = Number(cust.amount) - 150
        
        if (cust.amount < 150) {
            content.innerHTML = '<h2>You dont have enough Money'
            setTimeout(withdraw,2200)
        } else{
            cust.amount = min150
            content.innerHTML = '<h2>YOUR NEW BALANCE IS ' + 
            Number(cust.amount).toFixed(2) + ' NIS </h2>'
            setTimeout(menuPage,2200)
    } }
    function wd300() {
        let min300 = Number(cust.amount) - 300
        
        if (cust.amount < 300) {
            content.innerHTML = '<h2>You dont have enough Money'
            setTimeout(withdraw,2200)
        } else{
            cust.amount = min300
            content.innerHTML = '<h2>YOUR NEW BALANCE IS ' + 
            Number(cust.amount).toFixed(2) + ' NIS </h2>'
            setTimeout(menuPage,2200)
    } }
    function other() {
        content.innerHTML = '<form><h2>YOUR BALANCE IS ' + cust.amount + 
    'NIS <br> How much would you like do Withdraw?</h2>'+
    '<input id="number" type=number max="9999"></form>'
    keypad();
         enter.onclick = function(){
        //if customer doesnt have enough money
        //let him know and back to withdraw function
        if (cust.amount < number.value) {
            content.innerHTML = '<h2>You dont have enough Money'
            setTimeout(withdraw,2200)
        } else {
            //if customer has enough money proceed with withdraw
        //and show new amount, after done go back to main menu
        let newAmount = Number(cust.amount) - Number(number.value)
        cust.amount = newAmount
        content.innerHTML = '<h2>YOUR NEW BALANCE IS ' + 
        Number(cust.amount).toFixed(2) + ' NIS </h2>'
        setTimeout(menuPage,2200)
    } }
        }
        

}

//check balance function
function checkBalance() {
    content.innerHTML = '<h2><h2>YOUR BALANCE IS ' + cust.amount + ' NIS </h2>'
    
    //clearing the previous options
    option1.textContent = ''
    option2.textContent = ''
    option3.textContent = ''
    option4.textContent = ''
    option5.textContent = ''
    option6.textContent = ''
    setTimeout(menuPage,2200)
}

//quit function
function quit() {
    content.innerHTML = '<h2>GOODBYE, HAVE A NICE DAY</h2>'
    option1.textContent = ''
    option2.textContent = ''
    option3.textContent = ''
    option4.textContent = ''
    option5.textContent = ''
    option6.textContent = ''
    setTimeout(reload,2200)
}
