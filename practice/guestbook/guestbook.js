Parse.initialize('S7010fn0kxrBNdhcrBIgzwWiAlRW9OMeg9nQIL4E','t88ElcxMSMRHxO5oBs5MICgEFdswpmr3yQRz4rvd');

var textInputString;
var authorInputString;

function createPost() {

    textInputString = $('#textBox').html();
    authorInputString = $('#authorBox').html();

    var Post = Parse.Object.extend('Post');
    var post = new Post();

    post.set('text', textInputString);
    post.set('author', authorInputString);

    post.save();

    $('#textBox').empty();
    $('#authorBox').empty();

    // Call displayPosts
}

function displayPosts() {

}

$(document).ready(function(){

    // Function to show all posts

    // Create click handler
    $('#submitButton').click(createPost);
});