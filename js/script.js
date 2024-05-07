const table = new Map([
  [
    "CICLOPE",
    "Ele tem o poder de disparar rajadas ópticas por um acidente que aconteceu com ele quando criança, mas não consegue controlá-los.",
  ],
  [
    "JEAN GREY",
    "Jean Grey é uma mutante nível ômega e o principal avatar da Força Fênix, no qual manifesta poderes cósmicos. A telepatia e telecinese.",
  ],
  [
    "LINCE NEGRA",
    "Ela tem o poder de atravessar matéria sólida,campos de energia,rajadas ópticas, continuando intacta,e também tem o poder de andar no ar.",
  ],
  [
    "TEMPESTADE",
    "Tem o poder de controlar as forças da natureza, muito poderosa ela pode produzir raios, chuvas, gelos, ventos, neblina, entre outros efeitos.",
  ],
  [
    "VAMPIRA",
    "Ela tem o poder de absorver a vitalidade e memória das pessoas que toca ou no caso dos mutantes os poderes e a memória, mas só temporariamente.",
  ],
  [
    "WOLVERINE",
    " Poderes. Garras Metálicas. Fator de Cura Regenerativo, Super Agilidade.",
  ],
  [
    "NOTURNO",
    "Ele é um mutante que nasceu com cauda, orelhas pontudas e com o poder de se Teletransportar.",
  ],
  [
    "MAGNETO",
    "Ele tem o poder de magnetocinese, ou seja, controlar objetos de metal e criar campos magnéticos.",
  ],
]);

let selectionImage = document.querySelector("section img");
// console.log(selectionImage);
let selectionTitle = document.querySelector("section h3");
// console.log(selectionTitle);
let selectionInfo = document.querySelector("section p");
// console.log(selectionInfo);

const selections = document.querySelectorAll(".char-sel img");
// console.log(selections);

function changedSelected(event) {
  // const btn = event.target;
  // console.log(btn);
  const currId = event.target.getAttribute("id").toLowerCase();
  // console.log(currId);
  // const curr = currId.replace("-", " ");
  // console.log(curr);
  table.forEach((value, key) => {
    // console.log(key, value);
    if (currId.replace("-", " ") === key.toLowerCase()) {
      selectionTitle.innerText = key;
      selectionInfo.innerText = value;
      selectionImage.setAttribute("src", "./img/card-" + currId + ".png");
    }
  });
}

selections.forEach((select) => {
  select.addEventListener("click", changedSelected);
});
