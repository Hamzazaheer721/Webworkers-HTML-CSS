let dataResponse = "";
var worker = new Worker('/dist/worker.js')
var el = document.getElementById("search-button");
if (el) {
  el.addEventListener("click", fetchData)
}
function fetchData() {
  fetch('/json/generated.json').then((res) => {
    return res.json();
  }).then(data => {
    let html = ""
    worker.postMessage(data)
    worker.onmessage = function (e){
      document.getElementById("data").innerHTML = e.data;
    }
  })
}