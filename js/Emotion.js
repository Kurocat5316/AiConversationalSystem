async function sentenceSegmenter(dialog){
    console.log(dialog);
    var emotion = "";
    await $.ajax({
        url: "./controller/sentence_segmenter.php",
        data: {"text": dialog},
        success: function (data) {
            data = data.substring(0, data.length - 1);
            emotion = emotionCheck(data);
            console.log(emotion);
        },
        error: function(xhr) {
            return "";
        }
      });
    console.log(emotion);
    return emotion;
}

async function emotionCheck(array){
    var emotion1 = "";
    await $.ajax({
        url: "./controller/emotion.php",
        data: {"array": array},
        success: function (emotion) {
            emotion1 = emotion;
            
        },
        error: function(xhr) {
            emotion1 = "";
        }
      });
    console.log(emotion1);
    return emotion1;
}