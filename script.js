
const enviar = document.querySelector(".submit-formulary");


function verifyEmail() {
    const name = document.getElementsByName("name");

    const email = document.getElementsByName("email");
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (email.value.match(validRegex)) {
      
          alert("Email Valido");
      
          document.form1.text1.focus();
      
          return true;
      
        } else {
      
          alert("Email Invalido");
      
          document.form1.text1.focus();
      
          return false;
      
        }

      }

enviar.addEventListener("click", verifyEmail);





// TRABALHANDO AQUI=====================================================================
const paragrafoUm = document.querySelector(".curiosityOne");
const paragrafoDois = document.querySelector(".curiosityTwo");

setInterval(()=>{paragrafoUm.style.display = "flex";

}, 5000);





/*====================================================FORMULARIO======================================================================*/
// START Radio butons ==============COMO CONHECEU NOSSO SITE=========================================================
const radButton = document.querySelectorAll(".radio-buton");
const selectOne = radButton[0].children[0];
const selectTwo = radButton[1].children[0];
const selectThree = radButton[2].children[0];
const selectFour = radButton[3].children[0];
const selectFive = radButton[4].children[0];
const selectSix = radButton[5].children[0];
const selectSeven = radButton[6].children[0];
const selectEight = radButton[7].children[0];
let value = "";

selectOne.classList.value = "radio-buton-selected";

radButton[0].addEventListener("click", () => {

    if (selectOne.classList.contains("radio-buton-unselected")) {
        
        value = "Sou cliente frequente de Delicias da Carne";

        selectOne.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } 
});
radButton[1].addEventListener("click", () => {

    if (selectTwo.classList.contains("radio-buton-unselected")) {

        value = "Um amigo que é cliente o recomendou";

        selectTwo.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } 
});
radButton[2].addEventListener("click", () => {

    if (selectThree.classList.contains("radio-buton-unselected")) {

        value = "Vi os anúncios em redes sociais";
        
        selectThree.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } 
});
radButton[3].addEventListener("click", () => {

    if (selectFour.classList.contains("radio-buton-unselected")) {

        value = "Soube do site na loja física";

        selectFour.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } 
});


radButton[4].addEventListener("click", () => {

    if (selectFive.classList.contains("radio-buton-unselected")) {

        value = "Cai aqui por ventura";
        
        selectFive.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } 
});

radButton[5].addEventListener("click", () => {

    if (selectSix.classList.contains("radio-buton-unselected")) {

        value = "Já sabia que existia mas ainda não comprei";

        selectSix.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } 
});

radButton[6].addEventListener("click", () => {

    if (selectSeven.classList.contains("radio-buton-unselected")) {

        value = "Todas as anteriores";
        selectSeven.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    }
});

radButton[7].addEventListener("click", () => {
    if (selectEight.classList.contains("radio-buton-unselected")) {
        value = "Todas as anteriores"
        selectEight.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } 
});
console.log(value);
// END Radio butons ==============COMO CONHECEU NOSSO SITE=========================================================







//Check box QUAL A SUA CARNE FAVORITA?====================================================================================
const favMeatSelected = document.querySelectorAll(".check-box-selected");
const isAllSelected = document.querySelectorAll(".check-box-selected-reject-all-select-all");
const checkIcons = document.querySelectorAll(".check-icon-fav")
const semiSelectedIcons = document.querySelectorAll(".semiselection-favorite-meats");
const checkBox_Select_All_items =document.querySelector(".check-box-reject-all-select-all");


function preventDefault() {
    isAllSelected[0].classList.remove("check-box-selected-reject-all-select-all");
    isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");

    favMeatSelected.forEach(itemMarked => {
        itemMarked.classList.remove("check-box-selected");
    });

}

preventDefault();


//  Reconhece quando estão todas selecionadas.

function getStatus() {
    let classValue = "check-box-selected";
    let counterElements = 0;
    const favitemSelectionStatus = [];

    favMeatSelected.forEach(itemMarked => {
        favitemSelectionStatus.push(itemMarked.classList.value);
    });

    favitemSelectionStatus.forEach(attributeValue => {
        if (attributeValue === classValue) {
            counterElements++;
        }
    });
    
    return counterElements;

}
// ANALIZANDO GETSTATUS ~^^^^^^^^^^====================================================

