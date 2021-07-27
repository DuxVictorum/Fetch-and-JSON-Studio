window.addEventListener("load", event => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(response => {
        response.json().then(json => {
            json.sort( (a,b) => {return b.hoursInSpace - a.hoursInSpace});
            console.log(json);
            const con = document.getElementById("container");
            
            for (let i = 0; i < json.length; i++) {
                con.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>`
                }
            
            const actives = document.querySelectorAll("li");
            for (bits of actives) {
                if (bits.innerText === "Active: true") {
                    bits.setAttribute("style", "color: green");
                };
            };

            document.getElementById("astroCount").innerText += json.length;
        })
    })
})
