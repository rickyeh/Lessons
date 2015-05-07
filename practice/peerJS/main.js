var apikey = 'p4tiwn62dkt3ayvi';

function onDataReceived(data) {
    console.log('OnDataReceive function called');
    console.log('received data:' + JSON.stringify(data));
}

PeerLib.setup(apikey);

PeerLib.setReceiveHandler(onDataReceived);