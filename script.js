const modalOpenBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");

modalOpenBtn.onclick = function(){
    if(modal.style.display == "none"){
        modal.style.display = "block";
    }
    else{
        modal.style.display = "none";
    }
};