<?php
function discover_type($name, $age, bool $isStudent, float $gpa) {
    if ($isStudent) {
            echo "Hello my name is $name, I'm $age years old. I'm a student at Epitech with a GPA of $gpa.";
        
    } else {
        echo "Hello my name is $name, I'm $age years old. I'm not a student.";
    }
}


$name = "Maria";
$age = 21;
$isStudent = true;
$gpa = 3.53;

discover_type($name, $age, $isStudent, $gpa);

?>