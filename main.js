var submitbtn = document.getElementById("forbtn");


submitbtn.addEventListener("click", function () {

    var username = document.getElementById("username").value;
    var useremail = document.getElementById("usermail").value;
    var userphone = document.getElementById("userphone").value;
    var userdob = document.getElementById("userdob").value;



    localStorage.setItem("userName", username);
    localStorage.setItem("userEmail", useremail);
    localStorage.setItem("userPhone", userphone);
    localStorage.setItem("userDob", userdob);

    alert("Successfully saved to local storage!");
});