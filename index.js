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
    form.addEventListener("submit", async (e) => {
        //prevent default behaviour 
        e.preventDefault();

        const participants = document.querySelector("#participants").value;
        const typeValue = document.querySelector("#type").value;
        console.log(participants, typeValue)
        const dataPromise = fetchData(`https://www.boredapi.com/api/activity?type=${typeValue}&participants=${participants}`)
        dataPromise.then((data) => {
            console.log(data)
        })
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
            
            return data;
        });
}

