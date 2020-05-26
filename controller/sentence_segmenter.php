<?php
function RequestCURL($url,$header=array(),$postArr='') {
    $post = http_build_query($postArr, '&');
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HTTPHEADER,$header);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_TIMEOUT, 30);
    if (!empty($post)) {
    curl_setopt($curl, CURLOPT_POST,true);
    curl_setopt($curl, CURLOPT_POSTFIELDS,$post);
    }
    $data = curl_exec($curl);
    curl_close($curl);
    return $data;
}

$text = $_GET["text"];

$response = RequestCURL('https://textanalysis.p.rapidapi.com/nltk-sentence-segmentation',array(
    "X-Mashape-Key: f307e8c15bmsh12a9999f8a354ecp170db1jsncd3de722005f",
    "Content-Type: application/x-www-form-urlencoded",
    "Accept: application/json"
    ), array(
 "text" => "$text"
 ));

 echo $response;
?>