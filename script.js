const enviar = document.querySelector(".submit-formulary")

function verifyEmail (){

    /*Verificando o email*/

const inputs = document.querySelectorAll(".contact");

console.log(inputs);

const email = inputs[1].textContent;
const validator = email.includes("@",".com",".br")

if (validator)
{
    alert("Email Valido");
    console.log("Email válido");
}else
{
alert("Digite um email valido")
console.log("Email invalido")
}

}
enviar.addEventListener("click",verifyEmail)



// Radio butons =======================================================================
const radButton = document.querySelectorAll(".radio-buton")
const  selectOne = radButton[0].children[0];
const selectTwo = radButton[1].children[0];
const selectThree = radButton[2].children[0];
const selectFour = radButton[3].children[0];
const selectFive= radButton[4].children[0];
const selectSix = radButton[5].children[0];
const selectSeven = radButton[6].children[0];
const selectEight = radButton[7].children[0];

  
    radButton[0].addEventListener("click", ()=>{
        if (selectOne.classList.contains("radio-buton-unselected"))
        {
selectOne.classList.replace("radio-buton-unselected","radio-buton-selected")
selectTwo.classList.replace("radio-buton-selected","radio-buton-unselected")
selectThree.classList.replace("radio-buton-selected","radio-buton-unselected")
selectFour.classList.replace("radio-buton-selected","radio-buton-unselected")
selectFive.classList.replace("radio-buton-selected","radio-buton-unselected")
selectSix.classList.replace("radio-buton-selected","radio-buton-unselected")
selectSeven.classList.replace("radio-buton-selected","radio-buton-unselected")
selectEight.classList.replace("radio-buton-selected","radio-buton-unselected")
        } else
        {
            selectOne.classList.replace("radio-buton-selected","radio-buton-unselected")
        }
        });  
        radButton[1].addEventListener("click", ()=>{
            if (selectTwo.classList.contains("radio-buton-unselected"))
            {
                selectTwo.classList.replace("radio-buton-unselected","radio-buton-selected")
                selectOne.classList.replace("radio-buton-selected","radio-buton-unselected")
                selectThree.classList.replace("radio-buton-selected","radio-buton-unselected")
                selectFour.classList.replace("radio-buton-selected","radio-buton-unselected")
                selectFive.classList.replace("radio-buton-selected","radio-buton-unselected")
                selectSix.classList.replace("radio-buton-selected","radio-buton-unselected")
                selectSeven.classList.replace("radio-buton-selected","radio-buton-unselected")
                selectEight.classList.replace("radio-buton-selected","radio-buton-unselected")
            }else
            {
                selectTwo.classList.replace("radio-buton-selected","radio-buton-unselected")
                }} );
                radButton[2].addEventListener("click", ()=>{
                    if (selectThree.classList.contains("radio-buton-unselected"))
                    {
                        selectThree.classList.replace("radio-buton-unselected","radio-buton-selected")
                        selectOne.classList.replace("radio-buton-selected","radio-buton-unselected")
                        selectTwo.classList.replace("radio-buton-selected","radio-buton-unselected")
                        selectFour.classList.replace("radio-buton-selected","radio-buton-unselected")
                        selectFive.classList.replace("radio-buton-selected","radio-buton-unselected")
                        selectSix.classList.replace("radio-buton-selected","radio-buton-unselected")
                        selectSeven.classList.replace("radio-buton-selected","radio-buton-unselected")
                        selectEight.classList.replace("radio-buton-selected","radio-buton-unselected")
                    }else
                    {
                        selectThree.classList.replace("radio-buton-selected","radio-buton-unselected")
                        }} );
                        radButton[3].addEventListener("click", ()=>{
                            if (selectFour.classList.contains("radio-buton-unselected"))
                            {
                                selectFour.classList.replace("radio-buton-unselected","radio-buton-selected")
                                selectOne.classList.replace("radio-buton-selected","radio-buton-unselected")
                                selectTwo.classList.replace("radio-buton-selected","radio-buton-unselected")
                                selectThree.classList.replace("radio-buton-selected","radio-buton-unselected")
                                selectFive.classList.replace("radio-buton-selected","radio-buton-unselected")
                                selectSix.classList.replace("radio-buton-selected","radio-buton-unselected")
                                selectSeven.classList.replace("radio-buton-selected","radio-buton-unselected")
                                selectEight.classList.replace("radio-buton-selected","radio-buton-unselected")
                            }else
                            {
                                selectFour.classList.replace("radio-buton-selected","radio-buton-unselected")
                                }} );


                                radButton[4].addEventListener("click", ()=>{
                                    if (selectFive.classList.contains("radio-buton-unselected"))
                                    {
                                        selectFive.classList.replace("radio-buton-unselected","radio-buton-selected")
                                        selectOne.classList.replace("radio-buton-selected","radio-buton-unselected")
                                        selectTwo.classList.replace("radio-buton-selected","radio-buton-unselected")
                                        selectThree.classList.replace("radio-buton-selected","radio-buton-unselected")
                                        selectFour.classList.replace("radio-buton-selected","radio-buton-unselected")
                                        selectSix.classList.replace("radio-buton-selected","radio-buton-unselected")
                                        selectSeven.classList.replace("radio-buton-selected","radio-buton-unselected")
                                        selectEight.classList.replace("radio-buton-selected","radio-buton-unselected")
                                    }else
                                    {
                                    selectFive.classList.replace("radio-buton-selected","radio-buton-unselected")
                                        }} ); 

                                        radButton[5].addEventListener("click", ()=>{
                                            if (selectSix.classList.contains("radio-buton-unselected"))
                                            {
                                                selectSix.classList.replace("radio-buton-unselected","radio-buton-selected")
                                                selectOne.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectTwo.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectThree.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectFour.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectFive.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectSeven.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectEight.classList.replace("radio-buton-selected","radio-buton-unselected")
                                            }else
                                            {
                                            selectSix.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                }} ); 

                                                radButton[6].addEventListener("click", ()=>{
                                                if (selectSeven.classList.contains("radio-buton-unselected"))
                                                {
                                                selectSeven.classList.replace("radio-buton-unselected","radio-buton-selected")
                                                selectOne.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectTwo.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectThree.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectFour.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectFive.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectSix.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectEight.classList.replace("radio-buton-selected","radio-buton-unselected")
                                            }else
                                            {
                                            selectSeven.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                }} ); 

                                                radButton[7].addEventListener("click", ()=>{
                                                    if (selectEight.classList.contains("radio-buton-unselected"))
                                                    {
                                                selectEight.classList.replace("radio-buton-unselected","radio-buton-selected")
                                                selectOne.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectTwo.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectThree.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectFour.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectFive.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectSix.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                selectSeven.classList.replace("radio-buton-selected","radio-buton-unselected")
                                            }else
                                            {
                                            selectEight.classList.replace("radio-buton-selected","radio-buton-unselected")
                                                }} ); 

