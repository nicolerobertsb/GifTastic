// global variables

var topics = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom", "Dumbledore", "Draco Malfoy", "Luna Lovegood", "Cedric Diggory", "Gryffindor", "Ravenclaw", "Hufflepuff", "Slytheryn",]
var button;
var newTopic = "";

// function to create new buttons. first empty the previous button element and then loop through the array to create the buttons

var newButton = function () {
    $("#buttonArea").empty();

    for (let i = 0; i < topics.length; i++) {
        button = $("<button type=" + "button" + ">" + topics[i] + "<button>").addClass("btn btn-warning").attr("data", topics[i]);

        $("#buttonArea").append(button);

    }
}

