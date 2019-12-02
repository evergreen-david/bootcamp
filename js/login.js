const thisIsUsername = document.getElementById('username_');
const thisIsCode = document.getElementById('code');
const thisIsPassword = document.getElementById('password_');

function checkBothInputs(e) {
    // let checkInputString = document.getElementById('checkString');

    // thisIsCode.innerHTML = event.keyCode;
    // checkInputString.innerHTML = String.fromCharCode(event.keyCode);

    var checkInputUsername = document.getElementsByClassName('user_or_password_input')[0].value;
    // document.getElementById("checkUsername").innerHTML = checkInputUsername;
    
    var checkInputPassword = document.getElementsByClassName('user_or_password_input2')[0].value;
    // document.getElementById("checkPassword").innerHTML = checkInputPassword;

    if( (checkInputUsername !== "") && (checkInputPassword !== "")) // if there is a string in both inputs
    {
        // alert(true); // debugging code
        var changeButton = document.getElementById('my_button');
        changeButton.style.backgroundColor = "blue";

    }
    else
    {
        // alert(false)
        var changeButton = document.getElementById('my_button');
        changeButton.style.backgroundColor = "white";
    }
}

thisIsUsername.addEventListener('keyup', checkBothInputs);
thisIsPassword.addEventListener('keyup', checkBothInputs);
