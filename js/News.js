function getNews(topic){
    var showText = '';
    var sayText = '';
    if(topic == "")
        topic = "news";

    $.ajax({
        url: "https://www.googleapis.com/customsearch/v1",
        data: { 
            "key": "AIzaSyAM41v4IyTPJG2YfV75W4-7PU2RT7Tq8XQ", 
            "cx": "018338818209186546929:wy1izeomlei", 
            "q": topic
        },
        type: "GET",
        success: function(response) {
            showText += "<ul>";
            for (var i = 0; i < response.items.length; i++) {
                var item = response.items[i];
                showText += "<li><a href='" + item.link + "'>" + item.htmlTitle + "</a></li>";
                sayText += item.htmlTitle;
            }
            showText += "</ul>";
        },
        error: function(xhr) {
            showText += "<p>Sorry, I cannot reach Internet</p>";
            sayText += "Sorry, I cannot reach Internet";
        }
    });

    return [showText, sayText];
}

function topicAanalysis(dialog){
    $.ajax({
        url: "./controller/noun_phrase.php",
        data: {text: dialog},
        success: function (data) {
          analyzeArray = JSON.parse(data);
        }
      });
      var title = "";

      for(var i = 0; i < analyzeArray.result.length; i++){
        console.log(analyzeArray.result[i].indexOf("sport news"));

        if(analyzeArray.result[i].indexOf("sport news") >= 0 && title.indexOf("sport") == -1){
          
          if(title == "")
            title += "sport";
          else
            title += "and sport";
        }
        else if((analyzeArray.result[i].indexOf("economy news") >= 0 && title.indexOf("economy") == -1) || (analyzeArray.result[i].indexOf("financial news") == 0 && title.indexOf("financial"))){
          if(title == "")
            title += "economy";
          else
            title += "and economy";
        }
        else if(analyzeArray.result[i].indexOf("technology news") >= 0 && title.indexOf("technology") == -1){
          if(title == "")
            title += "technology";
          else
            title += "and technology";
        }
        else if(analyzeArray.result[i].indexOf("entertainment news") >= 0 && title.indexOf("entertainment") == -1){
          if(title == "")
            title += "entertainment";
          else
            title += "and entertainment";
        }
      }

      return title;
}