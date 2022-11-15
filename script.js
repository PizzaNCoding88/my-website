const modal = document.querySelector(".modal-1")
const overlay = document.querySelector(".overlay")
const menuModalToggle = document.querySelector("#open-modal")
const recipeModalToggle = document.querySelector("#open-modal1")
const menuModal = document.querySelector("#menuToggle")
const recipeModal = document.querySelector("#recipesToggle")
const recipeSideMenu = document.querySelector(".recipe")
const menuSideMenu = document.querySelector(".menu")


menuModalToggle.addEventListener("click" , openModal);
recipeModalToggle.addEventListener("click" , openModalRecipe);
overlay.addEventListener("click", closeModal);

function openModalRecipe(){
    if(overlay.classList.contains("active")){
        overlay.classList.remove("active");
        modal.classList.remove("active");
    }else{
        overlay.classList.add("active");
        modal.classList.add("active");
        recipeSideMenu.style.display = "block";
        menuSideMenu.style.display = "none";
    
    }
}

function openModal(){
    if(overlay.classList.contains("active")){
        overlay.classList.remove("active");
        modal.classList.remove("active");
    }else{
        overlay.classList.add("active");
        modal.classList.add("active");
        recipeSideMenu.style.display = "none";
        menuSideMenu.style.display = "block";
        
    }
}

function closeModal(){
    overlay.classList.remove("active");
    modal.classList.remove("active");
}



// menuToggle.onclick = function(){
//     overlay.classList.add("active");
//     modal.classList.add("active");
//     recipe.style.display = "none";
//     menu.style.display = "block";
// };

// recipeToggle.onclick = function(){
//     recipe.style.display = "block";
//     menu.style.display = "none";
// };






// modalOpenBtn.onclick = function(){
//     if(modal.classList.contains("modalOpen")){
//         modal.classList.remove("modalOpen");
//         modal.classList.add("modalClose");
//         modalContent.classList.add("modalContentClose");
//         modalContent.classList.remove("modalContentOpen");
//         recipe.style.display = "none";
//         menu.style.display = "none";
//         topMenu.style.display = "none";
//     }else{
//         modal.classList.add("modalOpen");
//         modal.classList.remove("modalClose");
//         modalContent.classList.remove("modalContentClose");
//         modalContent.classList.add("modalContentOpen");
//         modalContent.style.display = "block";
//         recipe.style.display = "none";
//         menu.style.display = "block";
//         topMenu.style.display = "flex";
//         // modalContent.style.visibility = "visible" ;
//     }
// };

// modalOpenBtn1.onclick = function(){
//     if(modal.classList.contains("modalOpen")){
//         modal.classList.remove("modalOpen");
//         modal.classList.add("modalClose");
        
//     }else{
//         modal.classList.add("modalOpen");
//         modal.classList.remove("modalClose");
//         recipe.style.display = "block";
//         menu.style.display = "none";
        
//     }
// };

