
const enviar = document.querySelector(".submit-formulary");

function verifyEmail() {

    /*Verificando o email*/

    const inputs = document.querySelectorAll(".contact");

    console.log(inputs);

    const email = inputs[1].textContent;
    const validator = email.includes("@", ".com", ".br");

    if (validator === true) {
        console.log("Email válido");
        return alert("Email Valido");

    } else {
        console.log("Email invalido");
        return alert("Digite um email valido");

    }

}
enviar.addEventListener("click", verifyEmail);



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


radButton[0].addEventListener("click", () => {
    if (selectOne.classList.contains("radio-buton-unselected")) {
        selectOne.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } else {
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
    }
});
radButton[1].addEventListener("click", () => {
    if (selectTwo.classList.contains("radio-buton-unselected")) {
        selectTwo.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } else {
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
    }
});
radButton[2].addEventListener("click", () => {
    if (selectThree.classList.contains("radio-buton-unselected")) {
        selectThree.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } else {
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
    }
});
radButton[3].addEventListener("click", () => {
    if (selectFour.classList.contains("radio-buton-unselected")) {
        selectFour.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } else {
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
    }
});


radButton[4].addEventListener("click", () => {
    if (selectFive.classList.contains("radio-buton-unselected")) {
        selectFive.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } else {
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
    }
});

radButton[5].addEventListener("click", () => {
    if (selectSix.classList.contains("radio-buton-unselected")) {
        selectSix.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } else {
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
    }
});

radButton[6].addEventListener("click", () => {
    if (selectSeven.classList.contains("radio-buton-unselected")) {
        selectSeven.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } else {
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
    }
});

radButton[7].addEventListener("click", () => {
    if (selectEight.classList.contains("radio-buton-unselected")) {
        selectEight.classList.replace("radio-buton-unselected", "radio-buton-selected")
        selectOne.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectTwo.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectThree.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFour.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectFive.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSix.classList.replace("radio-buton-selected", "radio-buton-unselected")
        selectSeven.classList.replace("radio-buton-selected", "radio-buton-unselected")
    } else {
        selectEight.classList.replace("radio-buton-selected", "radio-buton-unselected")
    }
});

// END Radio butons ==============COMO CONHECEU NOSSO SITE=========================================================






// ///////================================Fiquei aqui***********************------------------------*****************************************

//Check box QUAL A SUA CARNE FAVORITA?====================================================================================
const favMeatSelected = document.querySelectorAll(".check-box-selected");
const isAllSelected = document.querySelectorAll(".check-box-selected-reject-all-select-all");
const checkIcons = document.querySelectorAll(".check-icon-fav")
const semiSelectedIcons = document.querySelectorAll(".semiselection-favorite-meats");

function preventDefault() {
    isAllSelected[0].classList.remove("check-box-selected-reject-all-select-all");
    isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");

    favMeatSelected.forEach(itemMarked => {
        itemMarked.classList.replace("check-box-selected", "unselected");
    });

}
preventDefault();
//  Reconhece quando estão todas selecionadas.
function getStatus() {
    let statusGroup = true;
    let classValue = "check-box-selected";
    let counterElements = 0;
    const totalFavitemSelection = [];

    favMeatSelected.forEach(itemMarked => {
        totalFavitemSelection.push(itemMarked.classList.value);
    });

    totalFavitemSelection.forEach(attributeValue => {
        if (attributeValue === classValue) {
            counterElements++;
        }
    });

    if (counterElements === 6) {
        statusGroup = true;
    } else if (counterElements === 0) {
        statusGroup = false
    }
    if (counterElements > 0 && counterElements < 6) {
        statusGroup = false;
    }

    if (counterElements === 6 && isAllSelected[0].classList.contains("check-box-selected-reject-all-select-all") ) {
       
        checkIcons[0].style.display = "flex";
    } else if (counterElements === 0 && isAllSelected[0].classList.contains("check-box-selected-reject-all-select-all")) {
        isAllSelected[0].classList.remove("check-box-selected-reject-all-select-all");
        console.log(statusGroup);
    }
    else if (statusGroup === true)
    {
        isAllSelected[0].classList.add("check-box-selected-reject-all-select-all");
        checkIcons[0].style.display = "flex";
        
    } 
    // console.log(totalFavitemSelection);
    // console.log("Total Selection "+statusGroup);
    // console.log("Partial Selection " + partialSelection);
    return totalFavitemSelection;

}


