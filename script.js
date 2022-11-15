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


//INSIDE THE MODAL
const menuToggle = document.querySelector("#menuToggle");
const recipeToggle = document.querySelector("#recipesToggle");


menuToggle.onclick = function(){
    recipe.style.display = "none";
    menu.style.display = "block";
};

recipeToggle.onclick = function(){
    recipe.style.display = "block";
    menu.style.display = "none";
};




