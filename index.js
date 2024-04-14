document.addEventListener("DOMContentLoaded", function () {

    const generate = document.querySelector("#generateButton");
    generate.addEventListener("click", async () => {
        const dataPromise = fetchData("https://www.boredapi.com/api/activity/");
        dataPromise.then(data => {
            const activityElement = document.createElement("p");
            const generatedResults = document.querySelector("#generatedResponse-results")
            activityElement.textContent = `Activity: ${data.activity}, TYPE:${data.type} Participants  :${data.participants}, LINK :${data.link}`;
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
        const dataPromise = fetchData(`https://www.boredapi.com/api/activity?type=${typeValue}&participants=${participants}`);
        dataPromise.then((data) => {
            console.log(data);
            const results = document.querySelector("#find-activity");
            const resultsContainer = document.createElement("li");
            if (data.error&&data.error === "No activity found with the specified parameters") {
                resultsContainer.textContent =`PLEASE TRY WITH DIFFERENT VALUES`;
                results.appendChild(resultsContainer);
            } else {
               
                resultsContainer.textContent = `Activity :${data.activity} for ${participants} participants, LINK : ${data.link}`;
                results.appendChild(resultsContainer);
            }

        }).catch((error) => {
            console.error("error fetching data", error)
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
            console.log(data)
            return data;
        });
}

