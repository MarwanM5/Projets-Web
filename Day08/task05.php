<?php
function calc_average ($numbers) {
    $sum = array_sum($numbers);
    $count = count($numbers);
    $average = $sum / $count;

    $rounded_average = round($average, 1);

    return $rounded_average;
}

$numbers = [1, 4, 28, 12, 3, 4, 4, 27];
$average = calc_average($numbers);
echo "Average: $average ";
?>