function changeH1(){
    document.getElementById('h1Id').innerHTML='Form Registered';
    document.getElementById('h1Id').style.color='red';
}
function changeP1(){
    var abc=document.getElementById('pTag').innerHTML;
    var abc='changed'
    console.log('abc value>>>',abc);
    alert(abc);
}

function letMakeItEnglish(){
    var englishWords=document.getElementById('newPTag').innerHTML;
    console.log(englishWords);
}

function formValidation(){
    
    var name=document.newForm.name.value;
    var email=document.newForm.email.value;
    var password1=document.newForm.pass1.value;
    var password2=document.newForm.pass2.value;
    var numValidate=document.newForm.num.value;
    

    if(name==null || name==' '){
        alert('name should not be null')
    }

    if(email==null || email.length<6){
        alert('email should at least 6 characters')
    }
    if(password1==password2){
        alert('password matches')
    }else{
        alert('password doesnt matches')
    }
    if(isNaN(numValidate) || numValidate>10 || numValidate<20 ){
        alert('Please enter valid num & greater than 10')
    }else{
        alert('Please enter number less than 20')
    }
    
    console.log('name>>>',name)
    console.log('email>>>',email)
    console.log('Password1>>>',password1)
    console.log("Password2>>>",password2)
    console.log("Phone>>>",numValidate)
    
}
