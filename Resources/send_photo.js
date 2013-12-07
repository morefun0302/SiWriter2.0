/**
 * Used to generate an image filename
 * taken from http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
 */
exports.createRandomString = function() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
	for( var i=0; i < 20; i++ ) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
 
	return text;
};



// This function will take two arguments, the first one is the image file that we'll be
// sending to Drupal and the second one is a callback to execute once the we receive a
// response. If this is not clear to you, don't worry, I'll explain it latter on.
exports.uploadImage = function(image, callback) {
	// Define the URL, it would be something like 
        // api.drupanium.org/api/rest/file.json
	var url = REST_PATH + "file.json";
        // Images taken from the iPhone camera could be huge, 
        // I'm not planning for my app to compete with Instagram so 
        // I'll just reduce the size and quality to 250px by 250px.
	var resize = image.imageAsResized(250,250);	
 
        // Define the object that we're gonna send
	var file = { 
                // This is the important part, we need to encode our resized 
                // image and then convert it to a string so
                // Drupal knows what to do with it
		file: Titanium.Utils.base64encode(resize).text,
                // Remember the utils.js file? we use it to create a new 
                // random string and then we add the .jpg extension
		filename: utils.createRandomString() + ".jpg"
	};
 
        // Create the connection, we're setting a timeout of 8 seconds, 
        // if the request isn't completed by that time
        // the application will abort the request.
	var xhr = Titanium.Network.createHTTPClient({timeout: 8000});
        // Set the request header
	xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        // On load we process the response
	xhr.onload = function() {
		if(xhr.status == 200) {
                        // Drupal will return the file URI and the file id
                        // (fid) of the newly created file
			var response = xhr.responseText;
                        // Instead of doing something here, we just pass the
                        // response to the callback function
                        // the callback will know what to do with the fid
                        // returned by the response.
			callback(response);
		}
	};
        // on error show the error
        xhr.onerror = function(e) {
          alert("There was an error: " + e.error);
        };
        // Open the connection
	xhr.open("POST", url);
        // Send the file to the server
	xhr.send(file);
};
