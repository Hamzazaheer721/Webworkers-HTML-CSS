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
    let temp = ""
    worker.postMessage(data)
    worker.onmessage = function (e){
      const _data = e.data;
      if(_data.length > 0){
        _data.forEach((u)=>{
          temp += "<tr>"
          temp += "<td>" + u.age + "</td>"
          temp += "<td>" + u.name + "</td>"
          temp += "<td>" + u.gender + "</td>"
          temp += "<td>" + u.email + "</td></tr>"
        })
        document.getElementById("data").innerHTML = temp;
      }
    }
  })
}