<?php
error_reporting(E_ALL ^ E_WARNING); 

$strings = json_decode($_GET['array'], true);

$a=array($strings);

    require_once __DIR__ . '\autoload.php';
    $sentiment = new \PHPInsight\Sentiment();

    $pos = 0;
    $neg = 0;
    $neu = 0;

    foreach ($a[0][sentences] as $string) {
        // calculations:
        $scores = $sentiment->score($string);

        $pos += $scores[pos];
        $neg += $scores[neg];
        $neu += $scores[neu];
        
    }

    $peak = max($pos, $neg, $neu);

    switch ($peak) {
        case $neu:
            echo "neu";
            break;
        case $neg:
            echo "neg";
            break;
        case $pos:
            echo "pos";
            break;
    }
?>