function getPartialAndTotalSelectionStatus() {
const selectionStatus = getStatus()
 
    if (selectionStatus > 0 && selectionStatus <= 5) {
        isAllSelected[0].classList.add("check-box-selected-reject-all-select-all");
        semiSelectedIcons[0].style.display = "flex";
        checkIcons[0].style.display = "none"
        console.log(selectionStatus)

    } else if (selectionStatus === 6 ) {
       
        semiSelectedIcons[0].style.display = "none";
        checkIcons[0].style.display = "flex";
        
    } else
    {
        isAllSelected[0].classList.remove("check-box-selected-reject-all-select-all");
        checkIcons[0].style.display = "none";
        semiSelectedIcons[0].style.display = "none";
    }
    return selectionStatus;
}

function SelectBox (itemCheckBox, indexOfCheckbox, status){

    this.checkBox = itemCheckBox[indexOfCheckbox];
    this.boxChecked = function (){
        this.checkBox.classList.value = status;
    }
    this.boxUnchecked = function (){
        this.checkBox.classList.remove(status);
    }
}


//Objeto Funcionando

const firstBox = new SelectBox(favMeatSelected, 0,"check-box-selected");
const scndBox = new SelectBox(favMeatSelected, 1,"check-box-selected");
const thrdBox =new SelectBox(favMeatSelected, 2,"check-box-selected");
const fourthBox = new SelectBox(favMeatSelected, 3,"check-box-selected");
const fiveBox = new SelectBox(favMeatSelected, 4,"check-box-selected");
const sixBox = new SelectBox(favMeatSelected, 5,"check-box-selected");
const  nothingSelected = new SelectBox(isAllSelected,1,"check-box-selected-reject-all-select-all")
const allSelected = new SelectBox(isAllSelected, 0,"check-box-selected-reject-all-select-all")


//Seleciona 1ra categoria Checkbox  Carnes Exoticas=====================

favMeatSelected[0].addEventListener("click", () => {

    if (favMeatSelected[0].classList.contains("check-box-selected")) {
        firstBox.boxUnchecked();
        nothingSelected.boxUnchecked();
        getPartialAndTotalSelectionStatus();
        console.log("Deselecionou em carnes favoritas CARNES EXÓTICAS");
    }
    else {
        firstBox.boxChecked();
        nothingSelected.boxUnchecked();
        getPartialAndTotalSelectionStatus();
        console.log("Selecionou em carnes favoritas CARNES EXÓTICAS");
    }
});

//Seleciona 2da categoria  Checkbox  Carnes Nobres=====================

favMeatSelected[1].addEventListener("click", () => {

    if (favMeatSelected[1].classList.contains("check-box-selected")) {
        scndBox.boxUnchecked();
        nothingSelected.boxUnchecked();
        getPartialAndTotalSelectionStatus();
        console.log("Deselecionou em carnes favoritas CARNES NOBRES");
    }
    else {
        scndBox.boxChecked();
        nothingSelected.boxUnchecked();
        getPartialAndTotalSelectionStatus();
        console.log("Selecionou em carnes favoritas CARNES NOBRES");
    }
});

//Seleciona 3ra categoria  Checkbox  Carnes Tradicionais=====================

favMeatSelected[2].addEventListener("click", () => {

    if (favMeatSelected[2].classList.contains("check-box-selected")) {
        
        thrdBox.boxUnchecked();
        nothingSelected.boxUnchecked();
        const actualStatus = getPartialAndTotalSelectionStatus();

        console.log("Deselecionou em carnes favoritas CARNES TRADICIONAIS");
    }
    else {
        thrdBox.boxChecked();
        nothingSelected.boxUnchecked();
        getPartialAndTotalSelectionStatus();

        console.log("Selecionou em carnes favoritas CARNES TRADICIONAIS");
    }
});

//Seleciona 4ta categoria  Checkbox  Carne Ovinna===============================

favMeatSelected[3].addEventListener("click", () => {

    if (favMeatSelected[3].classList.contains("check-box-selected")) {
        fourthBox.boxUnchecked();
        nothingSelected.boxUnchecked();
        getPartialAndTotalSelectionStatus();
        console.log("Deselecionou em carnes favoritas CARNE SUINA");
    }
    else {
        fourthBox.boxChecked();
        nothingSelected.boxUnchecked();
        getPartialAndTotalSelectionStatus();
        console.log("Selecionou em carnes favoritas CARNE SUINA");
    }
});


