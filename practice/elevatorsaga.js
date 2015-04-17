{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator2 = elevators[1];
        //var elevator3 = elevators[2];
        //var elevator4 = elevators[3];
        
        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            elevator.goToFloor(0);

        });
        
        elevator2.on("idle", function() {
            elevator2.goToFloor(0);
        });
        
        //elevator3.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
        //    elevator3.goToFloor(0);
        //});

        //elevator4.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
        //    elevator4.goToFloor(0);
        //});
        
        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum);
        } );

        elevator2.on("floor_button_pressed", function(floorNum) {
            elevator2.goToFloor(floorNum);
        } );
        
        //elevator3.on("floor_button_pressed", function(floorNum) {
        //    elevator3.goToFloor(floorNum);
        //} );

        //elevator4.on("floor_button_pressed", function(floorNum) {
        //    elevator4.goToFloor(floorNum);
        //} );
                
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}