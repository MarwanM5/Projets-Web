function onClick() {
    

    var footerElements = document.getElementsByTagName("footer");

    if (footerElements.length > 0) {
        var divElements = footerElements[0].getElementsByTagName("div");

        if (divElements.length > 0) {
            divElements[0].addEventListener("click", function () {
                
                
                let name = "";
                while (name === "" || name === null) {
                    name = prompt("What's your name?");
                }

                
                const confirmation = confirm("Are you sure that " + name + " is your name?");

                if (confirmation) {
                    
                    this.innerHTML = "Hello " + name + "!";
                    alert("Hello " + name + "!");
                }
            });
        }
    }
}

onClick();
