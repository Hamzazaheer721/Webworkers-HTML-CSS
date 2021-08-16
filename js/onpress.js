let dataResponse = "";
var worker = new SharedWorker('/dist/worker.js')
var el = document.getElementById("search-button");
if (el) {
  el.addEventListener("click", fetchData)
}

function fetchData() {
  fetch('/json/generated.json').then((res) => {
    return res.json();
  }).then(data => {
    let html = ""
    for (keys in data) {
      html += data[keys]._id + "</br>";
    }
    document.getElementById("data").innerHTML = html;
  })
}