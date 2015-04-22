$(window).on("html_loaded", function(e) {
    $(".submit_button").click(function(e) {
        
        // 1. Add your Parse keys.
        Parse.initialize("S7010fn0kxrBNdhcrBIgzwWiAlRW9OMeg9nQIL4E","t88ElcxMSMRHxO5oBs5MICgEFdswpmr3yQRz4rvd");
        
        // 2. Create a new Parse.User.
        var user = new Parse.User();

        // 3. Set a username.
        user.set('username', 'hobbes');

        // 4. Set a password.
        user.set('password', 'tiger');
        
        // 5. Sign them up!
        user.signUp(null, {
            success: function(user) {
                console.log("User signed up!");
            }
        });
    });
});
