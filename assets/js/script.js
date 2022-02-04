$(document).ready(function () {
  let playersContiner = document.getElementById('playersContainer');
  fetch("https://act3-fullstack-rest-angel.herokuapp.com/players")
    .then((response) => response.json())
    .then((data) => {
      for (i of data) {
        console.log(i);
      }
    });
});
