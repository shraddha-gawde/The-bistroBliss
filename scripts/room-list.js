const cardsContainer = document.getElementById('room-list-cards-container');
const paginationContainer = document.getElementById('room-list-pagination-container');



// const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
//   }`;
let roomDetailsURL = `https://neural-innovator-5123.onrender.com/roomDetails`;

let pageNumber = 1;


function fetchData(url, data_param, page) {
  fetch(`${url}?${data_param || ""}_page=${page || pageNumber}&_limit=6`)
    .then((res) => {
      let total = res.headers.get("x-total-count");
      let numberOfButtons = Math.ceil(total / 5);
      createButtons(numberOfButtons, data_param);
      return res.json();
    })
    .then((data) => {
        displayRoom(data);
        console.log(data)
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
  });
}
fetchData(roomDetailsURL);


function displayRoom(roomData) {
    cardsContainer.innerHTML = "";

  const cardList = document.createElement("div");
  cardList.className = "card-list";

  roomData.forEach((room) => {
    const card = createArtCard(room);
    cardList.append(card);
  })
  cardsContainer.append(cardList);
}

// creating card
function createArtCard(PerRoom) {
  const room = document.createElement("div");
  room.className = "room-list";
  room.setAttribute("data-id", room.id);

  const imgDiv = document.createElement("div");
  imgDiv.className = "room-img";

  const directedLink = document.createElement("a");
  directedLink.href = "https://htmldemo.net/oestin/oestin/room-details.html";
  imgDiv.append(directedLink);

  const image = document.createElement("img");
  image.src = PerRoom.image;
  image.alt = PerRoom.type;
  directedLink.append(image);

  const body = document.createElement("div");
  body.className = "card-body";

  const type = document.createElement("h3");
  type.className = "room-type";
  type.textContent = PerRoom.type;

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = PerRoom.description;

  const facility = document.createElement("h4");
  facility.textContent = "Room Facility";

  const roomServices = document.createElement("div");
  roomServices.className = "room-services";

  const roomFacility = document.createElement("p");
  roomFacility.className = "card-description";
  roomFacility.textContent = PerRoom.roomFacilities;
  roomServices.append(roomFacility);

  const priceDIV = document.createElement("div");
  priceDIV.className = "room-pamount";

  const priceAmount = document.createElement("span");
  priceAmount.className = "room-price";
  priceAmount.textContent = `$${PerRoom.price}`;
  priceDIV.append(priceAmount);

  const perNight = document.createElement("span");
  perNight.className = "count";
  perNight.textContent = "Per Night";
  priceDIV.append(perNight);

//   const paintbrushes = document.createElement("p");
//   paintbrushes.className = "card-paintbrushes";
//   paintbrushes.textContent = `paintbrushes : ${art.details ? (art.details.paintbrushes ? art.details.paintbrushes.join(', ') : '') : ''}`;

//   const price = document.createElement("p");
//   price.className = "card-price";
//   price.textContent = art.price;

//   const medium = document.createElement("p");
//   medium.className = "card-medium";
//   medium.textContent = art.medium;

//   const editLink = document.createElement("a");
//   editLink.href = "#";
//   editLink.setAttribute("data-id", art.id);
//   editLink.className = "card-link";
//   editLink.textContent = "Edit";

//   editLink.addEventListener("click", (e) => {
//     e.preventDefault();
//     updateArtForm(art);
//   });

//   const deleteButton = document.createElement("button");
//   deleteButton.className = "card-button";
//   deleteButton.textContent = "Delete";

//   deleteButton.addEventListener("click", () => {
//     const artId = art.id;
//     deleteArt(artId);
//   });

  body.append(type, description, facility, roomServices, priceDIV);
  room.append(imgDiv);
  room.append(body);

  return room;
}

// for pagination

function createButtons(number, query) {
    paginationContainer.innerHTML = "";
  for (let i = 1; i <= number; i++) {
    const pageButtons = document.createElement("button");
    pageButtons.className = "paggination-button";
    pageButtons.textContent = i;
    pageButtons.addEventListener("click", (e) => {
      fetchData(roomDetailsURL, query, i);
    })
    paginationContainer.append(pageButtons);
  }
}
