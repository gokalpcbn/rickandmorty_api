//globals
let currentData = {};

//objects
let data = {
  getData: function (cb) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        cb(this.responseText);
      }
    });

    xhr.open("GET", "http://localhost:5500/data.json");
    xhr.send();
  },
};

function makeDivForCharacterCard(characterData) {
  let character_card_template = `<div class="character-card"> 
  <img src="${characterData.image}"> <h2>${characterData.name}(${characterData.gender}</h2>
  </div>`;

  return character_card_template;
}

function fillContainerWithData(dataArray) {
  let my_container = document.getElementsByClassName("container")[0];
  let container_html = "";
  for (let i = 0; i < dataArray.results.length; i++) {
    const characterData = dataArray.results[i];
    container_html += makeDivForCharacterCard(characterData);
  }
  my_container.innerHTML = container_html;
}

//document events
document.addEventListener("DOMContentLoaded", function () {
  data.getData(function (result) {
    let currentData = JSON.parse(result);
    fillContainerWithData(currentData);
  });
});
