const nameError=document.getElementById("err1");
const mailError=document.getElementById("err2");
const addressError=document.getElementById("err");
//const password2Error=document.getElementById("err4");
const submitError=document.getElementById("err5");
//const courseError=document.getElementById("err6");
//const genderError=document.getElementById("err7");
function validationname(){
    let name=document.getElementById("username").value;
    if(name===""){
        nameError.innerHTML="enter the name";
         return false;
    }
    if(!name.match(/^[a-zA-z]+$/)){
        nameError.innerHTML=" enter the valid name";
        return false;
    }
    nameError.innerHTML="";
    return true;
}
function validationmail(){
    let mail=document.getElementById("mail").value;
    if(mail===""){
        mailError.innerHTML="enter the mail";
         return false;
    }
    if(!mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+?:\.[a-zA-Z0-9-]+)*$/)){
        mailError.innerHTML=" enter the valid mail";
        return false;
    }
       mailError.innerHTML=""
        return true;

}
function validationadd(){
    let add=document.getElementById("add").value;
    if(add===""){
        addressError.innerHTML="enter the address";
         return false;
    }
    addressError.innerHTML=""
    return true;
}
function validationform(){
    if(validationname() || validationmail()|| validationadd()){
     return false;
    }
    
}