// obj to store all the connection info
// e.g. obj.conn = connection object 

var connObj = {
    myID: '',
    partnerID: '',
    myConnection: {},
};

var peer = new Peer({
    key: 'p4tiwn62dkt3ayvi'
});

// Main function
function initChat() {
    // Opens connection
    peer.on('open', function(id) {
        connObj.myID = id;
        console.log('Your peer ID is: ' + id);
    });

    // Listens for incoming connections and displays messages
    peer.on('connection', function(conn) {
        console.log('Incoming connection detected.');
        connObj.myConnection = conn;
        readyConnection();
    });
}

function readyConnection() {
    connObj.myConnection.on('open', function() {
        connObj.myConnection.on('data', function(data) {
            console.log('Inc MSG : ', data);
        });
    });
}

// Connect function
function c(id) {
    connObj.partnerID = id;
    connObj.myConnection = peer.connect(id);

    readyConnection();
    return 'Connect request sent.';
}

// Send function
function s(text) {
    connObj.myConnection.send(text);

    return 'Sent MSG : ' + text;
}

// Reply function
function r(text) {
    connObj.myConnection.send(text);

    return 'Sent MSG : ' + text;
}

initChat();