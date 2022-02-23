

function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/m9zT23cZJ/model.json",modelready);
}

function modelready(){
    classifier.classify(gotresults);
}

dog=0;
cat=0;
horse=0;


function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML="Detected Voice Is Of: "+results[0].label;
        img=document.getElementById("animal_image");
        if(results[0].label=="DOG"){
            img.src="dog.png";
        }
        else if(results[0].label=="CAT"){
            img.src="cat.png";
        }
        else if(results[0].label=="Horse"){
            img.src="horse.png";
        }
        else{img.src="ques.png"}
    }
}


