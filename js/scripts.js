$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    // WITH FOR LOOPS
    // create an array to house the user input for each index position
      var storyElements = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
      // create a for loop to loop through each index item until the condition (2nd parameter) evaluates to false (index is greater than storyElements.length).  storyElement is id in the HTML
      for(var index = 0; index < storyElements.length; index += 1){
        // create a var to assign the value of the user inputs. ("input#" is from the <input id> in HTML). put index in storyElements so the for loop is assigning the value to the current index.
        var userInput = $("input#" + storyElements[index]).val();
        // the userinout value will be assigned to the corresponding index position in the array and will be outputted onto the document.
        $("." + storyElements[index]).text(userInput);
        // close for loop.
      };


    // WITH FOREACH() LOOPING
    // var storyElements = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    //
    // storyElements.forEach(function (storyElement) {
    //   //storyElement is id in the HTML
    //   //"input#" is from the <input id> in HTML
    //   var userInput = $("input#" + storyElement).val();
    //   $("." + storyElement).text(userInput);
    // });

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

    //event.preventDefault();
  });
});
