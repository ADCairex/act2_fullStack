$(document).ready(function () {
  fetch("https://act3-fullstack-rest-angel.herokuapp.com/players/")
    .then((response) => response.json())
    .then((data) => console.log(data));
});
