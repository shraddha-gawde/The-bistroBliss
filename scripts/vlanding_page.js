let mainpagegrid = [
  {
    name: "Royal Suit",
    image: "Sources/Images/gridImages/one.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    price: 220,
  },
  {
    name: "Deluxe Suit",
    image: "Sources/Images/gridImages/two.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    price: 150,
  },
  {
    name: "Single Room",
    image: "Sources/Images/gridImages/three.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    price: 120,
  },
  {
    name: "Double Room",
    image: "Sources/Images/gridImages/four.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    price: 100,
  },
];

let vishnu_page1_mainContainer = document.getElementById(
  "vishnu_page1_mainContainer"
);

let Vishnu_Video_page = document.getElementsByClassName("Vishnu_Video_page");

let playButton = document.getElementById("playButton");
let palyLink = document.getElementById("playLink");

playButton.addEventListener("click", (e) => {
  window.location.href = palyLink.getAttribute("href");
});

let vishnu_page1_mainContainer_div_3 = document.getElementsByClassName(
  "vishnu_page1_mainContainer_div_3"
)[0];
mainpagegrid.forEach((item) => {
  let singleGrid = document.createElement("div");
  singleGrid.className = "singleGrid";
  singleGrid.style.backgroundImage = `url(${item.image})`;
  singleGrid.style.backgroundSize = "cover";
  console.log(item.image);
  singleGrid.style.backgroundPosition = "center";

  let gridTitle = document.createElement("h3");
  gridTitle.className = "gridTitle";
  gridTitle.textContent = item.name;
  let gridText = document.createElement("p");
  gridText.className = "gridText";
  gridText.textContent = item.text;
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

vishnu_page1_mainContainer.appendChild(vishnu_page1_mainContainer_div_3);

// singleGrid.innerHTML = `
//   <h3>${item.name}</h3>
//   <p>${item.text}</p>
//   <h4>$${item.price}</h4>
// `;
