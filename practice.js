function changeH1() {
    document.getElementById('h1Id').innerHTML = 'Java Script';
    document.getElementById('h1Id').style.color = 'red';
}

function changeP1() {
    var abc = document.getElementById('pTag').innerHTML;
    var abc = 'changed';
    console.log('abc>>>', abc);
    alert(abc)
}

function letMakeItEnglish() {
    var englishWord = document.getElementById('newTag').innerHTML;
    console.log('Word:', englishWord);
}

function formValidation() {
    // var names=document.formName.namesId.value;
    let emailValue = document.formName.emailName.value;
    alert(emailValue)
    console.log('emailValue>>>', emailValue);
}

