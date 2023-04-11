var address;
const technologies=['java','python','c++'];
const course={program:'java',program:'python'};



function showValue(){
    console.log(technologies);
    console.log(course);
}



function formValidate() {
   
    var returnFormValidate = true;
    let name = document.formName.nameName.value;
    let email=document.formName.email.value;
   // let phone=document.formName.mob.value;
    console.log(name);
    console.log(email);
     
    if (name.length== null || name.length < 3) {
        document.getElementById('sm').innerHTML = 'Name should not be null & it should be more than 3 char';
        document.getElementById('sm').style.color = 'red';
        returnFormValidate=false;
    }
    if(email.length==null || email.length < 6){
       setError('div1','email should more than 6 char');
        returnFormValidate=false;
    }
    // if(phone==null || phone.length<10){
    //     alert('stop2')
    //     document.getElementById('ph').innerHTML='Phone no. should contain 10 digits and its should not be null';
    //     document.getElementById('ph').style.color='red';
    //     returnFormValidate=false;
    // }


    return returnFormValidate;
}
function setError(id,errorMessage){
    let element=document.getElementById(id);
    document.getElementsByClassName('errorClass')[0].innerHTML=errorMessage;
}

function showDate(){
    document.getElementById('btn1').innerHTML=Date();
}