<?php


$lat=$_GET["lat"];
$long=$_GET["long"];
$type=$_GET["type"];

$details_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=$lat,$long&types=$type&sensor=false&rankby=distance&key=AIzaSyDzPtJq7Dlpr9oOUMBOMH3rkp3m4uq2LxY";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $details_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$geoloc = json_decode(curl_exec($ch), true);

header('Content-type: application/javascript');
header("Access-Control-Allow-Origin: *");

echo json_encode($geoloc);

?>