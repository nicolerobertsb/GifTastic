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

//on click function that gets the gifs once each button is pressed

$(document).on("click", ".buttonsTop", function () {
    $("#gifArea").empty();
    var topic = $(this).attr("data-type");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=Jwa8XTfkDcVzJPOFKS6nJT6SbfQABFXY&limit=10";
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data);

        var dataResults = response.data;

        //create forloop so that all the below steps happen to every button
        // create div to hold gifs
        //under the gif display rating
        // create img tag
        // add data-states
        // append image to the div

        for (let i = 0; i < dataResults.length; i++) {

            var gifDiv = $("<div>");
            var p = $("<p>");
            p.text(dataResults[i].rating);
            p.text("Rating: " + dataResults[i].rating);

            var animateURL = dataResults[i].images.fixed_height.url;

            var stillURL = dataResults[i].images.fixed_height_still.url;

            var img = $("<img>")

            img.attr("src", stillURL);
            img.attr("data-state", "still");
            img.attr("data-animate", animateURL);
            img.attr("data-still", stillURL);
            img.addClass("gif");

            gifDiv.append(img);
            gifDiv.append(p);
            $("#gifArea").prepend(gifDiv);

        }
    })
})

// animate or still the gif when clicked
$("#gifArea").on("click", ".gif", function (event) {
    event.preventDefault();

    var gifState = $(this).attr("data-state");

    if (gifState === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

})

//add the new topic inputed by the user to a button
$("#addTopic").on("click", function (event) {
    event.preventDefault();

    newTopic = $("input").val();
    console.log("newTopic: " + newTopic);
    topics.push(newTopic);
    newButton();
})
newButton();

