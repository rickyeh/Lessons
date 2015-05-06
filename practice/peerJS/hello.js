var $messageBox;
var $yourID;
var $sendID;
var $sendButton;
var $sendContent;
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
var peer = new Peer({
    key: 'p4tiwn62dkt3ayvi'
});

peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
    $yourID.append(id);
});

peer.on('connection', function(conn) {
    console.log('P2 : Connection received!  SUCCESS!');
    $messageBox.text('Connection received! Yay!');

    conn.on('data', function(data) {
        console.log('P2: Message Received');
        console.log('Received', data);
    });
});



// Send function called when the button is clicked.
function send() {
    sendID = $sendID.text();
    sendText = $sendContent.text();
    console.log('P1 : Sending message: ' + sendText + ' to ' + sendID);

    $sendContent = $sendContent.text('');

    var conn = peer.connect(sendID);

    conn.on('open', function() {
        console.log('conn.on open called');

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
