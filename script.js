const modalOpenBtn = document.getElementById("open-modal");
const modalOpenBtn1 = document.getElementById("open-modal1");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");

const sms = document.querySelectorAll(".sms");
const pizzaArt = document.querySelectorAll(".pizza-art");
const picContainer = document.querySelector(".pic-container");

// for(let i=0 ; i<sms.length; i++){
//     sms[i].addEventListener("click", function(){
//         pizzaArt[i].classList.toggle("hidden");
//         picContainer.style.backgroundImage =`url('images/background${i}.jpeg')`;
//         if(picContainer.classList.contains("hidden")){
//             picContainer.classList.remove("hidden");
//         }
//         else{
//             picContainer.classList.add("hidden");
//         }
//         for(let j=0; j<pizzaArt.length; j++){
//             if(j!=i){
//                 pizzaArt[j].classList.add("hidden");
//             }
//         }
//     });
// };


const menuToggle = document.getElementById("menuToggle");
const recipeToggle = document.getElementById("recipesToggle");

const menu = document.getElementById("menu");
const recipe = document.getElementById("recipe");
const topMenu = document.querySelector(".top-menu");

modalOpenBtn.onclick = function(){
    if(modal.classList.contains("modalOpen")){
        modal.classList.remove("modalOpen");
        modal.classList.add("modalClose");
        modalContent.classList.add("modalContentClose");
        modalContent.classList.remove("modalContentOpen");
        recipe.style.display = "none";
        menu.style.display = "none";
        topMenu.style.display = "none";
    }else{
        modal.classList.add("modalOpen");
        modal.classList.remove("modalClose");
        modalContent.classList.remove("modalContentClose");
        modalContent.classList.add("modalContentOpen");
        modalContent.style.display = "block";
        recipe.style.display = "none";
        menu.style.display = "block";
        topMenu.style.display = "flex";
        // modalContent.style.visibility = "visible" ;
    }
};

modalOpenBtn1.onclick = function(){
    if(modal.classList.contains("modalOpen")){
        modal.classList.remove("modalOpen");
        modal.classList.add("modalClose");
        
    }else{
        modal.classList.add("modalOpen");
        modal.classList.remove("modalClose");
        recipe.style.display = "block";
        menu.style.display = "none";
        
    }
};

menuToggle.onclick = function(){
    recipe.style.display = "none";
    menu.style.display = "block";
};

recipeToggle.onclick = function(){
    recipe.style.display = "block";
    menu.style.display = "none";
};









//OLD MODAL OPENING SYSTEM
// modalOpenBtn.onclick = function(){
//     if(modal.style.display == "none"){
//         modal.style.display = "block";
//         recipe.style.display = "none";
//         menu.style.display = "block";
//     }
//     else{
//         modal.style.display = "none";
//     }
// };

// modalOpenBtn1.onclick = function(){
//     if(modal.style.display == "none"){
//         modal.style.display = "block";
//         recipe.style.display = "block";
//         menu.style.display = "none";
//     }
//     else{
//         modal.style.display = "none";
//     }
// };
