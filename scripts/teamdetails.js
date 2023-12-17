let teamurl="https://neural-innovator-5123.onrender.com/TeamDetails";

var mainteamdiv=document.getElementById("main-container-team");

async function fetchData(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        createCard(data);
    } catch (error) {
        console.error(error);
    }
}
fetchData(teamurl);

// maincard
function createCard(data) {
    let singlecard = document.createElement("div");
    singlecard.className = "single-card";

    let imagediv = document.createElement("div");
    imagediv.className = "image-div";

    let imageteam = document.createElement("img");
    imageteam.src = data.image;
    imagediv.appendChild(imageteam);

    singlecard.appendChild(imagediv);

    // cardbody
    let cardbody = document.createElement("div");
    cardbody.className = "card-body";

    let name = document.createElement("h3");
    name.innerText = data.Name;
    name.className = "member-name";
    cardbody.appendChild(name);

    let role = document.createElement("h4");
    role.className = "developer";
    role.innerText = data.Role;
    cardbody.appendChild(role);

    let details = document.createElement("p");
    details.className = "details-people";
    details.innerText = data.Strength;
    cardbody.appendChild(details);

    // logopart
    let logoDiv = document.createElement("div");
    logoDiv.className = "logo-div";

    let anchor1 = document.createElement("a");
    anchor1.className = "anchor1-linkdin";
    anchor1.href = data.linkdin;

    let linkdinimage = document.createElement("img");
    linkdinimage.src = data.logolinkedin;
    anchor1.appendChild(linkdinimage);

    let gitimage = document.createElement("img");
    gitimage.src = data.logogit;

    let instaimage = document.createElement("img");
    instaimage.src = data.logoinsta;

    logoDiv.appendChild(anchor1);
    logoDiv.appendChild(instaimage);
    logoDiv.appendChild(gitimage);

    // Append cardbody and logopart to singlecard
    singlecard.appendChild(cardbody);
    singlecard.appendChild(logoDiv);

    // Append singlecard to allcard
    allcard.appendChild(singlecard);

    // Append allcard to the main container
    mainteamdiv.appendChild(allcard);
}
