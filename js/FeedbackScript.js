var mapCheckFlag = false;
var dinnerCheckFlag = false;
var x = '';
var y = '';
var mapID = '';
var mapID2 = '';
var store = "";

async function texttospeech(dialog){
  voices = window.speechSynthesis.getVoices();
  console.log('Get voices ' + voices.length.toString());
  for(var i = 0; i < voices.length; i++ ) {
       console.log("Voice " + i.toString() + ' ' + voices[i].name);
     }



     $.ajaxSetup({async: false});
     showText="";
     sayText="";

     var analyzeArray;

    if(dialog.indexOf("hello")!=-1 || dialog.indexOf("Hello")!=-1 ||dialog.indexOf("Hi")!=-1 || dialog.indexOf("hi")!=-1)
      {
            showText += "<p>Hello Master. </p>";
            sayText += "Hello Master. "
       }
    if(dialog.indexOf("how are you")!=-1)
      {
            showText += "<p>Good Thanks, how about you? </p>";
            sayText += "Good Thanks, how about you?";
     }
     if(dialog == "my location" || dialog.indexOf("my location")!=-1){
      while(true){
        mapID = idGenerator(5);
        var test = document.getElementById(mapID);
        if(test == null) break;
      }

      while(true){
        mapID2 = idGenerator(5);
        var test = document.getElementById(mapID2);
        if(test == null) break;
      }

      mapCheckFlag = true;
      showText += "<p>I am checking your location, wait a minute </p>" +
        "<p id = '" + mapID + "'></p><br>" + 
        "<div id='" + mapID2 + "' style='width:600px;height:300px;'></div>";
      sayText += "I am checking your location, wait a minute ";
    }

    if(dialog.indexOf("the near restaurants") != -1 || dialog.indexOf("dinner") != -1){

      while(true){
        mapID = idGenerator(5);
        var test = document.getElementById(mapID);
        if(test == null) break;
      }

      var d = new Date();
      var n = d.getDay()

      switch(n) {
        case 1: store = "fastfood"; dinnerCheckFlag = true; break;
        case 2: store = "Western restaurant"; dinnerCheckFlag = true; break;
        case 3: store = "India restaurant"; dinnerCheckFlag = true; break;
        case 4: sotre = "Chinese restaurant"; dinnerCheckFlag = true; break;
        case 5: store = "Western and Korea restaurant"; dinnerCheckFlag = true; break;
        default: showText += "<p>I think you should cook in home today.</p>;"; sayText += "I think you should cook in home today."; break;
      }

      if(dinnerCheckFlag){
          sayText += "I am checking the nearest " + store + " that you may interesting for you.";
          showText += "<p>I am checking the nearest " + store + " that you may interesting for you.</p>" +
                      "<div id = '" + mapID +"' style='width:600px;height:300px;'></div>";
      }
    }

     if(dialog.indexOf("news") != -1 ){
        var title = topicAanalysis(dialog);

        showText += "<p>The later " + title + " news involve:</p>";
        sayText += "The later " + title + " news involve";
        var msg = getNews(title);
        showText += msg[0];
        sayText += msg[1];
     }
  

  //non-any keyword
  if(showText == ''){
    var emotion = await sentenceSegmenter(dialog);

    console.log(emotion);

    if(emotion == "pos"){
      var showText = "<p>I know you are quite happy right now, but I don't understand. </p>";
      var sayText = "I know you are quite happy right now, but I don't understand.";
    }
    else if(emotion == "neg"){
      var showText = "<p>I know you are a bit sad, but I don't understand. </p>";
      var sayText = "I know you are a bit sad, but I don't understand.";
    }
    else{
      var showText = "<p>Sorry, I don't understand. </p>";
      var sayText = "Sorry, I don't understand.";
    }
  }

  showsomething(showText);

   var u1 = new SpeechSynthesisUtterance(sayText);
       u1.lang = 'en-US';
       u1.pitch = 1;
       u1.rate = 1;
       u1.voice = voices[9];
       u1.voiceURI = 'native';
       u1.volume = 1;
  
  
  //if the computer is responding, the system stops recognising speech.
  u1.onstart = function(){

    recognition.stop();
    //reset();
  }
  //if the computer finishes responding, the system restarts recognising speech.
  u1.onend = function(event) {
    recognition.stop();
    recognizing = false;
   }
  
  speechSynthesis.speak(u1);
  //console.log("Voice " + u1.voice.name);
}