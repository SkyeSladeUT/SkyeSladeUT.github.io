let portaitImage = document.getElementById("myPicture");
let modalDiv = document.getElementById("modal");
let modalImage = document.getElementById("modal-image");
portaitImage.addEventListener("click", function(){
    modalDiv.style.display = "block";
})

let closeButton = document.getElementById("close");
closeButton.addEventListener("click", closeModal);
modalDiv.addEventListener("click", function(event){
        let clickInside = modalImage.contains(event.target);
        if(!clickInside){
            console.log("close modal");
            closeModal();
        }
})

function closeModal(){
    modalDiv.style.display = "none";
}
