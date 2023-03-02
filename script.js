var fullname = prompt("Please enter your full name:");
document.getElementById("fname").innerHTML = fullname;

var username = prompt("Please enter your username:");
document.getElementById("username").innerHTML = username;

var gender = confirm("What is your gender?\nPress OK if you are Male\nCancel if Female");
if(gender == true){
    document.getElementById("gender").innerHTML = "M";
    alert("Your profile gender is set to MALE");
} else{
    document.getElementById("gender").innerHTML = "F";
    alert("Your profile gender is set to FEMALE");
}

var description = prompt("Please type a brief description of yourself");
document.getElementById("desc").innerHTML = description;

var year = prompt("Please enter your Birth Year:");
document.getElementById("year").innerHTML = parseInt(year);
document.getElementById("age").innerHTML = 2023 - parseInt(year);

var profile = confirm("Do you want to use a custom profile picture?");
if(profile == true){
    document.getElementById("ppic").src = prompt("Please enter the file name of the picture. (Ex: wow.jpg");
} else{
    alert("No image has been set.");
}