const cardsContainer = document.getElementById('room-list-cards-container');
const paginationContainer = document.getElementById('room-list-pagination-container');
let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let filterSingleRoom = document.getElementById("filter-single-room");
let filterRoyalSuit = document.getElementById("filter-royal-suit");
let filterDeluxSuit = document.getElementById("filter-delux-suit");
let filterDoubleRoom = document.getElementById("filter-double-room");


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
  room.setAttribute("data-id", PerRoom.id);

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
  const bodyLink = document.createElement("a");
  bodyLink.href = "https://htmldemo.net/oestin/oestin/room-details.html";
  bodyLink.textContent = PerRoom.type;
  type.append(bodyLink);

  const description = document.createElement("p");
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
  roomServices.append(priceDIV);

  body.append(type, description, facility, roomServices);
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
searchByButton.addEventListener("click", () => {
  const searchOption = searchBySelect.value;
  const searchQuery = searchByInput.value.trim();

  if (searchQuery !== "") {
    let searchParam;
    if (searchOption === "type") {
      searchParam = `type=${searchQuery}&`;
    } 
    // else if (searchOption === "artist") {
    //   searchParam = `artist=${searchQuery}&`;
    // }

    fetchData(roomDetailsURL, searchParam);
  } 
  else{
    fetchData(roomDetailsURL);
  }
});

sortAtoZBtn.addEventListener("click", (e) => {
  fetchData(roomDetailsURL, "_sort=price&_order=asc&")
})
sortZtoABtn.addEventListener("click", (e) => {
  fetchData(roomDetailsURL, "_sort=price&_order=desc&")
})

filterSingleRoom.addEventListener("click", (e) => {
  fetchData(roomDetailsURL, "type=Single Room&")
})
filterRoyalSuit.addEventListener("click", (e) => {
  fetchData(roomDetailsURL, "type=Royal Suit&")
})
filterDoubleRoom.addEventListener("click", (e) => {
  fetchData(roomDetailsURL, "type=Double Room&")
})

filterDoubleRoom.addEventListener("click", (e) => {
  fetchData(roomDetailsURL, "type=Delux Suit&")
})

// Assuming mc-submit is the ID of your subscribe button
const subscribeBtn = document.getElementById("mc-submit");

// Add event listener to the subscribe button
subscribeBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Assuming mc-email is the ID of your email input field
  const emailInput = document.getElementById("mc-email");

  // Get the value entered in the email input field
  const emailValue = emailInput.value;

  // Check if the email value is not empty
  if (emailValue.trim() !== "") {
    // Create an object with the email
    const emailObj = {
      email: emailValue,
    };

    // Call the function to add the email to db.json
    addEmail(emailObj);
  } else {
    // Handle the case where the email input is empty
    alert("Email cannot be empty");
  }
});

// Function to add email to db.json
function addEmail(emailObj) {
  // Replace 'http://localhost:3000/subscribe' with your actual server endpoint
  const subscribeURL = 'https://neural-innovator-5123.onrender.com/newsletterSubScribers';

  fetch(subscribeURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailObj),
  })
    .then((res) => res.json())
    .then((data) => {
      // Handle success
      console.log(data);
      showSuccessPopup(); // Call function to show success popup
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
}

// Function to show success popup
function showSuccessPopup() {
  // You can customize this popup according to your needs
  alert("Wonderful! You have successfully subscribed to our newsletter.");
}