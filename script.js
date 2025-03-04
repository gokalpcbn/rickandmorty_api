//globals
let currentDta = {};

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

//document events
document.addEventListener("DOMContentLoaded", function () {
  data.getData(function (result) {
    currentData = JSON.parse(result);
  });
});
