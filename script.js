console.log("hi");

function createpokemancard(details){
let card=document.createElement("div");
card.classList.add(card);
card.innerHTML=`
   
<div class="card-inner">
<div class="card-front"> 
<div class="id">${details.id}</div> 
<img src="${details.sprites.front_default}"/>
<div class="name">${details.name}</div>
<div class="name-type">${details.types[0].type.name}
</div>

</div>
`
}

async function fetchpokeman(i){
    let respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let data= await respone.json();
    // console.log(data);
    return data;
}
async function mainpokemon(){
    for(let i=1;i<=151;i++){
        let pokeman=await fetchpokeman(i);
        console.log(pokeman);
        let card=createpokemancard(pokeman);
    }
}
mainpokemon();

let main=document.getElementById("mainId");
// main.innerHTML