let Vishnu_location_div3 = document.querySelector(".Vishnu_location_div3");

async function FetchAllRooms(page) {
  try {
    let res = await fetch(
      `https://neural-innovator-5123.onrender.com/activities?_limit=9&_page=${page}`
    );
    let data = await res.json();
    if (res.ok) {
      let Xtotal = res.headers.get("X-Total-Count");
      let xTotalButtons = Math.ceil(Xtotal / 9);
      renderPaginationButtons(xTotalButtons);
      console.log(data);
      DisplayRooms(data);
    }
  } catch (error) {
    console.log(error);
  }
}
FetchAllRooms(`1`);
function DisplayRooms(data) {
  Vishnu_location_div3.innerHTML = "";
  data.forEach((item) => {
    let singleRoomGrid = document.createElement("div");
    singleRoomGrid.className = "singleRoomGrid";

    let singleRoomGrid_Image = document.createElement("img");
    singleRoomGrid_Image.className = "singleRoomGridImage";

    let singleRoomGrid_textdiv = document.createElement("div");
    singleRoomGrid_textdiv.className = "singleRoomGridTextDiv";
    let singleRoomGrid_title = document.createElement("h2");
    singleRoomGrid_title.className = "singleRoomGridTitle";
    let LocationAndDistance = document.createElement("div");
    LocationAndDistance.className = "LocationAndDistance";
    let singleRoomGridLocation = document.createElement("p");
    singleRoomGridLocation.className = "singleRoomGridLocation";
    let singleRoomGridDist = document.createElement("span");
    singleRoomGridDist.className = "singleRoomGridDistance";

    singleRoomGrid_Image.src = item.image;
    singleRoomGrid_title.textContent = item.title;
    singleRoomGridLocation.textContent = item.location;
    singleRoomGridDist.textContent = item.distance;

    LocationAndDistance.append(singleRoomGridLocation, singleRoomGridDist);
    singleRoomGrid_textdiv.append(singleRoomGrid_title, LocationAndDistance);
    singleRoomGrid.append(singleRoomGrid_Image, singleRoomGrid_textdiv);
    Vishnu_location_div3.append(singleRoomGrid);

    singleRoomGrid.addEventListener("mouseover", () => {
      singleRoomGrid_Image.style.filter = "brightness(1)";
      singleRoomGrid.style.scale = "1.04";
      singleRoomGrid.style.backgroundColor = "rgb(194, 191, 191)";
      singleRoomGrid_title.style.color = "#000000";
    });

    singleRoomGrid.addEventListener("mouseout", () => {
      singleRoomGrid_Image.style.filter = "brightness(.65)";
      singleRoomGrid.style.scale = "1";
      singleRoomGrid.style.backgroundColor = "rgb(255, 255, 255)";
      singleRoomGrid_title.style.color = "#615f5e";
    });
  });
}
let Vishnu_location_div4 = document.querySelector(".Vishnu_location_div4");
function renderPaginationButtons(buttons) {
  Vishnu_location_div4.innerHTML = "";
  for (let i = 1; i <= buttons; i++) {
    let singleButton = document.createElement("button");
    singleButton.className = "singleButton";
    singleButton.textContent = i;
    singleButton.setAttribute("data-id", i);

    Vishnu_location_div4.append(singleButton);

    singleButton.addEventListener("click", (e) => {
      singleButton.style.backgroundColor = "";
      let pagenum = singleButton.getAttribute("data-id");
      singleButton.style.backgroundColor = "#c29981";
      FetchAllRooms(pagenum);
    });
  }
}

let Vishnu_location_div5 = document.querySelector(".Vishnu_location_div5");

async function FetchClients() {
  try {
    let res = await fetch(
      `https://neural-innovator-5123.onrender.com/ClientLogos`
    );
    let data = await res.json();
    if (res.ok) {
      RenderClinets(data);
    }
  } catch (error) {
    console.log(`Error white fetching Clients is ${error}`);
  }
}
FetchClients();

function RenderClinets(data) {
  data.forEach((item) => {
    let Vishnu_5Bottom_logos = document.createElement("div");
    Vishnu_5Bottom_logos.className = "Vishnu_5Bottom_logos";
    let Vishnu_5Bottom_logos_Image = document.createElement("img");
    Vishnu_5Bottom_logos_Image.className = "Vishnu_5Bottom_logos_Image";

    Vishnu_5Bottom_logos_Image.src = item.ordinary;

    Vishnu_5Bottom_logos.addEventListener("mouseover", (e) => {
      Vishnu_5Bottom_logos_Image.src = item.colored;
    });
    Vishnu_5Bottom_logos.addEventListener("mouseout", (e) => {
      Vishnu_5Bottom_logos_Image.src = item.ordinary;
    });
    Vishnu_5Bottom_logos.append(Vishnu_5Bottom_logos_Image);
    Vishnu_location_div5.append(Vishnu_5Bottom_logos);
  });
}

let InputValue = document.getElementById("Vishnu_location_div61_grids_Input");

let subScribeButton = document.getElementById("subscribeButton");
subScribeButton.addEventListener("click", (e) => {
  if (InputValue.value.includes("@")) {
    alert("Stay tuned, and feel free to explore! ");
    window.location.href = "index.html";
  } else {
    alert("Enter a valid Email Id");
  }
});
