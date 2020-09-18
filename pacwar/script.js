document.getElementById("submitBtn").onclick = function saveToFirebase() {

    var patt = /[0123]{50}/
    if (patt.test(document.getElementById("gene").value)) {
        var messageObject = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            gene: document.getElementById("gene").value
        };
    
        firebase.database().ref('web-messages').push().set(messageObject)
            .then(function(snapshot) {
                document.getElementById("errorMsg").innerHTML = "Success!";
                // success(); // some success method
            }, function(error) {
                console.log('error' + error);
                error(); // some error method
            });
    } else {
        document.getElementById("errorMsg").innerHTML = "Invalid gene!";
    }
}

// saveToFirebase();