function deletePlayer(playerId) {
  console.log(playerId);
  let x = fetch(
    "https://act3-fullstack-rest-angel.herokuapp.com/players/" + playerId,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
}

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
      let thEdit = document.createElement("th");
      let thDelete = document.createElement("th");

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
      tr.appendChild(thEdit);
      tr.appendChild(thDelete);
      playersTable.appendChild(tr);

      for (i of data) {
        tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdSurname = document.createElement("td");
        let tdAge = document.createElement("td");
        let tdPosition = document.createElement("td");
        let tdTeam = document.createElement("td");
        let tdEdit = document.createElement("td");
        let tdDelete = document.createElement("td");

        let aEdit = document.createElement("a");
        aEdit.innerText = "Edit";
        aEdit.href = "assets/html/editPlayer.html?id=" + i._id;

        let span = document.createElement("span");
        span.innerHTML =
          "<button onclick='deletePlayer(\"" + i._id + "\")'>Delete</button>";

        tdName.innerText = i.name;
        tdSurname.innerText = i.surname;
        tdAge.innerText = i.age;
        tdPosition.innerText = i.position;
        tdTeam.innerText = i.team;
        tdEdit.appendChild(aEdit);
        tdDelete.appendChild(span);

        tr.appendChild(tdName);
        tr.appendChild(tdSurname);
        tr.appendChild(tdAge);
        tr.appendChild(tdPosition);
        tr.appendChild(tdTeam);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);
        playersTable.appendChild(tr);
      }
    });
});
