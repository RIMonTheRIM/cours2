let emailTxt;
document.getElementById("gen").onclick = function(){
    const date = new Date();
    nom = document.getElementById("Nom").value;
    prenom = document.getElementById("Prenom").value;
    dateTxt =date.getFullYear();
    emailTxt = prenom.charAt(0)+nom+dateTxt+"@supinfo.com";
    emailTxt = emailTxt.toUpperCase();
    console.log(emailTxt);
    
    document.getElementById("email").setAttribute("value",emailTxt);
    let labelList = document.getElementsByTagName("label");
    for(var i = 0; i<labelList.length;i++){
        labelList[i].style.color = "rgb(56, 207, 56)";
    }
}