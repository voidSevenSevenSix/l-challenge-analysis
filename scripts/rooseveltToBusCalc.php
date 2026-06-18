<?php
include 'functions.php';

$currentRun = "008";

// first get arrival time at roosevelt
$greenArrivesAtRooseveltMin = getRunArrivalTimeAtStopIdMinuteTimestamp($currentRun, 30080);
echo "green arrives at ".$greenArrivesAtRooseveltMin."<br>";

// now find the first run to midway after that timestamp
$rooseveltSouthDepartures = getArrivalsAtStopIdMinuteTimestamp(30081);
var_dump($rooseveltSouthDepartures);
$orangeRun = 0;
foreach($rooseveltSouthDepartures as $departure){
    if($departure[1] == "Midway" && $departure[2] > $greenArrivesAtRooseveltMin){
        $orangeRun = $departure[0];
        break;
    }
}
echo "orange run ".$orangeRun."<br>";

// now find when it gets to midway
$orangeArrivesAtMidwayMin = getRunArrivalTimeAtStopIdMinuteTimestamp($orangeRun, 30182);
echo "orange arrives midway ".$orangeArrivesAtMidwayMin."<br>";

// find if there is an arrival scheduled for after
$busArrTime = 0;
$busArrivals = getBusArrivalsAtStopIdMinuteTimestamp(15761);
var_dump($busArrivals);
foreach($busArrivals as $arrival){
    if($arrival > $orangeArrivesAtMidwayMin){
        $busArrTime = $arrival;
        break;
    }
}

if($busArrTime != 0){
    echo "Total time from green arriving at roosevelt to boarding a 54B: ".($busArrTime-$greenArrivesAtRooseveltMin)." minutes";
}