function formValidate(){
    var stop=true;
    let name=document.form.hesar.value;

    if(name==null || name.length<3){
        setError('div1','Name should not be null & it should be more than 3 chars');
        stop=false;
    }
    return stop;
}
function setError(id,errorMessage){
    var element=document.getElementById(id);
    element.getElementsByClassName('errorClass')[0].innerHTML=errorMessage;
}
function showDate(){
    document.getElementById('btn1').innerHTML=Date();
}
function showValue(){
    const technologies=['java','python','c++'];
    const pairValues={oops:'java',oldLang:'c++'}

    console.log(technologies);
    console.log(pairValues);
}
function showProgram(){
    window.open('https://www.youtube.com/watch?v=_z8UyrLlM7k');
}