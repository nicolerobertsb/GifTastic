// global variables

var topics = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom", "Dumbledore", "Draco Malfoy", "Luna Lovegood", "Cedric Diggory", "Gryffindor", "Ravenclaw", "Hufflepuff", "Slytheryn",]
var button;
var newTopic = "";
//1.genearte buttons dynamically
//2.grab the text from the form and check that
//3.on click buttonsat the top => gify api
//4.stop and start animation

// function to create new buttons. first empty the previous button element and then loop through the array to create the buttons

var newButton = function () {
    $("#buttonArea").empty();

    for (let i = 0; i < topics.length; i++) {
        // button = $("<button type=" + "button" + ">" + topics[i] + "<button>").addClass("btn btn-warning").attr("data", topics[i]);d
        var a = $("<button>");
        a.addClass("buttonsTop");
        a.attr("data-type", topics[i]);
        a.text(topics[i]);

        $("#buttonArea").append(a);

    }
}
$(document).on("click", ".buttonsTop", function () {
    $("#gifArea").empty();
    var topic = $(this).attr("data-type");

    var queryURL="https://api.giphy.com/v1/gifs/search?q=" +topic  + "&api_key=Jwa8XTfkDcVzJPOFKS6nJT6SbfQABFXY&limit=10";
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response.data[0]);
    })
})
$("#addTopic").on("click", function (event) {
    event.preventDefault();
    newTopic = $("input").val();
    console.log("newTopic: " + newTopic);
    topics.push(newTopic);
    newButton();
})
newButton();

