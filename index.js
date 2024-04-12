document.addEventListener("DOMContentLoaded", function () {


})

//function to give dark mode class toogle 
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}





function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}
fetchData("https://www.boredapi.com/api/activity")
.then(()=>{
    
})