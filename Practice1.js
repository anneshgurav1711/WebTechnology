function changeH1(){
    document.getElementById('h1Id').innerHTML='Its a Java Script';
    document.getElementById('h1Id').style.color='red'
}
function formValidation(){

    var name=document.Form.name.value;
    var email=document.Form.email.value;
    var pass1=document.Form.pass1.value;
    var pass2=document.Form.pass2.value;
    var phone=document.Form.num.value;

    if(name==null || name==''){
        alert('Name should not be null or empty')
    }
    if(email==null || email.length<6){
        alert('Email should be atleast 6 characters')
    }
    if(pass1==pass2){
        alert('Password matches')
    }else{
        alert('Password not matches')
    }
    if(isNaN(phone) || phone.length>10 && phone.length<20){
        alert('Number is valid')
    }else{
        alert('please enter a valid number');
    }


    
    console.log('Name>>>',name);
    console.log('Email>>>',email);
    console.log('Password>>>',pass1);
    console.log('Confirm Password>>>',pass2);
    console.log('Mob No>>>',phone);
    

}