document.getElementById('newPostForm').addEventListener('submit', function(e) {
    // Prevent the form from submitting normally
    e.preventDefault();
    
    // Get the title and content of the new post
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    
    // Create a new article element
    var newPost = document.createElement('article');
    
    // Create the title and content elements
    var newTitle = document.createElement('h2');
    var newContent = document.createElement('p');
    
    // Set the text for the new title and content
    newTitle.textContent = title;
    newContent.textContent = content;
    
    // Add the title and content to the new post
    newPost.appendChild(newTitle);
    newPost.appendChild(newContent);
    
    // Add the new post to the main element
    document.getElementById('main').appendChild(newPost);
    
    // Clear the form inputs
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
});