<?php
function dynamic_body() {
     
        $page = $_GET["page"];
        switch ($page) :
            case "home":
                include("../index.html");
                break;
            case "php":
                include("../php.html");
                break;
            case "sql":
                include("../sql.html");
                break;
            default:
                echo "<p>Unknown page</p>";
                break;
            
        endswitch; 
        
        
}


?>
