let timerElement = document.getElementById("timer")
let defuserElement = document.getElementById("defuser")

let countdown = 10;
let intervalid = setInterval(function(){
    countdown = countdown -1;
    timerElement.textContent = countdown;
    if(countdown ===0){
        timerElement.textContent = "BOOM BYE BYE RIP";
        clearInterval(intervalid);
    }
}, 1000);


defuserElement.addEventListener("keydown",function(event){
    let bombDefuserText = defuserElement.value;
    if (event.key === "Enter" && bombDefuserText ==="Defuse" && countdown !== 0){
        timerElement.textContent = "You did it";
        clearInterval(intervalid);
    }
});
