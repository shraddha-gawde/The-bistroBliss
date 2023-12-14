let vishnu_page1_mainContainer = document.getElementById(
  "vishnu_page1_mainContainer"
);

async function fetchGrids() {
  try {
    let res = await fetch(
      `https://neural-innovator-5123.onrender.com/roomDetails?_limit=4`
    );
    let data = await res.json();
    if (res.ok) {
      console.log(data);
      displayGrids(data);
    }
  } catch (error) {
    console.log(`${error} error found`);
  }
}

fetchGrids();

let Vishnu_Video_page = document.getElementsByClassName("Vishnu_Video_page");

let playButton = document.getElementById("playButton");
let palyLink = document.getElementById("playLink");
let Video_div = document.getElementsByClassName("Video_div");
let gridVideo = document.getElementsByClassName("gridVideo");
let videoImage = document.getElementById("videoImage");

playButton.addEventListener("click", (e) => {
  playButton.style.display = "none";

  videoImage.style.display = "none";
  let newIframe = document.createElement("iframe");
  newIframe.className = "gridVideo";
  newIframe.width = "100%";
  newIframe.height = "100%";
  newIframe.src = "https://www.youtube.com/embed/rXcp6s0VjZk";
  newIframe.allowFullscreen = true;
  let videoDiv = document.querySelector(".Video_div");
  videoDiv.appendChild(newIframe);
});

let vishnu_page1_mainContainer_div_3 = document.getElementsByClassName(
  "vishnu_page1_mainContainer_div_3"
)[0];
function displayGrids(data) {
  data.forEach((item) => {
    let singleGrid = document.createElement("div");
    singleGrid.className = "singleGrid";
    singleGrid.style.backgroundImage = `url(${item.image})`;
    singleGrid.style.backgroundSize = "cover";
    console.log(item.image);
    singleGrid.style.backgroundPosition = "center";

    let gridTitle = document.createElement("h3");
    gridTitle.className = "gridTitle";
    gridTitle.textContent = item.type;
    let gridText = document.createElement("p");
    gridText.className = "gridText";
    gridText.textContent = item.description;
    let gridButton = document.createElement("button");
    gridButton.className = "gridButton";
    gridButton.textContent = "DETAILS";
    let gridPrice = document.createElement("h4");
    gridPrice.className = "gridPrice";
    gridPrice.textContent = `$${item.price}`;
    let perNight = document.createElement("span");
    perNight.className = "perNight";
    perNight.innerText = "Per Night";

    singleGrid.addEventListener("hover", () => {
      singleGrid.gridText.style.display = "block";
      singleGrid.querySelector(".grid-price").style.display = "block";
    });

    singleGrid.append(gridTitle, gridText, gridButton, gridPrice, perNight);
    vishnu_page1_mainContainer_div_3.appendChild(singleGrid);
  });
}

vishnu_page1_mainContainer.appendChild(vishnu_page1_mainContainer_div_3);
