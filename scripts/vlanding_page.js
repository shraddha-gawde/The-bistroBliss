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

videoImage.addEventListener("click", (e) => {
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

    gridButton.addEventListener("click", (e) =>{
      e.preventDefault();
      window.location.href = "roomdetails.html";
    })
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
    // <<<<<<< fw28_140_day3

    singleGrid.append(gridTitle, gridText, gridButton, gridPrice, perNight);
    vishnu_page1_mainContainer_div_3.appendChild(singleGrid);
  });
}
console.log("vishnurajkr");

// ========================= div 5 start=============================================

let page1_div5 = document.getElementsByClassName(
  "vishnu_page1_mainContainer_div_5"
)[0];
let page1_div5_grid1 = document.createElement("div");
page1_div5_grid1.className = "vishnu_page1_mainContainer_div_5_grid1";
let page1_div5_grid2 = document.createElement("div");
page1_div5_grid2.className = "vishnu_page1_mainContainer_div_5_grid2";

async function HorizontalGrids() {
  try {
    let res = await fetch(
      `https://neural-innovator-5123.onrender.com/horizontalGridsData`
    );
    let data = await res.json();
    if (res.ok) {
      displayHorizontalGrids(data);
    }
  } catch (error) {
    console.log(error);
  }
}

HorizontalGrids();

function displayHorizontalGrids(data) {
  data.forEach((item) => {
    let single_hrgrid = document.createElement("div");
    single_hrgrid.className =
      "vishnu_page1_mainContainer_div_5_grid1_horizontalgrids";
    let hrgrid_image = document.createElement("img");
    hrgrid_image.className =
      "vishnu_page1_mainContainer_div_5_grid1_horizontalgrids_image";
    let single_hrgrid_text = document.createElement("div");
    single_hrgrid_text.className =
      "vishnu_page1_mainContainer_div_5_grid1_horizontalgrids_text";
    let hrgrid_title = document.createElement("h3");
    let hrgrid_desc = document.createElement("p");

    hrgrid_image.src = item.image;
    hrgrid_title.textContent = item.name;
    hrgrid_desc.textContent = item.description;
    single_hrgrid_text.append(hrgrid_title, hrgrid_desc);
    single_hrgrid.append(hrgrid_image, single_hrgrid_text);
    page1_div5_grid1.append(single_hrgrid);
  });
}

page1_div5.append(page1_div5_grid1, page1_div5_grid2);
// ===========================div 5 end ==========================================
// ========================= div 6 timer start=============================================

let timerdiv = document.getElementsByClassName(
  "vishnu_page1_mainContainer_div_6"
)[0];
let timer1 = document.getElementById("timer1");
let t1 = 1;

let timer1_delay = setInterval(() => {
  timer1.innerText = t1;
  t1++;
}, 65);
setTimeout(() => {
  clearInterval(timer1_delay);
}, 7500);
let t2 = 1;
let timer2 = document.getElementById("timer2");

let timer2_delay = setInterval(() => {
  timer2.innerText = t2;
  t2++;
}, 40);
setTimeout(() => {
  clearInterval(timer2_delay);
}, 7500);
let t3 = 1;
let timer3 = document.getElementById("timer3");

let timer3_delay = setInterval(() => {
  timer3.innerText = t3;
  t3++;
}, 20);
setTimeout(() => {
  clearInterval(timer3_delay);
}, 7500);
let t4 = 1;
let timer4 = document.getElementById("timer4");

let timer4_delay = setInterval(() => {
  timer4.innerText = t4;
  t4++;
}, 10);
setTimeout(() => {
  clearInterval(timer4_delay);
}, 7500);
// ===========================div 6 timer end ==========================================

// =========================== div 8 developers start =================================

let developers = document.querySelector(".vishnu_page1_mainContainer_div_8");

async function DisplaydevGirds() {
  try {
    let res = await fetch(
      `https://neural-innovator-5123.onrender.com/developersData`
    );
    let data = await res.json();
    if (res.ok) {
      DevelopersDataDisplay(data);
    }
  } catch (error) {
    console / log(error);
  }
}

DisplaydevGirds();

function DevelopersDataDisplay(data) {
  data.forEach((item) => {
    let singlegrid = document.createElement("div");
    singlegrid.className = "developersgrid";
    console.log(item.image);
    singlegrid.style.backgroundImage = `url(${item.image})`;
    let devKey = true;
    singlegrid.addEventListener("mouseenter", (e) => {
      if (devKey) {
        let devDataBox = document.createElement("div");
        devDataBox.className = "devDataBox";

        let devName = document.createElement("h1");
        devName.className = "devName";
        let devRole = document.createElement("p");
        devRole.className = "devRole";
        let devAbout = document.createElement("p");
        devAbout.className = "devAbout";
        let devSocial = document.createElement("div");
        devSocial.className = "devSocial";

        let devFacebook = document.createElement("button");
        devFacebook.className = "fa fa-facebook developers";
        let devFbAnchor = document.createElement("a");
        devFbAnchor.setAttribute("href", "https://www.facebook.com/");

        let devTwitter = document.createElement("button");
        devTwitter.className = "fa fa-twitter developers ";
        let devTwitterAnchor = document.createElement("a");
        devTwitterAnchor.setAttribute("href", "https://twitter.com/");

        let devPinterest = document.createElement("button");
        devPinterest.className = "fa fa-pinterest developers";
        let devPinterestAnchor = document.createElement("a");
        devPinterestAnchor.setAttribute("href", "https://in.pinterest.com/");

        devName.innerText = item.name;
        devRole.textContent = item.role;
        devAbout.textContent = item.about;

        devFbAnchor.appendChild(devFacebook);
        devTwitterAnchor.appendChild(devTwitter);
        devPinterestAnchor.appendChild(devPinterest);

        devSocial.append(devFbAnchor, devTwitterAnchor, devPinterestAnchor);
        devDataBox.append(devName, devRole, devAbout, devSocial);

        singlegrid.append(devDataBox);
        devKey = false;
      }
    });

    developers.append(singlegrid);
  });
}

// =========================== div 8 developers end ===================================
// =========================== div 9 developers start =================================

// =========================== div 9 developers end =================================
// =======

//     singleGrid.append(gridTitle, gridText, gridButton, gridPrice, perNight);
//     vishnu_page1_mainContainer_div_3.appendChild(singleGrid);
//   });
// }

// >>>>>>> main
vishnu_page1_mainContainer.appendChild(vishnu_page1_mainContainer_div_3);
