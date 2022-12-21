var submit = document.getElementById("button");
submit.addEventListener('click', login)

function login() 
{
    var name = document.getElementById("name").value;
    var pass = document.getElementById("password").value;
    if (name == "Sudeep" && pass==12345) 
    {
        alert("Login Successfully");
        location.href="form.html"
    }
    else if (name == "Johnny" && pass == 54321) 
    {
        alert("Login Successfully");
        location.href="form.html"
    }
    else {
        alert("Name or Password is incorrect!");
    }

}