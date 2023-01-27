const data = {
  btn1: [
    { name: "Elemento 1" },
    { name: "Elemento 2" },
    { name: "Elemento 3" }
  ],
  btn2: [
    { name: "Elemento 4" },
    { name: "Elemento 5" },
    { name: "Elemento 6" }
  ],
  btn3: [
    { name: "Elemento 7" },
    { name: "Elemento 8" },
    { name: "Elemento 9" }
  ],
  btn4: [
    { name: "Elemento 10" },
    { name: "Elemento 11" },
    { name: "Elemento 12" }
  ]
};

//Función para mostrar los elementos de la tabla
function showData(btnId) {
  const table = document.querySelector("#data-table");
  table.innerHTML = "";
  data[btnId].forEach(element => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.innerHTML = element.name;
    row.appendChild(nameCell);
    table.appendChild(row);
  });
}

// Añadir eventos click a cada botón
document.querySelector("#btn1").addEventListener("click", () => showData("btn1"));
document.querySelector("#btn2").addEventListener("click", () => showData("btn2"));
document.querySelector("#btn3").addEventListener("click", () => showData("btn3"));
document.querySelector("#btn4").addEventListener("click", () => showData("btn4"));
