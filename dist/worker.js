onmessage = function(e){
	let data = e.data;
	let dataArray = []
	for (keys in data) {
		if(data[keys].age < 21){
			dataArray.push(data[keys])
		}
	}
	console.log(dataArray)
	postMessage(dataArray)
}
