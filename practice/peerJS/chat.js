// obj to store all the connection info
// e.g. obj.conn = connection object 

var connObj = {
    myID: '',
    recID: '',
    myConnection : {},
    recConnection : {}
};

var peer = new Peer({
    key: 'p4tiwn62dkt3ayvi'
});

function initChat() {
    // Opens connection
    peer.on('open', function(id) {
        connObj.myID = id;
        console.log('Your peer ID is: ' + id);
    });

    // Listens for incoming connections
    peer.on('connection', function(conn) {
        console.log('Incoming connection detected.');

        conn.on('data', function(data) {
            console.log('Inc MSG : ', data);
        });
    });
}

function c(id) {
    connObj.recID = id;
    connObj.myConnection = peer.connect(id);

    return 'Connect request sent.';
}

function s(text) {
    connObj.myConnection.send(text);

    return 'Sent MSG : ' + text;
}

initChat();