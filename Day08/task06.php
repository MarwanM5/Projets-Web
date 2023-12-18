<?php
function generateSequence($n) {
    if ($n < 0) {
        return;
    }

    $sequence = ["1"];

    for ($i = 1; $i <= $n; $i++) {
        $current = $sequence[$i - 1];
        $next = "";
        $count = 1;
        $len = strlen($current);

        for ($j = 0; $j < $len; $j++) {
            if ($j + 1 < $len && $current[$j] === $current[$j + 1]) {
                $count++;
            } else {
                $next .= $count . $current[$j];
                $count = 1;
            }

        }

        $sequence[] = $next;
    }

    foreach ($sequence as $item) {
        echo "$item\n";
    }
}

generatesequence(3);

?>