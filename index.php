<!DOCTYPE html>


<head>
<link rel="stylesheet" type="text/css" href="./style/chatbox.css">
<link rel="stylesheet" type="text/css" href="./style/original.css">
<link rel="stylesheet" type="text/css" href="./style/button.css">
</head>
<style>
    
</style>

<meta charset="utf-8">
<title>Assignment 3</title>

<div id = "dialogbox" class = "dialogbox">
    

    <div class="container darker">
    <img src="./img/user/cat.jpg" alt="Avatar" class="right" style="width:100%;">
    <p>Hello. How are you today? </p>
    <span class="time-left">11:00</span>
    </div>

    <div class="container">
    <img src="./img/user/ai.jpg" alt="Avatar" style="width:100%;">
    <p>Hey! I'm fine. Thanks for asking!</p>
    <span class="time-right">11:01</span>
    </div>
</div>

<div class = "fixed">
    <div class="right">
    <button id="start_button" onclick="startButton(event)">
        <img id="start_img" src="./img/mic.gif" alt="Start"></button>
    </div>

    <div id="results">
        <div id="info">
            <p id="info_start">Click on the microphone icon and begin speaking.</p>
            <p id="info_speak_now">Speak now.</p>
            <p id="info_no_speech">No speech was detected. You may need to adjust your
            <a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">
                microphone settings</a>.</p>
            <p id="info_no_microphone" style="display:none">
            No microphone was found. Ensure that a microphone is installed and that
            <a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">
            microphone settings</a> are configured correctly.</p>
            <p id="info_allow">Click the "Allow" button above to enable your microphone.</p>
            <p id="info_denied">Permission to use microphone was denied.</p>
            <p id="info_blocked">Permission to use microphone is blocked. To change,
            go to chrome://settings/contentExceptions#media-stream</p>
            <p id="info_upgrade">Web Speech API is not supported by this browser.
            Upgrade to <a href="//www.google.com/chrome">Chrome</a>
            version 25 or later.</p>
        </div>

        <textarea placeholder="Type message or speech.." id="final_span" required></textarea>
    </div>
    <br>
    <div class="left">
            <div id="div_language">
                <select id="select_language" onchange="updateCountry()"></select>
                &nbsp;&nbsp;
                <select id="select_dialect"></select>
            </div>
    </div>

    <div class="right">
        <a class="myButton" onclick="sendMessage()">Send</a>
    </div>

</div>


<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="http://maps.googleapis.com/maps/api/js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAM41v4IyTPJG2YfV75W4-7PU2RT7Tq8XQ&libraries=places"></script> 
<script type="text/javascript" src="js/IDGenerator.js"></script>
<script type="text/javascript" src="js/ChatMangement.js"></script>
<script type="text/javascript" src="js/MessageSend.js"></script>
<script type="text/javascript" src="js/location.js"></script>
<script type="text/javascript" src="js/FeedbackScript.js"></script>
<script type="text/javascript" src="js/News.js"></script>
<script type="text/javascript" src="js/Emotion.js"></script>
<script type="text/javascript" src="js/RestaurantSearch.js"></script>