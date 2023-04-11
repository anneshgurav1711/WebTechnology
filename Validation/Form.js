function changeH3() {
    var abc = document.getElementById('h2Tag').innerHTML = 'Admssion Details Submitted';
    document.getElementById('h2Tag').style.color = "red";
  
    console.log('abc>>>', abc)
  }
  function image() {
    document.getElementById("img1").src = "newImg.jpg";
  }
  function form2Validation() {
    var val=true;
    var name=document.documentForm.name2.value;
    var email=document.documentForm.eMail2.vale;
    var contNo=document.forms['documentForm']['phone2'].value;
  

    if(contNo.length != 10){
      document.getElementById('phone1').innerHTML='*Please enter 10 digits';
      return false;
    }
  
  
    if (email.length < 8) {
      alert('email must contain atleast 8 characters');
    }
    if (schoolName == 'PGHS') {
      alert('It is a good school');
    }
    if (sslcPerc >= 90) {
      alert('First class');
    } if (sslcPerc >= 85 && sslcPerc < 90) {
      alert('Distinction');
    } if (sslcPerc < 85) {
      alert('Average');
    }
    if (yrOfPassing == '2022') {
      alert('Fresher');
    }
    else {
      alert('Experienced');
    }
    if(val==true){
      alert('Form Submitted');
      changeH3();
    }
  return val;
  
  }
  function resetValidation(){
    if(val==true){
      
    }
  }