//Seleciona 5ta categoria Checkbox  Carne Bovina===============================

favMeatSelected[4].addEventListener("click", () => {

    if (favMeatSelected[4].classList.contains("check-box-selected")) {
        fiveBox.boxUnchecked();
        nothingSelected.boxUnchecked();
        getPartialAndTotalSelectionStatus();
        console.log("Deselecionou em carnes favoritas CARNE BOVINA");

    }
    else {
        fiveBox.boxChecked();
        nothingSelected.boxUnchecked();
        getPartialAndTotalSelectionStatus();
        console.log("Selecionou em carnes favoritas CARNE BOVINA");
    }
});

//Seleciona 6ta categoria  =============================

favMeatSelected[5].addEventListener("click", () => {

    if (favMeatSelected[5].classList.contains("check-box-selected")) {
        sixBox.boxUnchecked();
        nothingSelected.boxUnchecked();
        getPartialAndTotalSelectionStatus();
        console.log("Deselecionou em carnes favoritas CARNE OVINA");

    }
    else {
        sixBox.boxChecked();
        nothingSelected.boxUnchecked();
        getPartialAndTotalSelectionStatus();
        console.log("Selecionou em carnes favoritas CARNE OVINA");
    }
    
});

// Selecionar todos os produtos====================================================================
function logicSelectAll()
{
    let conteoElemento = 0;
    const objectSelected = [];

    favMeatSelected.forEach(itemMarked => {
        objectSelected.push(itemMarked.classList.value);
    });

objectSelected.forEach(item =>{
    if(item === "check-box-selected")
    {
        conteoElemento++;
    }
  
    if(conteoElemento === 0 || conteoElemento < 6)
    {
        allSelected.boxChecked();
        nothingSelected.boxUnchecked();
        checkIcons[0].style.display = "flex"
        semiSelectedIcons[0].style.display = "none"
        firstBox.boxChecked();
        scndBox.boxChecked();
        thrdBox.boxChecked();
        fourthBox.boxChecked();
        fiveBox.boxChecked();
        sixBox.boxChecked();
    }
    else if(conteoElemento === 6)
    {
        allSelected.boxUnchecked();
        nothingSelected.boxChecked();
        firstBox.boxUnchecked();
        scndBox.boxUnchecked();
        thrdBox.boxUnchecked();
        fourthBox.boxUnchecked();
        fiveBox.boxUnchecked();
        sixBox.boxUnchecked();
    }
})

}
 

checkBox_Select_All_items.addEventListener("click", logicSelectAll);


isAllSelected[1].addEventListener("click", () => {

    if (favMeatSelected[0].classList.contains("check-box-selected") || favMeatSelected[1].classList.contains("check-box-selected") || favMeatSelected[2].classList.contains("check-box-selected") | favMeatSelected[3].classList.contains("check-box-selected") || favMeatSelected[4].classList.contains("check-box-selected") || favMeatSelected[5].classList.contains("check-box-selected")) {
        favMeatSelected.forEach(box => box.classList.remove("check-box-selected"));
        isAllSelected[0].classList.remove("check-box-selected-reject-all-select-all");
        isAllSelected[1].classList.add("check-box-selected-reject-all-select-all");

        console.log("Selecionou em carnes favoritas NENHUMA DAS CARNES ANTERIORES com check-box Nenhuma das anteriores")

    } else if (isAllSelected[1].classList.contains("check-box-selected-reject-all-select-all")) {
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        
        console.log(isAllSelected[1].classList)

        console.log("Deselecionou em carnes favoritas NENHUMA DAS CARNES ANTERIORES com check-box Nenhuma das anteriores")

    }
    else if (isAllSelected[1].classList.value !== "check-box-selected-reject-all-select-all") {
        isAllSelected[1].classList.add("check-box-selected-reject-all-select-all");
    }

});

//END Check box QUAL A SUA CARNE FAVORITA?====================================================================================



