function formValidate(){
    var stop=true;
    let name=document.clickForm.name.value;

    if(name==null || name.length<3){
        alert('stop')
        setError('err','name should not be null and less than 3 char');
        stop=false;
    }
    return stop;
    
}
function setError(id,errorMessage){
    var element=document.getElementById(id);
    element.getElementsByClassName('errorClass')[0].innerHTML=errorMessage;
}
function showValue(){
    const technologies=['java','python','c++'];
    const pairs={prorams:'java',lang:'yes'};

    console.log(technologies);
    console.log(pairs);
}
function showDate(){
    document.getElementById('btn1').innerHTML=Date();
}
function showProgram(){
    window.open('https://www.youtube.com/');
}