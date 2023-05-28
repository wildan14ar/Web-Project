function showpsw(mar) {
    if (mar == "s1") {
        var x = document.getElementById("psw1");
    } else {
        var x = document.getElementById("psw2");
    }
    if (x.type === "password") {
            x.type = "text";
    } else {
            x.type = "password";
    }
}

var psw1 = document.getElementById("psw1");
var psw2 = document.getElementById("psw2");
var length = document.getElementById("length");
var capital = document.getElementById("capital");
var letter = document.getElementById("letter");
var symbol = document.getElementById("symbol");

// When the user clicks on the password field, show the message box
psw1.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
psw1.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
psw1.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(psw1.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
}

  // Validate capital letters
var upperCaseLetters = /[A-Z]/g;
    if(psw1.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
}

// Validate numbers
var numbers = /[0-9]/g;
    if(psw1.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

  // Validate length
    if(psw1.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    }

// Validate symbols
var numbers = /[!-/:-@[-`{-~]/g;
    if(psw1.value.match(numbers)) {  
        symbol.classList.remove("invalid");
        symbol.classList.add("valid");
    } else {
        symbol.classList.remove("valid");
        symbol.classList.add("invalid");
    }

    var active = document.getElementsByClassName("valid");
    var percentage = document.getElementsByClassName("percentage");
    percentage[0].setAttribute("style", "width: " + active.length/5*100 + "%");

    if(active.length <= 1) {
        msg.innerHTML = "Poor";
    }
    else if(active.length == 2) {
        msg.innerHTML = "Weak";
    }
    else if(active.length == 3) {
        msg.innerHTML = "Midium";
    }
    else if(active.length == 4) {
        msg.innerHTML = "Good";
    }
    else {
        msg.innerHTML = "Strong";
    }
}

function matchPassword() {
    if(active.length >= 4) { // psw1.value.match("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!-/:-@[-`{-~]).{8,}")
        if(psw1.value != psw2.value)  
        {   
            alert("Passwords did not match");  
        } else {  
            alert("Password created successfully");  
        }
    } else {
        alert("Password did not validate");
    }
} 