//START - GOSTARIA DE RECEBER NOSSAS OFERTAS?===========RADIO BUTTON-----SIM NÃO====================================================================

const wouldYouLikeOffer = document.getElementsByClassName("radio-offer");

const offerDesitionSelected = document.querySelectorAll(".radio-offer-selected");
const offerYes = offerDesitionSelected[0];
const offerNo = offerDesitionSelected[1];

offerYes.classList.replace("radio-offer-selected", "radio-offer-unselected");
offerNo.classList.replace("radio-offer-selected", "radio-offer-unselected");

wouldYouLikeOffer[0].addEventListener("click", () => {

    if (offerDesitionSelected[0].classList.contains("radio-offer-unselected")) {
        offerYes.classList.replace("radio-offer-unselected", "radio-offer-selected");
        offerNo.classList.replace("radio-offer-selected", "radio-offer-unselected");
        console.log("Selecionou SIM")
    }
})



wouldYouLikeOffer[1].addEventListener("click", () => {

    if (offerDesitionSelected[1].classList.contains("radio-offer-unselected")) {
        
        offerNo.classList.replace("radio-offer-unselected", "radio-offer-selected");
        offerYes.classList.replace("radio-offer-selected", "radio-offer-unselected");
        console.log("Selecionou NÃO")
    }
})

//END - GOSTARIA DE RECEBER NOSSAS OFERTAS?===========RADIO BUTTON-----SIM NÃO================================================================================


// START CHECK button how to Send==========COMO GOSTARIA DE RECEBER AS OFERTAS===========================================================================================


const howToSend = document.querySelectorAll(".check-howtosend-buton");
const askOffer = document.querySelectorAll(".check-howtosend-buton-selected");
const semiSelected = document.querySelector(".semiselected")
const checked = document.querySelectorAll(".check-howtosend-icon")


askOffer[2].classList.remove("check-howtosend-buton-selected");
askOffer[1].classList.remove("check-howtosend-buton-selected");
askOffer[0].classList.remove("check-howtosend-buton-selected");



// Via E-mail===========================================
askOffer[0].addEventListener("click", () => {

    if (askOffer[0].classList.contains("check-howtosend-buton-selected")) {
        askOffer[0].classList.remove("check-howtosend-buton-selected");
        askOffer[3].classList.add("check-howtosend-buton-selected");
        semiSelected.style.display = "flex";
        checked[3].style.display = "none";

        console.log("NÃO Selecionou Via E-MAIL");

        // Quando os 3 primeiros estão selecionados 

        if (askOffer[0].classList.contains("check-howtosend-buton-selected") && askOffer[1].classList.contains("check-howtosend-buton-selected") && askOffer[2].classList.contains("check-howtosend-buton-selected")) {
            semiSelected.style.display = "none";
            checked[3].style.display = "flex";

            console.log("Selecionou AS TRÊS FORMAS DE COMUNICAÇÃO");
        }

        else if (askOffer[0].classList.value !== "check-howtosend-buton-selected" && askOffer[1].classList.value !== "check-howtosend-buton-selected" && askOffer[2].classList.value !== "check-howtosend-buton-selected") {
            askOffer[3].classList.remove("check-howtosend-buton-selected");

            console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada");
        }
    } else {
        askOffer[3].classList.add("check-howtosend-buton-selected");
        semiSelected.style.display = "flex";
        checked[3].style.display = "none";
        askOffer[0].classList.add("check-howtosend-buton-selected");
        askOffer[4].classList.remove("check-howtosend-buton-selected");

        console.log("Selecionou Via E-MAIL");
        // Quando os 3 primeiros estão selecionados 

        if (askOffer[0].classList.contains("check-howtosend-buton-selected") && askOffer[1].classList.contains("check-howtosend-buton-selected") && askOffer[2].classList.contains("check-howtosend-buton-selected")) {
            semiSelected.style.display = "none";
            checked[3].style.display = "flex";

            console.log("Selecionou AS TRÊS FORMAS DE COMUNICAÇÃO");
        }

        else if (askOffer[0].classList.value !== "check-howtosend-buton-selected" && askOffer[1].classList.value !== "check-howtosend-buton-selected" && askOffer[2].classList.value !== "check-howtosend-buton-selected") {
            askOffer[3].classList.remove("check-howtosend-buton-selected");

            console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada");
        }
    }
});

