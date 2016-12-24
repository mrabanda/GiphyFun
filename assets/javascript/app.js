var topics = ["car", "bus", "truck", "train", "trolley", "highway", "subway", "street", "road", "tunnel", "underground", "bridge", "traffic", "congestion",];
var newTopic, newButton;

function genNewButton() {
  newButton = $("<button>").addClass("btn topic").attr("data-name", newTopic).text(newTopic);
  $("#myButtons").append(newButton);
};

function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < topics.length; i++) {

    var genButton = $("<button>").addClass("btn topic").attr("data-name", topics[i]).text(topics[i]);
    $("#myButtons").append(genButton);
  };
};

function addbutton(event) {
  event.preventDefault();
  newTopic = $("#topic-input").val().trim();
  if(topics.indexOf(newTopic) === -1) {
    topics.push(newTopic);
    genNewButton();
  };
};

function displayGifs() {
  $("#giphyPics").empty();
  var gifSearch = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=dc6zaTOxFJmzC";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response)
    for(j=0;j<10;j++) {
      gifStillUrl = response.data[j].images.fixed_width_still.url
      gifUrl = response.data[j].images.fixed_width.url
      var gifImageTag = $("<img>").attr({src: gifStillUrl, "data-still":gifStillUrl, "data-gif": gifUrl, alt: gifSearch});
      $("#giphyPics").append(gifImageTag);
    }
  });

}

function getGiphy() {
  if($(this).attr("src") !== $(this).attr("data-gif")) {
    var newSrc = $(this).attr("data-gif");
    $(this).attr("src", newSrc); 
  } else {
    var newSrc = $(this).attr("data-still");
    $(this).attr("src", newSrc);   
  };
};

$("#add-topic").on("click", addbutton);
$(document).on("click", ".topic", displayGifs);
$(document).on("click", "img", getGiphy);

renderButtons();