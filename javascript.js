var database = firebase.database().ref("JavaScript/");

// createContainer 
var chatContainer = document.querySelector(".CHAT");

// eventListener 

database.on("child_added", addMessageToChat);

function addMessageToChat(rowData){
    // Initalize func variables
    var row = rowData.val();
    var name = row.PROFILENAME;
    var text = row.TXTMSG;
    // add message into the chat

    let pElem = document.createElement("p");
    pElem.innerText = name + ": " + text;
    chatContainer.appendChild(pElem);
};