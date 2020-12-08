const P1Input = document.querySelector("#P1");
const P2Input = document.querySelector("#P2");
const P1Score = document.querySelector("#P1Score");
const P2Score = document.querySelector("#P2Score");
const winScore = document.querySelector("#winScore")
const reset = document.querySelector("#reset")

if (P2Score.innerHTML == winScore.value) {
    console.log("win")
}

P1Input.addEventListener("click", function(e) {
    if (P1Score.innerHTML < winScore.value) {
        P1Score.innerHTML++ 
    }
    if (P1Score.innerHTML == winScore.value) {
        P1Score.style.color = "#00D1B2";
        P2Score.style.color = "#f14668";
        P1Input.disabled = true;
        P2Input.disabled = true;         
    } 
})

P2Input.addEventListener("click", function(e) {
    if (P2Score.innerHTML < winScore.value) {
        P2Score.innerHTML++ 
    }
    if (P2Score.innerHTML == winScore.value) {
        console.log("win")
        P2Score.style.color = "#00D1B2";
        P1Score.style.color = "#f14668";
        P1Input.disabled = true;
        P2Input.disabled = true;         
    }  
})

reset.addEventListener("click", function(e) {
    P1Score.innerHTML = "0";
    P2Score.innerHTML = "0";
    P1Input.disabled = false;
    P2Input.disabled = false;
    P2Score.style.color = "#363636";
    P1Score.style.color = "#363636"; 
})





