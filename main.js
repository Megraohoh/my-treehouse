var treehouseContainer = document.getElementById("treehouseContainer");

function sendToDom(xhrData){
	var houseString = "";
	var currentHouse;

	for(var i=0; i<xhrData.myTreehouse.length; i++){
		currentHouse = xhrData.myTreehouse[i];

		houseString += `<div class="col-sm-6 col-md-4">`;
    	houseString += `<div class="thumbnail">`;
        houseString += `<img src="${currentHouse.url}" alt="Meghan's Treehouse Profile">`;
        houseString += `<div class="caption">`;
        houseString += `<h3>Treehouse Profile</h3>`;
        // houseString += `<p></p>`;
        // houseString += `<p></p>`;
        houseString += `</div></div></div>`;
	}
	
	treehouseContainer = houseString;	
}

function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	// makeDom(data);

}

function executeThisCodeAfterFileFails(){

}






var myRequest = new XMLHttpRequest(); 
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "main.json");
myRequest.send();