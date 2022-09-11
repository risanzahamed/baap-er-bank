document.getElementById("btn-submit").addEventListener("click", function (){

    const emailFeild = document.getElementById("user-email");
    const email = emailFeild.value;
    
    const passwordFeild = document.getElementById("user-password")
    const password = passwordFeild.value

    console.log(email, password)

    if(email === "bapperbank@gmail.com" && password === "bapersontan"){
        location.href = "bank-inside.html";
    }
    else(
        console.log("Please put the right one")
    )
})