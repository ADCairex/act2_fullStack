$(document).ready(function () {
  let positionSelect = document.getElementById("position");
  let teamSelect = document.getElementById("team");

  fetch("https://act3-fullstack-rest-angel.herokuapp.com/positions-teams", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let option;
      for (i of data.positions) {
        option = document.createElement("option");
        option.value = i;
        option.text = i;
        positionSelect.appendChild(option);
      }
      for (i of data.teams) {
        option = document.createElement("option");
        option.value = i;
        option.text = i;
        teamSelect.appendChild(option);
      }
    });

  $("#newPlayerForm").submit(function (e) {
    e.preventDefault();
    let data = {
      name: $("#name").val(),
      surname: $("#surname").val(),
      age: $("#age").val(),
      position: $("#position").val(),
      team: $("#team").val(),
    };

    fetch("https://act3-fullstack-rest-angel.herokuapp.com/players", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      alert("Player " + data.name + " created");
      window.location.href = "../../index.html";
    });
  });
});
