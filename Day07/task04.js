
    const increaseFontButton = document.querySelector("footer button:nth-child(1)");
    const decreaseFontButton = document.querySelector("footer button:nth-child(2)");
    const backgroundColorSelect = document.querySelector("footer select");

    
    let fontSize = 16; 
    let backgroundColor = "";

    
    function updateFontSize() {
      document.body.style.fontSize = fontSize + "px";
    }

    
    function updateBackgroundColor() {
      document.body.style.backgroundColor = backgroundColor;
    }

    
    increaseFontButton.addEventListener("click", function () {
      fontSize += 2; 
      updateFontSize();
    });

    
    decreaseFontButton.addEventListener("click", function () {
      if (fontSize > 8) {
        fontSize -= 2; 
        updateFontSize();
      }
    });

    // Event listener for the background color dropdown
    backgroundColorSelect.addEventListener("change", function () {
      backgroundColor = backgroundColorSelect.value;
      updateBackgroundColor();
    });
 

