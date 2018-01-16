$(document).ready(function() {
  $("#formOne").submit(function(event) {

    // WITH LOOPING
    var storyElements = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    storyElements.forEach(function (storyElement) {
      //storyElement is id in the HTML
      //"input#" is from the <input id> in HTML
      var userInput = $("input#" + storyElement).val();
      $("." + storyElement).text(userInput);
    });

    // WITHOUT LOOPING
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput= $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    //
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
