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

const noStars = document.querySelector("#noStars");
noStars.addEventListener("change", (evt)=>{
    const val = evt.target.value;
    const newVal = val.replace(/\*/g,"");
    evt.target.value = newVal;
});

/* -------------------- */
const multiplications = document.querySelector("#multiplications");

for(let mul=0;mul<11;mul++) {
    const h2 = document.createElement("h2");
    h2.innerText = `Table de ${mul}`;
    multiplications.appendChild(h2);
    
    const ul = document.createElement("ul");
    for(let i=0;i<11;i++) {
        const li = document.createElement("li");
        li.innerText = `${i}*${mul}=${mul*i}`;
        ul.appendChild(li);

        //console.log(`${i}*${mul}=${mul*i}`);
    }
    multiplications.appendChild(ul);
}

