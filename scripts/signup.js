function signUp()
{
    event.preventDefault();
let name1=document.querySelector("#name1").value;
let contact1=document.querySelector("#contact").value;
let email1=document.querySelector("#email").value;
let pwd1=document.querySelector("#pwd").value;

let data=(JSON.parse(localStorage.getItem("signupData")) || []);

if(name1=="" || contact1=="" || email1=="" || pwd1=="")
{
    alert("All Fields are mandatory");
    return  false;
}
else
{

var signupData=
    {
        name:name1,
        contact:contact1,
        email:email1,
        password:pwd1,
    };


data.push(signupData);
alert("Sign up successfully");
localStorage.setItem("signupData",JSON.stringify(data));

}
}