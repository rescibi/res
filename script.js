
function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const comment = document.getElementById("comment").value;
    const date = document.getElementById("date").value;
    
   
    const nameError = document.getElementById("name-error");
    
    const addressError = document.getElementById(
        "address-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );
    const passwordError = document.getElementById(
        "password-error"
    );
    const commentError = document.getElementById("comment-error");
    const dateError = document.getElementById("date-error");
    
   

    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    commentError.textContent = "";
    dateError.textContent = "";
     
    

    let isValid = true;
    if(date === ""){
        dateError.textContent = " please select a date";
        isValid = false;
    }
    if(comment === ""){
        commentError.textContent = " please type some comment";
        isValid = false;
    }

    if (name === "" ) {
        nameError.textContent =
            "Please enter your number properly.";
        isValid = false;
    }

    if (address === "") {
        addressError.textContent =
            "Please enter your address.";
        isValid = false;
    }

    if (email === "" || !email.includes("@") || !email.includes (".")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }
    if(isValid === true)
        alert("form submitted");

   return isValid;
}
