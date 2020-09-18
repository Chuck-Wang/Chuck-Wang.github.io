document.getElementById("submitBtn").onclick = function saveToFirebase() {
    var messageObject = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        gene: document.getElementById("message").value
    };

    firebase.database().ref('web-messages').push().set(messageObject)
        .then(function(snapshot) {
            // success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

// saveToFirebase();