// CHECK button how to Send=====================================================================================================


const howToSend = document.querySelectorAll(".check-howtosend-buton");
const askOffer = document.querySelectorAll(".check-howtosend-buton-selected");
const semiSelected = document.querySelector(".semiselected")
const checked = document.querySelectorAll(".check-howtosend-icon")


askOffer[2].classList.remove("check-howtosend-buton-selected");
askOffer[1].classList.remove("check-howtosend-buton-selected");
askOffer[0].classList.remove("check-howtosend-buton-selected"); 
    


// Via E-mail===========================================
    askOffer[0].addEventListener("click", ()=>{
      
        if(askOffer[0].classList.contains("check-howtosend-buton-selected"))
       {
               askOffer[0].classList.remove("check-howtosend-buton-selected");
               askOffer[3].classList.add("check-howtosend-buton-selected");
               semiSelected.style.display = "flex";
               checked[3].style.display = "none";

               console.log("NÃO Selecionou Via E-MAIL");

// Quando os 3 primeiros estão selecionados 

if(askOffer[0].classList.contains("check-howtosend-buton-selected") && askOffer[1].classList.contains("check-howtosend-buton-selected") && askOffer[2].classList.contains("check-howtosend-buton-selected"))
{
    semiSelected.style.display = "none";
    checked[3].style.display = "flex";

    console.log("Selecionou AS TRÊS FORMAS DE COMUNICAÇÃO");
}

else if(askOffer[0].classList.value !== "check-howtosend-buton-selected" && askOffer[1].classList.value !== "check-howtosend-buton-selected" && askOffer[2].classList.value !== "check-howtosend-buton-selected")
{
    askOffer[3].classList.remove("check-howtosend-buton-selected");

    console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada");
}
 } else
{
        askOffer[3].classList.add("check-howtosend-buton-selected");
        semiSelected.style.display = "flex";
        checked[3].style.display = "none";
        askOffer[0].classList.add("check-howtosend-buton-selected");
        askOffer[4].classList.remove("check-howtosend-buton-selected");
        
        console.log("Selecionou Via E-MAIL");
// Quando os 3 primeiros estão selecionados 

if(askOffer[0].classList.contains("check-howtosend-buton-selected") && askOffer[1].classList.contains("check-howtosend-buton-selected") && askOffer[2].classList.contains("check-howtosend-buton-selected"))
{
    semiSelected.style.display = "none";
    checked[3].style.display = "flex";

    console.log("Selecionou AS TRÊS FORMAS DE COMUNICAÇÃO");
}

else if(askOffer[0].classList.value !== "check-howtosend-buton-selected" && askOffer[1].classList.value !== "check-howtosend-buton-selected" && askOffer[2].classList.value !== "check-howtosend-buton-selected")
{
    askOffer[3].classList.remove("check-howtosend-buton-selected");

    console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada");
}
}
    });

