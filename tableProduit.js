
//Button affiche product
function afficheListProduit(IdsButton) {
    let butnafich = document.getElementById(IdsButton)
    if (butnafich.style.display === "none" || butnafich.style.display === "") {
    butnafich.style.display = "flex" 
    } 
    else  {
    butnafich.style.display = "none" 
    }
}

// Dark Mode
function drkMode()  {
    let icons = document.getElementById('iconDarkMode');
    window.DrkMod.classList.toggle('DrkModee');
    document.body.classList.toggle("Mode");
    if (icons.className == "fa-solid fa-sun") {
        icons.className = "fa-solid fa-moon";
        icons.style = "color: #070b13";
    } else {
        icons.className = "fa-solid fa-sun";
        icons.style = "color: #f5f5f5";
    }
}  

let Refe = document.getElementById("Ref");
let Designation = document.getElementById("Desig");
let prix = document.getElementById("Prix");
let qtt = document.getElementById("Qtt");
let TvaOption = document.getElementById("Tva");
var arrTest = [];

// refe to desing
function updateText(ValueDesing) {
    // Define an array of references and corresponding designations
    const references = ["r1", "r2",'r3'];
    const designations = ["fraise", "Banane",'Lemon'];

    // Get the index of the reference in the array
    const index = references.indexOf(Refe.value); 

    // Check if the reference is found in the array
    if (index !== -1) {
        // If found, update the designation and color
        Designation.value = designations[index];
        Designation.style.color = 'black';
    } else {
        // If not found, set a default value and color
        Designation.value = "not defined";
        Designation.style.color = 'red';
    }
}





// Add product into table
function AddProduct() {
    event.preventDefault()

    if ( Refe.value != "" &&  Designation.value !== "not defined"  && prix.value != "" && qtt.value != ""  && TvaOption.value != "") 
{ 
     if ( qtt.value <1 ) {
        qtt.style.borderColor = "red";
        console.log("qtt doit etre >0");

        Refe.style.borderColor = 'transparent';
        Designation.style.borderColor = 'transparent';
        prix.style.borderColor = 'transparent'; 
     } else { 

let PrixOfTotal = parseInt(prix.value);
let QttOfTotal = parseInt(qtt.value);
let TotalOfPrixAndQtr = PrixOfTotal*QttOfTotal ;
let TvaOfTotal = parseInt(TvaOption.value);
let TvaValue = (TotalOfPrixAndQtr*(TvaOfTotal/100)) ;
let finalTotal = TotalOfPrixAndQtr+TvaValue;
// let arrTest = [];


arrTest.push(`<tr>
<td>${Refe.value}</td>
<td>${Designation.value}</td>
<td>${prix.value}</td> 
<td>${qtt.value} p.s</td>
<td>${TvaOption.value}</td>
<td>${dateString}</td>
<td>${finalTotal} Dhs</td>
</tr>`); console.log(arrTest);

dataProduct.innerHTML += arrTest[arrTest.length-1];


//    // <td><button>-</button></td>  ==>  add button to array
         Refe.style.borderColor = 'transparent';
         Designation.style.borderColor = 'transparent';
         prix.style.borderColor = 'transparent';
         qtt.style.borderColor = 'transparent';


 // clean input
Refe.value = '' ;
Designation.value = '';
prix.value = '';
qtt.value = '';
Designation.value = '';
TvaOption.value = "0%";

    }
} else {

    // let arrOfinputs = [Refe.value, Designation.value, prix.value, qtt.value, TvaOption.value];
    let inputIds = ['Ref','Desig','Prix','Qtt'];
    // console.log(arrOfinputs);
      
    for (let i = 0; i < inputIds.length; i++) {
        let inputElement = document.getElementById(inputIds[i]);
        if (inputElement.value === "") {
          inputElement.classList.add("error-border");
        }   else {
            inputElement.classList.remove("error-border");
          }
        }
    }
}


function removeElement(){
    if  (arrTest.length > 0) {
     arrTest.pop();
        console.log("sfdg");
        console.log(arrTest);
        let myTble = document.getElementById('myTable');
        // var dataProduct = document.getElementById("dataProduct");
        // dataProduct.innerHTML= arrTest.join('--------------');
        myTble.deleteRow(-1);
    


    } else {
        return "fdfg"
    }
};



// function updateText(ValueDesing) {
//     // Define an array of references and corresponding designations
//     const references = ["r1", "r2",'r3'];
//     const designations = ["fraise", "Banane",'Lemon'];

//     // Get the index of the reference in the array
//     const index = references.indexOf(Refe.value); 

//     // Check if the reference is found in the array
//     if (index !== -1) {
//         // If found, update the designation and color
//         Designation.value = designations[index];
//         Designation.style.color = 'black';
//     } else {
//         // If not found, set a default value and color
//         Designation.value = "not defined";
//         Designation.style.color = 'red';
//     }
// }


// Date d'ajoute
let currentDate = new Date();
let dateString = `${currentDate.getUTCDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;



// tirer une facture
// Ref
// Designation 
// Prix 
// qtt
// TVA 
// Date d'ajoute 
// Total de chiffre 
// Total des produit (combien de produit)
// Total de qtt sur le tableau
// date de dubet - date de fin 
// date de tirer la formulaire 
// generateur de QR code