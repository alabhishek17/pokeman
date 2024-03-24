let main=document.getElementById("mainId");
let input=document.getElementById("input");
let filterBtn=document.getElementById("btnfilter");
// console.log("hi");


let colors={
    normal:"#a4acaf",
    poison:"#bbb",
    ground:"#f7de3f",
    rock:"#a38c21",
    grass:"#9bcc50",
    bug:"#729f3f",
    fire:"#fd7d24",
    water:"#4592c4",
    ice:"#51c4e7",
    eletric:"#eed535",
    psychic:"#f366b9",
    fairy:"#fdb9e9",
    ghost:"#7b62a3",
    Fighting:"#d56723"
}



function createpokemancard(details){
let card=document.createElement("div");
card.classList.add("card");
card.innerHTML=`
   
<div class="card-inner">

<div class="card-front"> 
<div class="id">"${details.id}"</div> 
<img src="${details.sprites.front_default}"/>
<div class="name">${details.name}</div>
<div class="name-type">${details.types[0].type.name}</div>
</div>

<div class="card-back">

<img src="${details.sprites.back_default}"/>
<div class"name">${details.name}</div>
<div class="ability">${details.abilities[0].ability.name}</div>

</div>
</div>
`

// coloring
card.querySelector(".card-inner").style.backgroundColor=colors[details.types[0].type.name];



return card;
// main.append(card);

}

// search input 
input.addEventListener('input',()=>{
    let allcard=document.querySelectorAll(".card");

    //convert allcards in to array
    let pokeArray=Array.from(allcard);
    pokeArray.forEach((element)=>{
        let pokemonName=element.children[0].children[0].children[2].innerText;
      
        if(pokemonName.startsWith(input.value)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    
    })
})

// filter button
filterBtn.addEventListener("click",()=>{
    let allcard=document.querySelectorAll(".card");
    
    let pokeArray=Array.from(allcard);
    pokeArray.forEach((element)=>{
        let pokemonType=element.children[0].children[0].children[3].innerText;
           
        if(pokemonType===type.value){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    })
})



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
   
        main.append(card);
    }
}
mainpokemon();


// main.innerHTML