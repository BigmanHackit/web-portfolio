// Login/Signup controller

const logIn = document.querySelector('.login')

logIn.addEventListener('click', function(e){
    document.querySelector('.bod').classList.add('off');
    document.querySelector('.bet').classList.add('off');
    document.querySelector('.sign-up').classList.remove('off');
})

//Payment controller

const deposit = document.querySelector('#depositBtn');
const withdraw = document.querySelector('#withdrawBtn');

deposit.addEventListener('click', function (e) {
    document.querySelector(".bottom-col").classList.add('off');
    document.querySelector(".pay").classList.remove('off');
    $(".top-col").css("height", "100vh");
});

withdraw.addEventListener('click', function (e) {
    document.querySelector(".bottom-col").classList.add('off');
    document.querySelector(".pay").classList.remove('off');
    $(".top-col").css("height", "100vh");
});

const amount = document.querySelector("#amount");
const addMoney = document.querySelector("#deposit");
const takeMoney = document.querySelector("#withdraw");
const funds = document.querySelector("#cashAmount");
const close = document.querySelector("#cancelButton");

addMoney.addEventListener("click", () => {
    funds.innerHTML = ""
    funds.innerHTML += amount.value
});

takeMoney.addEventListener("click", () => {
    funds.innerHTML -= amount.value
});

close.addEventListener("click", () => {
    document.querySelector(".pay").classList.add("off");
    document.querySelector(".bottom-col").classList.remove('off');
    $(".top-col").css("height", "60%");
});   

// Bet Placement
 const joinBet = document.querySelector("#joinBetBtn"); 
 
 joinBet.addEventListener("click", (e) => {
    document.querySelector(".bod").classList.add('off');
    document.querySelector(".sign-up").classList.add('off');
    document.querySelector(".pay").classList.add('off');
    document.querySelector(".bet").classList.remove('off');
    document.querySelector(".bottom-col").classList.remove('off');
 });


 // Bet Control

 const openBet = document.querySelector(".place-bet");
 const stake = document.querySelector("#stake");
 const fiveHundred = document.querySelector(".five-hundred");
 const oneThousand = document.querySelector(".one-thousand");
 const fiveThousand = document.querySelector(".five-thousand");
 const nineThousand = document.querySelector(".nine-thousand");
 const play = document.querySelector("#betSubmitBtn");
 const cancel = document.querySelector(".fa-times");

 fiveHundred.value = 500;
 oneThousand.value = 1000;
 fiveThousand.value = 5000;
 nineThousand.value = 9000;

 openBet.addEventListener("click", (e) => {
    document.querySelector(".bet-form").classList.add("active");
    document.querySelector(".bet-form").classList.remove("off");
 });

 play.addEventListener("click", (e) => {
    funds.innerHTML -= stake.value;
    document.querySelector(".bet-form").classList.add("off");
    stake.value = 0;
 });

 fiveHundred.addEventListener("click", (e) => {
    stake.value = fiveHundred.value;
 });

 oneThousand.addEventListener("click", (e) => {
    stake.value = oneThousand.value;
 });

 fiveThousand.addEventListener("click", (e) => {
    stake.value = fiveThousand.value;
 });

 nineThousand.addEventListener("click", (e) => {
    stake.value = nineThousand.value;
 });

 cancel.addEventListener("click", (e) => {
    document.querySelector(".bet-form").classList.add("off");
 });