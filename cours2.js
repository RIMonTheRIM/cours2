//ecrire un programme qui demande à l'utilisateur de donner un entier, 
//le pg détermine et affiche sa table de multiplication dans la page html
document.body.style.backgroundColor = "lightgray";
let num;
let res = "";
document.getElementById("enter").onclick = function(){
    num = document.getElementById("num").value;
   
   
    /* console.log(num);
    for(let i=1; i<=10;i++){
        strNum = "<br/>"+num+" x "+i+" = "+(num*i);
        res += strNum;
    }
    document.getElementById("resultat").innerHTML = res; */

   
    let tableNum = document.getElementById("table");
    let lignes = tableNum.getElementsByTagName("tr");
    let cases;
    for(let i=1; i<=10;i++){
        let currentRow = lignes[i];
        cases = currentRow.getElementsByTagName("td");
        cases[0].innerHTML = num;
        cases[1].innerHTML = i;
        cases[2].innerHTML = (num*i);
    }
}

//écrire un programme qui demande à l'utilisateur de saisir et son prénom, générer et afficher l'email