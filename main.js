function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nvkp3Wa3M/model.json',modelready )
}
function modelready(){
    classifier.classify(gotresults);

}
function gotresults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results)};
    document.getElementById("result_label").innerHTML="i can hear- "+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+" %";
img=document.getElementById("qwerty");
if (results[0].label=="cat"){
    img.src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.rawpixel.com%2Fimage_png_800%2FczNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvZmw0MzIzNTUxMDY1MC1pbWFnZS0wMV82LnBuZw.png%3Fs%3DxglUKD79VzyWC4winp5-cct7YB5SJJ7zPxJNjkqCwF8&imgrefurl=https%3A%2F%2Fwww.rawpixel.com%2Fsearch%2Fcat%2520transparent&tbnid=DbseGqDh3AFuQM&vet=12ahUKEwiFkaSV49T5AhVKndgFHenPBTEQMygCegUIARDiAQ..i&docid=cFk1lCUV4uWDPM&w=800&h=800&q=cat%20transparent%20background&ved=2ahUKEwiFkaSV49T5AhVKndgFHenPBTEQMygCegUIARDiAQ';
}
else if (results[0].label=="lion"){
    img.src='http://clipart-library.com/img/1633551.png';
}
else if (results[0].label=="goat"){
    img.src='https://i.pinimg.com/originals/59/ee/89/59ee89bf48fb9b82441ca487c92d6637.png';
}
else {
    img.src='https://www.dafont.com/img/illustration/b/a/background_noise.png';
}
}