// Via Telefone ==============================================
askOffer[1].addEventListener("click", () => {

    if (askOffer[1].classList.contains("check-howtosend-buton-selected")) {

        askOffer[1].classList.remove("check-howtosend-buton-selected");
        askOffer[3].classList.add("check-howtosend-buton-selected");
        semiSelected.style.display = "flex";
        checked[3].style.display = "none";

        console.log("NÃO Selecionou Via TELEFONE");
        // Quando os 3 primeiros estão selecionados 

        if (askOffer[0].classList.contains("check-howtosend-buton-selected") && askOffer[1].classList.contains("check-howtosend-buton-selected") && askOffer[2].classList.contains("check-howtosend-buton-selected")) {
            semiSelected.style.display = "none";
            checked[3].style.display = "flex";

            console.log("Selecionou AS TRÊS FORMAS DE COMUNICAÇÃO");
        }

        else if (askOffer[0].classList.value !== "check-howtosend-buton-selected" && askOffer[1].classList.value !== "check-howtosend-buton-selected" && askOffer[2].classList.value !== "check-howtosend-buton-selected") {
            askOffer[3].classList.remove("check-howtosend-buton-selected");

            console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada");
        }

    } else {
        askOffer[3].classList.add("check-howtosend-buton-selected");
        semiSelected.style.display = "flex";
        checked[3].style.display = "none"
        askOffer[1].classList.add("check-howtosend-buton-selected");
        askOffer[4].classList.remove("check-howtosend-buton-selected");

        console.log("Selecionou Via TELEFONE");

        // Quando os 3 primeiros estão selecionados 
        if (askOffer[0].classList.contains("check-howtosend-buton-selected") && askOffer[1].classList.contains("check-howtosend-buton-selected") && askOffer[2].classList.contains("check-howtosend-buton-selected")) {
            semiSelected.style.display = "none";
            checked[3].style.display = "flex";

            console.log("Selecionou AS TRÊS FORMAS DE COMUNICAÇÃO");
        }

        else if (askOffer[0].classList.value !== "check-howtosend-buton-selected" && askOffer[1].classList.value !== "check-howtosend-buton-selected" && askOffer[2].classList.value !== "check-howtosend-buton-selected") {
            askOffer[3].classList.remove("check-howtosend-buton-selected");

            console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada");
        }
    }
});

// Via Sms==================================================================
askOffer[2].addEventListener("click", () => {

    if (askOffer[2].classList.contains("check-howtosend-buton-selected")) {
        askOffer[2].classList.remove("check-howtosend-buton-selected");
        askOffer[3].classList.add("check-howtosend-buton-selected");
        semiSelected.style.display = "flex";
        checked[3].style.display = "none";

        console.log("NÃO Selecionou Via SMS");

        // Quando os 3 primeiros estão selecionados 
        if (askOffer[0].classList.contains("check-howtosend-buton-selected") && askOffer[1].classList.contains("check-howtosend-buton-selected") && askOffer[2].classList.contains("check-howtosend-buton-selected")) {
            semiSelected.style.display = "none";
            checked[3].style.display = "flex";

            console.log("Selecionou AS TRÊS FORMAS DE COMUNICAÇÃO")
        }

        else if (askOffer[0].classList.value !== "check-howtosend-buton-selected" && askOffer[1].classList.value !== "check-howtosend-buton-selected" && askOffer[2].classList.value !== "check-howtosend-buton-selected") {
            askOffer[3].classList.remove("check-howtosend-buton-selected");

            console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada");
        }
    } else {
        askOffer[3].classList.add("check-howtosend-buton-selected");
        semiSelected.style.display = "flex";
        checked[3].style.display = "none"
        askOffer[2].classList.add("check-howtosend-buton-selected");
        askOffer[4].classList.remove("check-howtosend-buton-selected");

        console.log("Selecionou Via SMS");

        // Quando os 3 primeiros estão selecionados 
        if (askOffer[0].classList.contains("check-howtosend-buton-selected") && askOffer[1].classList.contains("check-howtosend-buton-selected") && askOffer[2].classList.contains("check-howtosend-buton-selected")) {
            semiSelected.style.display = "none";
            checked[3].style.display = "flex";

            console.log("Selecionou AS TRÊS FORMAS DE COMUNICAÇÃO");
        }

        else if (askOffer[0].classList.contains("") && askOffer[1].classList.contains("") && askOffer[2].classList.contains("")) {
            askOffer[3].classList.remove("check-howtosend-buton-selected");

            console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada");
        }
    }
});

