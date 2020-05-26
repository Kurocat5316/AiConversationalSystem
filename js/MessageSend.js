function sendMessage(){
    if(document.getElementById('final_span').value == "")
        return;

    var text = "<p>" + document.getElementById('final_span').value + "</p>";
    var sender = "user";

    messageShow(sender, text);

    texttospeech(document.getElementById('final_span').value);

    document.getElementById("final_span").value = "";
}

function messageShow(sender, text){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    if(sender == "user"){

        var str = "<div class='container darker'>" + 
                "<img src='./img/user/cat.jpg' alt='Avatar' class='right' style='width:100%;'>" +
                text +
                "<span class='time-left'>" + time + "</span>" +
            "</div>";
    }
    else{
        var str = "<div class='container'>" +
                    "<img src='./img/user/ai.jpg' alt='Avatar' style='width:100%;'>" +
                    text + 
                    "<span class='time-right'>" + time + "</span>" +
                    "</div>";
    }

    document.getElementById("dialogbox").innerHTML += str;

    var elem = document.getElementById('dialogbox');
    elem.scrollTop = elem.scrollHeight;
}