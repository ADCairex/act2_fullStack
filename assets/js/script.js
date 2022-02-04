$(document).ready(function () {
  let playersTable = document.getElementById("playersTable");
  fetch("https://act3-fullstack-rest-angel.herokuapp.com/players", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let tr = document.createElement("tr");
      let thName = document.createElement("th");
      let thSurname = document.createElement("th");
      let thAge = document.createElement("th");
      let thPosition = document.createElement("th");
      let thTeam = document.createElement("th");

      thName.innerText = "Name";
      thSurname.innerText = "Surname";
      thAge.innerText = "Age";
      thPosition.innerText = "Position";
      thTeam.innerText = "Team";
      tr.appendChild(thName);
      tr.appendChild(thSurname);
      tr.appendChild(thAge);
      tr.appendChild(thPosition);
      tr.appendChild(thTeam);
      playersTable.appendChild(tr);

      for (i of data) {
        tr = document.createElement("tr");
        thName = document.createElement("th");
        thSurname = document.createElement("th");
        thAge = document.createElement("th");
        thPosition = document.createElement("th");
        thTeam = document.createElement("th");

        thName.innerText = i.name;
        thSurname.innerText = i.surname;
        thAge.innerText = i.age;
        thPosition.innerText = i.position;
        thTeam.innerText = i.team;
        tr.appendChild(thName);
        tr.appendChild(thSurname);
        tr.appendChild(thAge);
        tr.appendChild(thPosition);
        tr.appendChild(thTeam);
        playersTable.appendChild(tr);
      }
    });
});