//   Todas as anteriores ===========================================================
askOffer[3].classList.toggle("check-howtosend-buton-selected", false);

askOffer[3].addEventListener("click", () => {

    if (askOffer[3].classList.value !== "check-howtosend-buton-selected") {
        console.log(askOffer[3]);
        askOffer[3].classList.toggle("check-howtosend-buton-selected", true);
        askOffer[2].classList.add("check-howtosend-buton-selected");
        askOffer[1].classList.add("check-howtosend-buton-selected");
        askOffer[0].classList.add("check-howtosend-buton-selected");
        askOffer[4].classList.remove("check-howtosend-buton-selected");
        semiSelected.style.display = "none";
        checked[3].style.display = "flex"

        console.log("Selecionou AS TRÊS (TODAS) FORMAS DE COMUNICAÇÃO");
    }
    else {
        askOffer[3].classList.toggle("check-howtosend-buton-selected", false);
        askOffer[3].classList.remove("check-howtosend-buton-selected");
        askOffer[2].classList.remove("check-howtosend-buton-selected");
        askOffer[1].classList.remove("check-howtosend-buton-selected");
        askOffer[0].classList.remove("check-howtosend-buton-selected");
        askOffer[4].classList.remove("check-howtosend-buton-selected");

        console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada (OPÇÃO MARCA E DESMARCA TODAS)");
    }

});

// Nenhuma Das anteriores Mudei de ideia================================================
askOffer[4].classList.toggle("check-howtosend-buton-selected", false);

askOffer[4].addEventListener("click", () => {

    if (askOffer[4].classList.value === "check-howtosend-buton-selected") {
        console.log(askOffer[4]);
        askOffer[4].classList.toggle("check-howtosend-buton-selected", false);

        console.log("HÁ FORMAS DE COMUNICAÇÃO selecionada(s)")

    }
    else {
        askOffer[3].classList.remove("check-howtosend-buton-selected");
        askOffer[4].classList.toggle("check-howtosend-buton-selected", true);
        askOffer[2].classList.remove("check-howtosend-buton-selected");
        askOffer[1].classList.remove("check-howtosend-buton-selected");
        askOffer[0].classList.remove("check-howtosend-buton-selected");

        console.log("NÃO HÁ FORMAS DE COMUNICAÇÃO selecionada(s)");
    }

});

/* ///////END Check Buttons==========================COMO GOSTARIA DE RECEBER AS OFERTAS==============================================================*/




/* Lista funcional =====================================================================================================================*/
const listDropDown = document.querySelector(".listdown")


const listBox = document.querySelector(".list-container");
const liElement = document.querySelectorAll(".elements");
const selectedElement = document.querySelector(".placeholder");
// const listAreaBody = document.querySelector(".placeholder-container");

listDropDown.addEventListener("click", () => {

    if (listBox.classList.value === "list-container") {

        listBox.classList.add("list-container-active");
        listDropDown.style.transform = "rotate(180deg)";

        //Para cada elemento de lista dentro de Select List 
        liElement.forEach(listElement => {

            listElement.addEventListener("click", () => {

                selectedElement.textContent = listElement.textContent;
                console.log(`span selectedElement da lista de seleção guarda o Valor:  ${selectedElement.textContent}`);
                selectedElement.style.color = "brown";
                selectedElement.style.paddingLeft = "55px";
                selectedElement.style.paddingRight = "55px";
                selectedElement.style.opacity = "1";

                // Girar botão de lista de seleção ==== e desaparecer a lista após selecionar Elemento===============

                listBox.classList.remove("list-container-active");
                listDropDown.style.transform = "rotate(0deg)";

            })

        })

    } else if (listBox.classList.value === "list-container list-container-active") {
        listBox.classList.remove("list-container-active");
        listDropDown.style.transform = "rotate(0deg)";
    }
})

/* END Lista funcional ================================================================================================================ */