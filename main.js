function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-WmwgN6dn/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    
    document.getElementById("result_label").innerHTML = 'I can hear - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
    (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('Bird');
    img1 = document.getElementById('Cat');
    img2 = document.getElementById('Dog');
    img3 = document.getElementById('Cow');
    img4 = document.getElementById('Tiger');

    if(results[0].label == "Birds Chirping") {
        img.src = "Bird1.gif"
        img1.src = "Cat.png"
        img2.src = "Dog.png"
        img3.src = "Cow.png"
        img4.src = "Tiger.png"
    } else if(results[0].label == "Cat Meowing") {
        img.src = "Bird.png"
        img1.src = "Cat1.gif"
        img2.src = "Dog.png"
        img3.src = "Cow.png"
        img4.src = "Tiger.png"
    } else if(results[0].label == "Dog Barking") {
        img.src = "Bird.png"
        img1.src = "Cat.png"
        img2.src = "Dog1.gif"
        img3.src = "Cow.png"
        img4.src = "Tiger.png"
    }else if(results[0].label == "Cow Mooing") {
        img.src = "Bird.png"
        img1.src = "Cat.png"
        img2.src = "Dog.png"
        img3.src = "Cow1.gif"
        img4.src = "Tiger.png"
    }else if(results[0].label == "Tiger or Lion Roaring") {
        img.src = "Bird.png"
        img1.src = "Cat.png"
        img2.src = "Dog.png"
        img3.src = "Cow.png"
        img4.src = "Tiger1.gif"
    }else{
        img.src = "Bird1.gif"
        img1.src = "Cat1.gif"
        img2.src = "Dog1.gif"
        img3.src = "Cow1.gif"
        img4.src = "Tiger1.gif"

    
    }
    }
}