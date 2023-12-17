// const cardsContainer = document.getElementById('room-list-cards-container');
// const paginationContainer = document.getElementById('room-list-pagination-container');
// let nearPacesURL = `https://neural-innovator-5123.onrender.com/nearPlacesData`;

// let pageNumber = 1;

// function fetchData(url, data_param, page) {
//   fetch(`${url}?${data_param || ""}_page=${page || pageNumber}&_limit=6`)
//     .then((res) => {
//       let total = res.headers.get("x-total-count");
//       let numberOfButtons = Math.ceil(total / 6);
//       createButtons(numberOfButtons, data_param);
//       return res.json();
//     })
//     .then((data) => {
//         displayNearPaces(data);
//         console.log(data)
//     })
//     .catch((error) => {
//       console.error("Fetch Error:", error);
//   });
// }
// fetchData(nearPacesURL);


// function displayNearPaces(placeData) {
//     cardsContainer.innerHTML = "";

//   const cardList = document.createElement("div");
//   cardList.className = "card-list";

//   placeData.forEach((place) => {
//     const card = createArtCard(place);
//     cardList.append(card);
//   })
//   cardsContainer.append(cardList);
// }

// // creating card
// function createArtCard(PerPlace) {
//   const room = document.createElement("div");
//   room.className = "room-list";
//   room.setAttribute("data-id", PerPlace.id);

//   const imgDiv = document.createElement("div");
//   imgDiv.className = "room-img";

//   const directedLink = document.createElement("a");
//   directedLink.href = "#";
//   imgDiv.append(directedLink);

//   const image = document.createElement("img");
//   image.src = PerPlace.image;
//   image.alt = PerPlace.title;
//   directedLink.append(image);

//   const body = document.createElement("div");
//   body.className = "card-body";


  

//   const type = document.createElement("h3");
//   const bodyLink = document.createElement("a");
//   bodyLink.href = "https://htmldemo.net/oestin/oestin/room-details.html";
//   bodyLink.textContent = PerPlace.type;
//   type.append(bodyLink);

//   const description = document.createElement("p");
//   description.textContent = PerPlace.description;

//   const facility = document.createElement("h4");
//   facility.textContent = "Room Facility";

//   const roomServices = document.createElement("div");
//   roomServices.className = "room-services";

//   const roomFacility = document.createElement("p");
//   roomFacility.className = "card-description";
//   roomFacility.textContent = PerPlace.roomFacilities;
//   roomServices.append(roomFacility);

//   const priceDIV = document.createElement("div");
//   priceDIV.className = "room-pamount";

//   const priceAmount = document.createElement("span");
//   priceAmount.className = "room-price";
//   priceAmount.textContent = `$${PerRoom.price}`;
//   priceDIV.append(priceAmount);

//   const perNight = document.createElement("span");
//   perNight.className = "count";
//   perNight.textContent = "Per Night";
//   priceDIV.append(perNight);
//   roomServices.append(priceDIV);

//   body.append(type, description, facility, roomServices);
//   room.append(imgDiv);
//   room.append(body);

//   return room;
// }

// // for pagination

// function createButtons(number, query) {
//     paginationContainer.innerHTML = "";
//   for (let i = 1; i <= number; i++) {
//     const pageButtons = document.createElement("button");
//     pageButtons.className = "paggination-button";
//     pageButtons.textContent = i;
//     pageButtons.addEventListener("click", (e) => {
//       fetchData(nearPacesURL, query, i);
//     })
//     paginationContainer.append(pageButtons);
//   }
// }


let container = document.getElementById("container");

let page = 1;
var flag = true;

async function fetchData(page){
    try{
        let res = await fetch(`https://neural-innovator-5123.onrender.com/nearPlacesData?&_limit=6`);
        let data = await res.json();
        console.log(data);
        appendData(data)
    }
    catch(err){
        console.log(err);
    }
  }

  function appendData(data){
    data.forEach(item => container.append(createCard(item)));
    flag = true;
  }

// function createCard(item) {
//     // Create card container element
//     // const location = document.createElement('div');
//     // location.classList.add('location-area pt-90');

//     const rowdiv = document.createElement('div');
//     rowdiv.classList.add('row');
//     container.append(rowdiv);

//     const coldiv = document.createElement('div');
//     coldiv.classList.add('col-lg-4 col-sm-6 col-12');
//     rowdiv.append(coldiv);

//     const singleLoc = document.createElement('div');
//     singleLoc.classList.add('single-location');
//     rowdiv.append(singleLoc);

//     const imagediv = document.createElement('div');
//     imagediv.classList.add('location-image');
//     singleLoc.append(imagediv);
   
//     const image = document.createElement('img');
//     image.src = item.image;
//     image.alt = item.title;
//     imagediv.appendChild(image);
  
//     const bodyCard = document.createElement('div');
//     bodyCard.classList.add('location-text');
//     singleLoc.append(bodyCard);

//     const title = document.createElement('h3');
//     title.textContent = item.title;
//     bodyCard.appendChild(title);

//     const addressDiv = document.createElement('div');
//     addressDiv.classList.add('address-distance fix');
//     bodyCard.append(addressDiv);

//     const address = document.createElement('span');
//     address.textContent = item.address;
//     addressDiv.appendChild(address);

//     const distance = document.createElement('span');
//     distance.textContent = item.distance;
//     addressDiv.appendChild(distance);
  
//     return card;
//   }


function createCard(item) {
  const rowdiv = document.createElement('div');
  rowdiv.classList.add('row');
  container.append(rowdiv);

  const coldiv = document.createElement('div');
  coldiv.classList.add('col');
  rowdiv.append(coldiv);

  const singleLoc = document.createElement('div');
  singleLoc.classList.add('single-location');
  coldiv.append(singleLoc);

  const imagediv = document.createElement('div');
  imagediv.classList.add('location-image');
  singleLoc.append(imagediv);

  const image = document.createElement('img');
  image.src = item.image;
  image.alt = item.title;
  imagediv.appendChild(image);

  const bodyCard = document.createElement('div');
  bodyCard.classList.add('location-text');
  singleLoc.append(bodyCard);

  const title = document.createElement('h3');
  title.textContent = item.title;
  bodyCard.appendChild(title);

  const addressDiv = document.createElement('div');
  addressDiv.classList.add('address-distance', 'fix');
  bodyCard.append(addressDiv);

  const address = document.createElement('span');
  address.textContent = item.address;
  addressDiv.appendChild(address);

  const distance = document.createElement('span');
  distance.textContent = item.distance;
  addressDiv.appendChild(distance);

  return rowdiv;
}

fetchData();


window.addEventListener("scroll", function () {
  let {clientHeight, scrollHeight, scrollTop} = document.documentElement;
  
  if(flag && (scrollHeight - clientHeight) <= Math.ceil(scrollTop)) {
    page ++;
    fetchData(page);
    flag = false;
  }
});