function getPartialSelectionStatus() {

    if (favMeatSelected[0].classList.contains("check-box-selected") ||
        favMeatSelected[1].classList.contains("check-box-selected") ||
        favMeatSelected[2].classList.contains("check-box-selected") ||
        favMeatSelected[3].classList.contains("check-box-selected") ||
        favMeatSelected[4].classList.contains("check-box-selected") ||
        favMeatSelected[5].classList.contains("check-box-selected")) {

        

        isAllSelected[0].classList.add("check-box-selected-reject-all-select-all")
        checkIcons[0].style.display = "none"
        semiSelectedIcons[0].style.display = "flex";
        
        
        if (favMeatSelected[0].classList.contains("check-box-selected") &&
            favMeatSelected[1].classList.contains("check-box-selected") &&
            favMeatSelected[2].classList.contains("check-box-selected") &&
            favMeatSelected[3].classList.contains("check-box-selected") &&
            favMeatSelected[4].classList.contains("check-box-selected") &&
            favMeatSelected[5].classList.contains("check-box-selected")) {


            checkIcons[0].style.display = "flex"
            semiSelectedIcons[0].style.display = "none";
        }
}
}


//Seleciona 1ra categoria Checkbox  Carnes Exoticas=====================

favMeatSelected[0].addEventListener("click", () => {

    if (favMeatSelected[0].classList.contains("check-box-selected")) {
        favMeatSelected[0].classList.remove("check-box-selected");
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        getStatus();
        getPartialSelectionStatus();
        console.log("Deselecionou em carnes favoritas CARNES EXÓTICAS");
    }
    else {
        favMeatSelected[0].classList.add("check-box-selected");
       isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        getStatus();
        getPartialSelectionStatus();
        console.log("Selecionou em carnes favoritas CARNES EXÓTICAS");
    }
});

//Seleciona 2da categoria  Checkbox  Carnes Nobres=====================

favMeatSelected[1].addEventListener("click", () => {

    if (favMeatSelected[1].classList.contains("check-box-selected")) {
        favMeatSelected[1].classList.remove("check-box-selected");
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        getStatus();
        getPartialSelectionStatus();
        console.log("Deselecionou em carnes favoritas CARNES NOBRES");
    }
    else {
        favMeatSelected[1].classList.add("check-box-selected");
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        getStatus();
        getPartialSelectionStatus();
        console.log("Selecionou em carnes favoritas CARNES NOBRES");
    }
});

//Seleciona 3ra categoria  Checkbox  Carnes Tradicionais=====================

favMeatSelected[2].addEventListener("click", () => {

    if (favMeatSelected[2].classList.contains("check-box-selected")) {
        favMeatSelected[2].classList.remove("check-box-selected");
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        getStatus();
        getPartialSelectionStatus();
        console.log("Deselecionou em carnes favoritas CARNES TRADICIONAIS");
    }
    else {
        favMeatSelected[2].classList.add("check-box-selected");
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        getStatus();
        getPartialSelectionStatus();
        console.log("Selecionou em carnes favoritas CARNES TRADICIONAIS");
    }
});

//Seleciona 4ta categoria  Checkbox  Carne Ovinna===============================

favMeatSelected[3].addEventListener("click", () => {

    if (favMeatSelected[3].classList.contains("check-box-selected")) {
        favMeatSelected[3].classList.remove("check-box-selected");
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        getStatus();
        getPartialSelectionStatus();
        console.log("Deselecionou em carnes favoritas CARNE SUINA");
    }
    else {
        favMeatSelected[3].classList.add("check-box-selected");
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        getStatus();
        getPartialSelectionStatus();
        console.log("Selecionou em carnes favoritas CARNE SUINA");
    }
});


//Seleciona 5ta categoria Checkbox  Carne Bovina===============================

