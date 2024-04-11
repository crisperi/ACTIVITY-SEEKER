
document.addEventListener("DOMContentLoaded",function(){
toggleDarkMode(light-mode);
})

//function to give dark mode class toogle 
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}
