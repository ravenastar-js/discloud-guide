function autoType(elementClass, typingSpeed, timeout) {
    var ourClass = $(elementClass);
    ourClass.css({
      "position": "relative",
      "display": "inline-block"
    });

    ourClass = ourClass.find(".text-js");

    var text = ourClass.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    
    setTimeout(function () {
      ourClass.css("opacity", 1);
      ourClass.css("font-weight", "Bolder");
      ourClass.css("font-family", "Helvetica");
      ourClass.css("font-size", "1.1em");
      ourClass.text("");

      for (var i = 0; i < amntOfChars; i++) {
        (function (i, char) {
          setTimeout(function () {
            newString += char;
            ourClass.text(newString);
          }, i * typingSpeed);
        })(i, text[i]);
      }
    }, timeout);
  }

function fire(){
    autoType(".txt-js", 30, 1000);
    autoType(".txt-js-2", 30, 7000);
    autoType(".txt-js-3", 30, 17000);    
    autoType(".txt-js-4", 30, 28000);  
}