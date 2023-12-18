<?php
function calc($nbr1, $operator, $nbr2) {
    switch ($operator) {
        case '+':
            return $nbr1 + $nbr2;
        case '-':
            return $nbr1 - $nbr2;
        case '*':
            return $nbr1 * $nbr2;
        case '/':
            if ($nbr2 != 0) {
                return $nbr1 / $nbr2;
            } else {
                return "Cannot divide by 0";
            }
        case '%':
            if ($nbr2 != 0) {
                return $nbr1 % $nbr2;
            } else {
                return "Cannot divide by 0";
            }
        default:
            return "Unknown operator";
    }
}

// Example usage:
$result = calc(1, '+', 3); 
echo "Result: " . $result . "\n";

$result = calc(7, '*', 6); 
echo "Result: " . $result . "\n";

$result = calc(4, '/', 3); 
echo "Result: " . $result . "\n";

$result = calc(4, '+/', 2); 
echo "Result: " . $result . "\n";

$result = calc(4, '/', 0); 
echo "Result: " . $result . "\n";
?>