//const btn = document.getElementById("btn-rand");
const btn = document.querySelector("#btn-rand");
const stranger = document.getElementById("stranger");

btn.addEventListener("click", ()=>{
    stranger.innerHTML = "To<span class='blue'>to</span>";
} );

const toto = document.querySelector("#toto");
toto.innerText = "?";

if(stranger.innerText === "world") {
    toto.innerText = "monde";
} else {
    toto.innerText = "Je ne sais pas";
}

//toto.innerText = stranger.innerText === "world" ?"monde":"Je ne sais pas";

// function toto() {};
// const toto = () => {};