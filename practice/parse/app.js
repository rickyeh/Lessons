// $(window).on("html_loaded", function(e) {
//     $(".submit_button").click(function(e) {
        
//         // 1. Add your Parse keys
        
//         // 2. Create a Parse Query for Post objects
//         var query = new Parse.Query("Post");
        
//         // 3. Use the get function to retrieve an object
//         //    and print it's text using console.log
//         query.get("RzpxMj1hP6", {
//             success: function(object) {
//                 object.set("text", "NewValue");
//                 object.save();
//                 console.log();
//             },
//             error: function(error) {
//                 console.log("An error occured :(");
//             }
//         });
        
//     });
// });

// Query the server for current status.
    // If found, insert javascript code to display on or off
// When button is clicked:
    // If button is on, turn off
        // Set status to on, save
    // If switch is off, turn on
        // Set status to off, save
    // On success, switch the button

Parse.initialize('S7010fn0kxrBNdhcrBIgzwWiAlRW9OMeg9nQIL4E','t88ElcxMSMRHxO5oBs5MICgEFdswpmr3yQRz4rvd');

// var State = Parse.Object.extend('State');

var query = new Parse.Query('State');
// var currState = new State();

// currState.set('state', false);
// currState.save();

var switchState;
var switchStateObj;

function getSwitch() {
    query.get('D1aBoRGXv2', {
        success: function(object) {     // Callback function
            console.log('Successfully queried');
            console.log(object.get('state'));
            console.dir(object);

            switchStateObj = object;

            if (object.get('state')) {  // if State is true, button is on
                $('#switchState').html('On');
                switchState = true;
            } else {
                $('#switchState').html('Off');
                switchState = false;
            }

        },
        error: function(error) {
            console.log('Error occurred');
        }
    });
}

function flipSwitch() {
    console.log('Current switchState is : ' + switchState);
    console.log(switchStateObj);

    switchState = !switchState;
    switchStateObj.set('state', switchState);
    switchStateObj.save();
    console.log('Setting state to : ' + switchState);

    var label = switchState ? 'On' : 'Off';
    $('#switchState').html(label);
}

function stopRefresh() {
    clearInterval(refresher);
}

// Create refresher variable to stop refresh later.
var refresher = setInterval(getSwitch, 1000);

$(document).ready(function(){
    getSwitch();
    $('#switch').click(function() {
        flipSwitch();
    });
    $('#stopSwitch').click(function() {
        stopRefresh();
    });
});