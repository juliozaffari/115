function startClassification(){
    navigator.mediaDevices.getUserMidia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bCTvRuk6b/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
