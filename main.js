var treehouseContainer = document.getElementById("treehouseContainer");


function sendToDom(xhrData){

	var houseString = "";
	var currentBadge;
 	
 
 	for(var i=0; i<xhrData.badges.length; i++){
 		currentBadge = xhrData.badges[i];
 
 		houseString += ` <div class="col-xs-6 col-md-3">`;
	    houseString += `<img src="${currentBadge.icon_url}" alt="treehouse badges">`;
	    houseString += `<h3>Treehouse Profile</h3>`;
	    houseString += `</div>`;

 	}

 	treehouseContainer.innerHTML = houseString;	
 }

function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	console.log("myTreehouseData", data);
	sendToDom(data);
	
}

function executeThisCodeAfterFileFails(){

}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/meghandebity.json");
myRequest.send();
















