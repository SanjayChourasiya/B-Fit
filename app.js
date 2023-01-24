const menuIcon = document.querySelector(".toggle");
const mobileMenu = document.querySelector(".navMenu");

menuIcon.onclick = function(){
    if(mobileMenu.style.display != "block"){
        mobileMenu.style.display = "block";
        menuIcon.classList.replace("uil-bars", "uil-multiply")
    }
    else{
        mobileMenu.style.display = "none";
        menuIcon.classList.replace("uil-multiply", "uil-bars")
    }
}