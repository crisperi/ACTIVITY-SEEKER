document.addEventListener("DOMContentLoaded", function () {

    const generate = document.querySelector("#generateButton");
    generate.addEventListener("click", async () => {
        const dataPromise = fetchData("https://www.boredapi.com/api/activity/");
        dataPromise.then(data => {
            const activityElement = document.createElement("p");
            const generatedResults = document.querySelector("#generatedResponse-results")
            activityElement.textContent = `Activity: ${data.activity} Participants  :${data.participants}`;
            generatedResults.appendChild(activityElement);
        }
        )
    })

    const form = document.querySelector("#activityFilter");
    form.addEventListener("submit",(e)=>{
e.preventDefault();

    })
});
//function to give dark mode class toogle
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

function fetchData(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });
}

