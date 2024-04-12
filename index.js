document.addEventListener("DOMContentLoaded", function () {


})

//function to give dark mode class toogle 
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}



fetch("https://www.boredapi.com/api/activity")
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })