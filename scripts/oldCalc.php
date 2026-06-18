<?php
// Chicago "L" challenge Green line split calculator
// Timed for south Green line split to be during rush (17 min departures from termini)
/*
Scenarios:

1. Took train to Ashland/63rd
Possible routing:
- 63 to Cottage Grove, Green to King Drive, 63 to 63rd Red (route 1)
- Green to Garfield, Green to Cottage Grove, 63 to 63rd Red (route 2)
- No third option due to King Drive not allowing eastbound boarding (route 3)

2. Took train to Cottage Grove
Possible routing: 
- 63 to Halsted, Green to Ashland, 63 to 63rd Red (route 4)
- 63 to Ashland, Green to Halsted, 63 to 63rd Red (route 5)
- Green to Garfield, Green to Ashland, 63 to 63rd Red (route 6)
*/

// For train calc
function timestampDiff($timestamp1, $timestamp2){
    $date1 = DateTime::createFromFormat('H:i:s', $timestamp1);
    $date2 = DateTime::createFromFormat('H:i:s', $timestamp2);
    $interval = $date1->diff($date2);
    $minutes = ($interval->h * 60) + $interval->i;
    return $minutes;
}

// Load all arrival time data
$trainAshlandData = json_decode(file_get_contents("https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?stpid=30056&outputType=json&max=5&key=8244c227116548aab596807fc6771eff"), true)["ctatt"]["eta"];
$trainAshlandArrivalArray = [];
foreach($trainAshlandData as $train){
    array_push($trainAshlandArrivalArray, timestampDiff(explode("T",$train["prdt"])[1], explode("T",$train["arrT"])[1]));
}
array_push($trainAshlandArrivalArray, $trainAshlandArrivalArray[count($trainAshlandArrivalArray)-1] + 17);
$trainHalstedData = json_decode(file_get_contents("https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?stpid=30184&outputType=json&max=5&key=8244c227116548aab596807fc6771eff"), true)["ctatt"]["eta"];
$trainHalstedArrivalArray = [];
foreach($trainHalstedData as $train){
    array_push($trainHalstedArrivalArray, timestampDiff(explode("T",$train["prdt"])[1], explode("T",$train["arrT"])[1]));
}
array_push($trainHalstedArrivalArray, $trainHalstedArrivalArray[count($trainHalstedArrivalArray)-1] + 17);
$trainCottageData = json_decode(file_get_contents("https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?stpid=30140&outputType=json&max=5&key=8244c227116548aab596807fc6771eff"), true)["ctatt"]["eta"];
$trainCottageArrivalArray = [];
foreach($trainCottageData as $train){
    array_push($trainCottageArrivalArray, timestampDiff(explode("T",$train["prdt"])[1], explode("T",$train["arrT"])[1]));
}
array_push($trainCottageArrivalArray, $trainCottageArrivalArray[count($trainCottageArrivalArray)-1] + 17);
$trainGarfieldData = json_decode(file_get_contents("https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?stpid=30100&outputType=json&max=5&key=8244c227116548aab596807fc6771eff"), true)["ctatt"]["eta"];
$trainGarfieldToCottageArrivalArray = [];
$trainGarfieldToAshlandArrivalArray = [];
foreach($trainGarfieldData as $train){
    if($train["destSt"] == "30057"){
        array_push($trainGarfieldToAshlandArrivalArray, timestampDiff(explode("T",$train["prdt"])[1], explode("T",$train["arrT"])[1]));
    }
    else{
        array_push($trainGarfieldToCottageArrivalArray, timestampDiff(explode("T",$train["prdt"])[1], explode("T",$train["arrT"])[1]));
    }
}
array_push($trainGarfieldToAshlandArrivalArray, $trainGarfieldToAshlandArrivalArray[count($trainGarfieldToAshlandArrivalArray)-1] + 17);
array_push($trainGarfieldToCottageArrivalArray, $trainGarfieldToCottageArrivalArray[count($trainGarfieldToCottageArrivalArray)-1] + 17);
$busAshland = json_decode(file_get_contents("https://ctabustracker.com/bustime/api/v3/getpredictions?key=zmEgS7LdMECVQ7KMXPPgfR4rK&format=json&stpid=3413"), true)["bustime-response"]["prd"];
$busAshlandArrivalArray = [];
foreach($busAshland as $bus){
    if($bus["prdctdn"] == "DUE"){
        array_push($busAshlandArrivalArray, 0);
    }
    else{
        array_push($busAshlandArrivalArray, (int)($bus["prdctdn"]));
    }
}
$busHalsted = json_decode(file_get_contents("https://ctabustracker.com/bustime/api/v3/getpredictions?key=zmEgS7LdMECVQ7KMXPPgfR4rK&format=json&stpid=15879"), true)["bustime-response"]["prd"];
$busHalstedArrivalArray = [];
foreach($busHalsted as $bus){
    if($bus["prdctdn"] == "DUE"){
        array_push($busHalstedArrivalArray, 0);
    }
    else{
        array_push($busHalstedArrivalArray, (int)$bus["prdctdn"]);
    }
}
$busCottage = json_decode(file_get_contents("https://ctabustracker.com/bustime/api/v3/getpredictions?key=zmEgS7LdMECVQ7KMXPPgfR4rK&format=json&stpid=3222"), true)["bustime-response"]["prd"];
$busCottageArrivalArray = [];
foreach($busCottage as $bus){
    if($bus["prdctdn"] == "DUE"){
        array_push($busCottageArrivalArray, 0);
    }
    else{
        array_push($busCottageArrivalArray, (int)($bus["prdctdn"]));
    }
}
$busKing = json_decode(file_get_contents("https://ctabustracker.com/bustime/api/v3/getpredictions?key=zmEgS7LdMECVQ7KMXPPgfR4rK&format=json&stpid=16077"), true)["bustime-response"]["prd"];
$busKingArrivalArray = [];
foreach($busKing as $bus){
    if($bus["prdctdn"] == "DUE"){
        array_push($busKingArrivalArray, 0);
    }
    else{
        array_push($busKingArrivalArray, (int)($bus["prdctdn"]));
    }
}

// Starting location is "cottage" || "ashland"
$currentLoc = $_GET["loc"];

// Constants for splits
$ashlandToRed = 14;
$cottageToRed = 18;
$halstedToRed = 4;
$halstedToAshland = 5;
$kingToRed = 5;
$ashlandToGarfield = 9;
$cottageToGarfield = 6;
$ashlandToCottage = 25;
$cottageToAshland = 25;
$cottageToHalsted = 14;
$cottageToKing = 3;

// For catchable calc (what is the headway once we get there?)
function effectiveSplit($arrivalsArray, $timeToLoc){
    foreach($arrivalsArray as $arrival){
        if($timeToLoc < $arrival){
            return $arrival-$timeToLoc;
        }
    }
}

$log = "";

if($currentLoc == "cottage"){
    $currentBestRoute = 4;
    $route = $busCottageArrivalArray[0] + $cottageToHalsted;
    $route += effectiveSplit($trainHalstedArrivalArray, $route) + $halstedToAshland;
    $route += effectiveSplit($busAshlandArrivalArray, $route) + $ashlandToRed;
    $log.="4:$route|";
    $currentBestTime = $route;
    $route = $busCottageArrivalArray[0] + $cottageToAshland;
    $route += effectiveSplit($trainAshlandArrivalArray, $route) + $halstedToAshland;
    $route += effectiveSplit($busHalstedArrivalArray, $route) + $halstedToRed;
    if($route < $currentBestTime){
        $currentBestRoute = 5;
        $currentBestTime = $route;
    }
    $log.="5:$route|";
    $route = $trainCottageArrivalArray[0] + $cottageToGarfield;
    $route += effectiveSplit($trainGarfieldToAshlandArrivalArray, $route) + $ashlandToGarfield;
    $route += effectiveSplit($busAshlandArrivalArray, $route) + $ashlandToRed;
    if($route < $currentBestTime){
        $currentBestRoute = 6;
        $currentBestTime = $route;
    }
    $log.="6:$route|";
}
else{
    $currentBestRoute = 1;
    $route = $busAshlandArrivalArray[0] + $ashlandToCottage;
    $route += effectiveSplit($trainCottageArrivalArray, $route) + $cottageToKing;
    $route += effectiveSplit($busKingArrivalArray, $route) + $kingToRed;
    $currentBestTime = $route;
    $log.="1:$route|";
    $route = $trainAshlandArrivalArray[0] + $ashlandToGarfield;
    $route += effectiveSplit($trainGarfieldToCottageArrivalArray, $route);
    $route += effectiveSplit($busCottageArrivalArray, $route) + $cottageToRed;
    if($route < $currentBestTime){
        $currentBestRoute = 2;
        $currentBestTime = $route;
    }
    $log.="2:$route|";
}
echo "$currentBestRoute|$currentBestTime";