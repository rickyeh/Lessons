$(window).on("html_loaded", function(e) {
    $(".submit_button").click(function(e) {
        
        // 1. Create a "Comment" subclass of Parse.Object
        var Comment = Parse.Object.extend('Comment');
        
        // 2. Create a new instance of this subclass
        var comment = new Comment();
        
        // 3. Add some data to the "text" and "likes" keys
        comment.set('text', 'Hello World!');
        comment.set('likes', 3);
        
        // 4. Save your new comment!
        comment.save();

    });
});