<?php
function render_body($find) {
    switch ($find) {
        case "home":
            include ("index.html");
        case "php":
            include ("php.html");
        case "sql":
            include ("sql.html");
    
            
    }

    
}
?>