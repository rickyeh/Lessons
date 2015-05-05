var $messageBox;
var $yourID;
var $sendID;
var sendID;

$(document).ready(function() { 
    $messageBox = $('#messages');
    $yourID = $('#yourID');
    $sendID = $('#sendID');
});

var peer = new Peer({key: 'p4tiwn62dkt3ayvi'});

$(document).ready(function() {

    peer.on('open', function(id) {
        console.log('My peer ID is: ' + id);
        $yourID.append(id);
    });

    peer.on('connection', function(conn) {
        console.log('Connection received!  SUCCESS!');
        $messageBox.text('Connection received! Yay!')
    });
    
});

function testFunction() {
    sendID = $sendID.text();
    console.log(sendID);

    var conn = peer.connect(sendID);

    conn.on('open', function() {
      // Receive messages
      conn.on('data', function(data) {
        console.log('Received', data);
      });

      // Send messages
      conn.send('Hello!');
    });
}