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

    post.save({
        success: function(Post) {
            console.log('Successfully saved post with id : ' + Post.id);

            $('#textBox').empty();
            $('#authorBox').empty();
            displayPosts();
        },
        error: function(error) {
            console.log('Error: ' + error.code + ' ' + error.message);
        }
    });
}

function displayPosts() {
    var Post = Parse.Object.extend('Post');
    var query = new Parse.Query(Post);
    
    query.find({
        success: function(results) {
            console.log('Successfully retreived ' + results.length + ' posts.');
            $('#displayPane').empty();

            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log(object.get('text') + ' - ' + object.get('author'));
                $('#displayPane').append(object.get('text') + ' - Authored by: ');
                $('#displayPane').append(object.get('author') + '<br>');

            }
        },
        error: function(error) {
            console.log('Error: ' + error.code + ' ' + error.message);
        }
    });
}

$(document).ready(function(){

    displayPosts();

    $('#submitButton').click(createPost);
});