favMeatSelected[4].addEventListener("click", () => {

    if (favMeatSelected[4].classList.contains("check-box-selected")) {
        favMeatSelected[4].classList.remove("check-box-selected");
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        getStatus();
        getPartialSelectionStatus();
        console.log("Deselecionou em carnes favoritas CARNE BOVINA");

    }
    else {
        favMeatSelected[4].classList.add("check-box-selected");
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        getStatus();
        getPartialSelectionStatus();
        console.log("Selecionou em carnes favoritas CARNE BOVINA");
    }
});

//Seleciona 6ta categoria  =============================

favMeatSelected[5].addEventListener("click", () => {

    if (favMeatSelected[5].classList.contains("check-box-selected")) {
        favMeatSelected[5].classList.remove("check-box-selected");
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        getStatus();
        getPartialSelectionStatus();
        console.log("Deselecionou em carnes favoritas CARNE OVINA");

    }
    else {
        favMeatSelected[5].classList.add("check-box-selected");
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        getStatus();
        getPartialSelectionStatus();
        console.log("Selecionou em carnes favoritas CARNE OVINA");
    }
});
// Selecionar todos os produtos

isAllSelected[0].addEventListener("click", () => {

    if (isAllSelected[0].classList.value === "") {
        isAllSelected[0].classList.add("check-box-selected-reject-all-select-all");
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        checkIcons[0].style.display = "flex";
        semiSelectedIcons[0].style.display = "none";
        favMeatSelected.forEach(box => box.classList.add("check-box-selected"));
        

        console.log("Selecionou em carnes favoritas TODAS AS CARNES ANTERIORES com check-box Marcar/Desmarcar todas")

    } else if (semiSelectedIcons[0].style.display === "flex") {

        checkIcons[0].style.display = "flex"
        semiSelectedIcons[0].style.display = "none"
        favMeatSelected.forEach(box => box.classList.add("check-box-selected"));
        isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");
        console.log("DeSelecionou em carnes favoritas TODAS AS");


    }
    else if (checkIcons[0].style.display === "flex" && isAllSelected[0].classList.contains("check-box-selected-reject-all-select-all")) {

        favMeatSelected.forEach(box => box.classList.remove("check-box-selected"));
        isAllSelected[0].classList.remove("check-box-selected-reject-all-select-all");
        isAllSelected[1].classList.add("check-box-selected-reject-all-select-all");


        console.log("DESELECIONOU em carnes favoritas TODAS AS CARNES ANTERIORES com check-box Marcar/Desmarcar todas em ultimo else (Ultima situação)")
    }

   else if (isAllSelected[0].classList.contains("check-box-selected-reject-all-select-all")) {
        if (favMeatSelected[0].classList.contains("check-box-selected") ||
            favMeatSelected[1].classList.contains("check-box-selected") ||
            favMeatSelected[2].classList.contains("check-box-selected") ||
            favMeatSelected[3].classList.contains("check-box-selected") ||
            favMeatSelected[4].classList.contains("check-box-selected") ||
            favMeatSelected[5].classList.contains("check-box-selected")) {

            checkIcons[0].style.display = "flex"
            semiSelectedIcons[0].style.display = "none"
            favMeatSelected.forEach(box => box.classList.add("check-box-selected"));
            isAllSelected[1].classList.remove("check-box-selected-reject-all-select-all");

        } else if (isAllSelected[0].classList.contains("")) {

            isAllSelected[0].classList.add("check-box-selected-reject-all-select-all");
            checkIcons[0].style.display = "flex";

        }
   

    }

   
});
// ANALISANDO PORQUE NÃO MARCA CUANDO LO CLICO =========================================

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

    if (offerDesitionSelected[0].classList.contains("radio-offer-selected")) {
        offerYes.classList.replace("radio-offer-selected", "radio-offer-unselected");
    }
    else {
        offerYes.classList.replace("radio-offer-unselected", "radio-offer-selected");
        offerNo.classList.replace("radio-offer-selected", "radio-offer-unselected");
        console.log("Selecionou SIM")
    }
})


wouldYouLikeOffer[1].addEventListener("click", () => {

    if (offerDesitionSelected[1].classList.contains("radio-offer-selected")) {
        offerNo.classList.replace("radio-offer-selected", "radio-offer-unselected");
    }
    else {
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