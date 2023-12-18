<?php
function dog_bark ($woof_nb) {
    if($woof_nb <= 0) {
        echo "\n";
    } 
    else 
    {
        $woof_maker = str_repeat("woof ", $woof_nb - 1). "woof\n";
        echo $woof_maker;
    }
}

$woof_count = 7;
dog_bark($woof_count);

?>