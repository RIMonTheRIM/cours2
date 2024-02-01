let emailTxt;

document.getElementById("gen").onclick = function(){

    let nom = document.getElementById("Nom");
    let prenom = document.getElementById("Prenom");

        const date = new Date();
        dateTxt =date.getFullYear();
        emailTxt = prenom.value.charAt(0)+nom.value+dateTxt+"@supinfo.com";
        emailTxt = emailTxt.toUpperCase();
        console.log(emailTxt);
        document.getElementById("email").value = emailTxt;

        let labelList = document.querySelectorAll("label");
        for(var i = 0; i<labelList.length;i++){
            labelList[i].style.color = "rgb(56, 207, 56)";
            let valueTxt = labelList[i].innerHTML;
            valueTxt = valueTxt.toUpperCase();
            labelList[i].innerHTML = valueTxt;
        }
    }

document.getElementById("eff").onclick = function(){
    document.getElementById("Prenom").value = "";
    document.getElementById("Nom").value = "";
    document.getElementById("email").value = "";
    let labelList = document.querySelectorAll("label");
        for(var i = 0; i<labelList.length;i++){
            labelList[i].style.color = "rgb(0, 0,0)";
            let valueTxt = labelList[i].innerHTML;
            valueTxt = valueTxt.toLowerCase();
            labelList[i].innerHTML = valueTxt;
        }
}