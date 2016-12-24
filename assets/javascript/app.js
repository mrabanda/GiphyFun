var topics = ["car", "bus", "truck", "train", "trolley", "highway", "subway", "street", "road", "tunnel", "underground", "bridge", "traffic", "congestion",];
var newTopic;
var newButton;

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

$("#add-topic").on("click", addbutton);

// Adding click event listeners to all elements with a class of "topic"
// $(document).on("click", ".newTopic", displaytopicInfo);

renderButtons();