var $messageBox;
var $yourID;
var $sendID;
var sendID;
var sendText;

$(document).ready(function() { 
    $messageBox = $('#messages');
    $yourID = $('#yourID');
    $sendID = $('#sendID');
    $sendContent = $('#sendContent');
    $sendButton = $('#sendButton');
    $sendButton.click(send);
});

// Create new Peer Object
var peer = new Peer({key: 'p4tiwn62dkt3ayvi'});

peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
    $yourID.append(id);
});

peer.on('connection', function(conn) {
    console.log('Connection received!  SUCCESS!');
    $messageBox.text('Connection received! Yay!');
});

// Send function called when the button is clicked.
function send() {
    sendID = $sendID.text();
    sendText = $sendContent.text();
    console.log('Sending message: ' + sendText + ' to ' + sendID);

    $sendContent = $sendContent.text('');

    var conn = peer.connect(sendID);

    conn.on('open', function() {
        // Receive messages
        conn.on('data', function(data) {
            console.log('Message Received');
            console.log('Received', data);
        });

        // Send messages
        conn.send(sendText);
    });
}

function receive() {

}