console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const msgOne = document.querySelector("#messageOne");
const msgTwo = document.querySelector("#messageTwo");

console.log(msgOne, msgTwo);

fetch("weather?address=!!")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

weatherForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const location = search.value;
  msgOne.textContent = "Loading...";
  msgTwo.textContent = "";
  fetch(`weather?address=${location}`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      if (data.error) {
       // console.log(data.error);
        msgOne.textContent=data.error;
      } else {
        //console.log(data);
        msgOne.textContent=data.location;
        msgTwo.textContent=data.forecast
      }
    });
});
