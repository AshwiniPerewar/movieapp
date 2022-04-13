document.querySelector("form").addEventListener("submit",logIn)
        
function logIn()
{
    event.preventDefault();
    var enterEmail=document.querySelector("#email").value;
    var enterPwd=document.querySelector("#pwd").value;

var data=JSON.parse(localStorage.getItem("signupData"));

for(var i=0;i<data.length;i++)
{
    if(data[i].email==enterEmail && data[i].password==enterPwd)
    {
        window.location.href="index.html";
    }
    else{
        alert("Invalid credentials");
    }
}

}
