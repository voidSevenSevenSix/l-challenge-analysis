<?php
function getArrivalsAtStopIdMinuteTimestamp($id){ // returns array of [run, headsign, timestamp(min)]
    $arrivalData = json_decode(file_get_contents("https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?stpid=$id&outputType=json&max=15&key=8244c227116548aab596807fc6771eff"), true)["ctatt"]["eta"];
    $arrivals = [];
    foreach($arrivalData as $arrival){
        $run = $arrival["rn"];
        $dest = $arrival["destNm"];
        $timeComponents = explode(":", explode("T", $arrival["arrT"])[1]);
        $timeMinutes = (int)($timeComponents[0])*60 + (int)($timeComponents[1]) + (int)($timeComponents[2])/60;
        array_push($arrivals, [$run, $dest, $timeMinutes]);
    }
    return $arrivals;
}

function getRunArrivalTimeAtStopIdMinuteTimestamp($run, $stop){
    $arrivalData = json_decode(file_get_contents("https://lapi.transitchicago.com/api/1.0/ttfollow.aspx?runnumber=$run&key=8244c227116548aab596807fc6771eff&outputType=JSON"), true)["ctatt"]["eta"];
    foreach($arrivalData as $arrival){
        if($arrival["stpId"] == $stop){
            $timeComponents = explode(":", explode("T", $arrival["arrT"])[1]);
            $timeMinutes = (int)($timeComponents[0])*60 + (int)($timeComponents[1]) + (int)($timeComponents[2])/60;
            return $timeMinutes;
        }
    }
}

function getBusArrivalsAtStopIdMinuteTimestamp($id){
    $busArrivals = json_decode(file_get_contents("https://ctabustracker.com/bustime/api/v3/getpredictions?key=zmEgS7LdMECVQ7KMXPPgfR4rK&format=json&stpid=$id"), true)["bustime-response"]["prd"];
    $busArrivalArray = [];
    foreach($busArrivals as $bus){
        $timeComponents = explode(":", explode(" ", $bus["prdtm"])[1]);
        $timeMinutes = (int)($timeComponents[0])*60 + (int)($timeComponents[1]);
        array_push($busArrivalArray, $timeMinutes);
    }
    return $busArrivalArray;
}