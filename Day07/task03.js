
    var footerElements = document.getElementsByTagName("footer")[0];
    var divElements = footerElements[0].getElementsByTagName("div")[0];
    
            last42 = "";
        
            divElements[0].addEventListener("keypush", function () {
                 
                if(last42 >= 42) {
                    last42 = str.slice(-42);
                }
                
                
                this.innerHTML = last42;
                
                
                
            });
        