// Via Telefone ===========================================
    askOffer[1].addEventListener("click", ()=>{
       
        if(askOffer[1].classList.contains("check-howtosend-buton-selected"))
        {

                askOffer[1].classList.remove("check-howtosend-buton-selected");
                askOffer[3].classList.add("check-howtosend-buton-selected");
                semiSelected.style.display = "flex";
                checked[3].style.display = "none"

                console.log("NÃO Selecionou Via TELEFONE");
// Quando os 3 primeiros estão selecionados 

if(askOffer[0].classList.contains("check-howtosend-buton-selected") && askOffer[1].classList.contains("check-howtosend-buton-selected") && askOffer[2].classList.contains("check-howtosend-buton-selected"))
{
    semiSelected.style.display = "none";
    checked[3].style.display = "flex";

    console.log("Selecionou AS TRÊS FORMAS DE COMUNICAÇÃO");
}

else if(askOffer[0].classList.value !== "check-howtosend-buton-selected" && askOffer[1].classList.value !== "check-howtosend-buton-selected" && askOffer[2].classList.value !== "check-howtosend-buton-selected")
{
    askOffer[3].classList.remove("check-howtosend-buton-selected");

    console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada");
}

        } else
        {
       
         askOffer[3].classList.add("check-howtosend-buton-selected");
         semiSelected.style.display = "flex";
         checked[3].style.display = "none"
         askOffer[1].classList.add("check-howtosend-buton-selected");
         askOffer[4].classList.remove("check-howtosend-buton-selected");

         console.log("Selecionou Via TELEFONE");

// Quando os 3 primeiros estão selecionados 
if(askOffer[0].classList.contains("check-howtosend-buton-selected") && askOffer[1].classList.contains("check-howtosend-buton-selected") && askOffer[2].classList.contains("check-howtosend-buton-selected"))
{
    semiSelected.style.display = "none";
    checked[3].style.display = "flex";

    console.log("Selecionou AS TRÊS FORMAS DE COMUNICAÇÃO");
}

else if(askOffer[0].classList.value !== "check-howtosend-buton-selected" && askOffer[1].classList.value !== "check-howtosend-buton-selected" && askOffer[2].classList.value !== "check-howtosend-buton-selected")
{
    askOffer[3].classList.remove("check-howtosend-buton-selected");
    
    console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada");
}
        }
     });
    
