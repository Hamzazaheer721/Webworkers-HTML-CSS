onmessage = function(e){
	let data = e.data;
	var html = "";
	for (keys in data) {
			html += data[keys]._id + "</br>";
	}
	postMessage(html)
}
