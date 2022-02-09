$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const playerId = urlParams.get("id");

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

  fetch("https://act3-fullstack-rest-angel.herokuapp.com/players/" + playerId, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("editPlayerTitle").innerText =
        "Edit player " + data.name;
      document.getElementById("name").value = data.name;
      document.getElementById("surname").value = data.surname;
      document.getElementById("age").value = data.age;
      document.getElementById("position").value = data.position;
      document.getElementById("team").value = data.team;
    });

  $("#editPlayerForm").submit(function (e) {
    e.preventDefault();
    let data = {
      name: $("#name").val(),
      surname: $("#surname").val(),
      age: $("#age").val(),
      position: $("#position").val(),
      team: $("#team").val(),
    };

    fetch(
      "https://act3-fullstack-rest-angel.herokuapp.com/players/" + playerId,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    alert("Player updated");
    window.location.href = "../../index.html";
  });
});