// Via Sms=========================================
     askOffer[2].addEventListener("click", ()=>{
  
        if(askOffer[2].classList.contains("check-howtosend-buton-selected"))
        {
                askOffer[2].classList.remove("check-howtosend-buton-selected");
                askOffer[3].classList.add("check-howtosend-buton-selected");
                semiSelected.style.display = "flex";
                checked[3].style.display = "none";

                console.log("NÃO Selecionou Via SMS");

// Quando os 3 primeiros estão selecionados 
if(askOffer[0].classList.contains("check-howtosend-buton-selected") && askOffer[1].classList.contains("check-howtosend-buton-selected") && askOffer[2].classList.contains("check-howtosend-buton-selected"))
{
    semiSelected.style.display = "none";
    checked[3].style.display = "flex";

    console.log("Selecionou AS TRÊS FORMAS DE COMUNICAÇÃO")
}

else if(askOffer[0].classList.value !== "check-howtosend-buton-selected" && askOffer[1].classList.value !== "check-howtosend-buton-selected" && askOffer[2].classList.value !== "check-howtosend-buton-selected")
{
    askOffer[3].classList.remove("check-howtosend-buton-selected");

    console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada");
}
        } else
        {
         askOffer[3].classList.add("check-howtosend-buton-selected");
         semiSelected.style.display = "flex";
         checked[3].style.display = "none"
         askOffer[2].classList.add("check-howtosend-buton-selected");
         askOffer[4].classList.remove("check-howtosend-buton-selected"); 

         console.log("Selecionou Via SMS");

        // Quando os 3 primeiros estão selecionados 
        if(askOffer[0].classList.contains("check-howtosend-buton-selected") && askOffer[1].classList.contains("check-howtosend-buton-selected") && askOffer[2].classList.contains("check-howtosend-buton-selected"))
        {
            semiSelected.style.display = "none";
            checked[3].style.display = "flex";

            console.log("Selecionou AS TRÊS FORMAS DE COMUNICAÇÃO");
        }

        else if(askOffer[0].classList.contains("") && askOffer[1].classList.contains("") && askOffer[2].classList.contains(""))
        {
            askOffer[3].classList.remove("check-howtosend-buton-selected");

            console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada");
        }      
}
});

//   Todas as anteriores =======================================
    askOffer[3].classList.toggle("check-howtosend-buton-selected",false);

askOffer[3].addEventListener("click", ()=>{
   
if(askOffer[3].classList.value !== "check-howtosend-buton-selected")
{
    console.log( askOffer[3]);
    askOffer[3].classList.toggle("check-howtosend-buton-selected",true);
    askOffer[2].classList.add("check-howtosend-buton-selected");
     askOffer[1].classList.add("check-howtosend-buton-selected");
    askOffer[0].classList.add("check-howtosend-buton-selected");
    askOffer[4].classList.remove("check-howtosend-buton-selected"); 
    semiSelected.style.display = "none";
    checked[3].style.display = "flex"

    console.log("Selecionou AS TRÊS (TODAS) FORMAS DE COMUNICAÇÃO");
}
else
{
    askOffer[3].classList.toggle("check-howtosend-buton-selected",false);
    askOffer[3].classList.remove("check-howtosend-buton-selected");
    askOffer[2].classList.remove("check-howtosend-buton-selected");
    askOffer[1].classList.remove("check-howtosend-buton-selected");
    askOffer[0].classList.remove("check-howtosend-buton-selected"); 
    askOffer[4].classList.remove("check-howtosend-buton-selected");

    console.log("NENHUMA FORMA DE COMUNICAÇÃO selecionada (OPÇÃO MARCA E DESMARCA TODAS)");
}

});

// Nenhuma Das anteriores Mudei de ideia======================
askOffer[4].classList.toggle("check-howtosend-buton-selected",false);

askOffer[4].addEventListener("click", ()=>{
   
if(askOffer[4].classList.value === "check-howtosend-buton-selected")
{
    console.log( askOffer[4]);
    askOffer[4].classList.toggle("check-howtosend-buton-selected",false);

    console.log("HÁ FORMAS DE COMUNICAÇÃO selecionada(s)")
      
}
else
{ 
    askOffer[3].classList.remove("check-howtosend-buton-selected");
    askOffer[4].classList.toggle("check-howtosend-buton-selected",true);
    askOffer[2].classList.remove("check-howtosend-buton-selected");
    askOffer[1].classList.remove("check-howtosend-buton-selected");
    askOffer[0].classList.remove("check-howtosend-buton-selected"); 

    console.log("NÃO HÁ FORMAS DE COMUNICAÇÃO selecionada(s)");
}

});

/* ///////End Check Buttons========================================================*/




/* Lista funcional ============================================*/
const listDropDown = document.querySelector(".listdown")
                              

const listBox = document.querySelector(".list-container");
const liElement = document.querySelectorAll(".elements");
const selectedElement = document.querySelector(".placeholder");

listDropDown.addEventListener("click", ()=>{
    
if(listBox.classList.value === "list-container")
   {
    console.log(listBox.classList);  
        listBox.classList.add("list-container-active");
        listDropDown.style.transform = "rotate(180deg)";

//Para cada elemento de lista dentro de Select List 
  liElement.forEach(listElement =>{
           
    listElement.addEventListener("click", ()=>{
                             
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
   }else if(listBox.classList.value === "list-container list-container-active")
   {
        listBox.classList.remove("list-container-active");
        listDropDown.style.transform = "rotate(0deg)";
   }
})
/* Lista funcional ============================================ */