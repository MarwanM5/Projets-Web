<?php
function get_shortest($strings) {
    $shortest = $strings[0];
    $shortest_length = strlen($shortest);

    foreach ($strings as $string) {
        $current_length = strlen($string);

        if ($current_length < $shortest_length) {
            $shortest = $string;
            $shortest_length = $current_length;
        }
    }

    return $shortest;
}

$string1 = ["Time", "flowing", "like", "a", "river"];
$string2 = ["Run", "like", "hell"];
$string3 = ["chou", "be", "do"];
$shortestString1 = get_shortest($string1);
$shortestString2 = get_shortest($string2);
$shortestString3 = get_shortest($string3);
echo "Shortest string for string1: " .$shortestString1 . "\n";
echo "Shortest string for string2: " .$shortestString2 . "\n";
echo "Shortest string for string3: " .$shortestString3 . "\n";
?>