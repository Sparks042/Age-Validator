let userAge = document.getElementById("age");
let button = document.getElementById("button");
button.onclick = (e) => {
    e.preventDefault();
    if(userAge.value == ""){
        alert("Please Enter Your Age")
    }
    else if(userAge.value <18 || userAge.value >=40){
     alert("Not Elegible")
    }
    else if(userAge.value <40){
        alert("Elegible")
    }
}

