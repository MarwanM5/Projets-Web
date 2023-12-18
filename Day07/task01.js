var clicks = 0; 
function onClick() {
    clicks++;

    var footerElements = document.getElementsByTagName("footer");
    
    if (footerElements.length > 0) {
        var divElements = footerElements[0].getElementsByTagName("div");

        if (divElements.length > 0) {
            
            divElements[0].addEventListener("click", function () {
                clicks++;
                this.innerHTML = "Click count: " + clicks;
            });
        }
    }
}


onClick();
