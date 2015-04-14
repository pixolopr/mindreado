<?php


$address=$_GET["address"];


$details_url = "https://maps.googleapis.com/maps/api/geocode/json?address=$address&key=AIzaSyDzPtJq7Dlpr9oOUMBOMH3rkp3m4uq2LxY";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $details_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$geoloc = json_decode(curl_exec($ch), true);

header('Content-type: application/javascript');
header("Access-Control-Allow-Origin: *");
if($geoloc["results"][0])
{
echo json_encode($geoloc["results"][0]["geometry"]["location"]);
}
else
{
echo "false";
}

?>