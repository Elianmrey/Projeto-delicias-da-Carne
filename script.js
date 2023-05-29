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

// Radio button how to Send=====================================================

const askOffer = document.querySelectorAll(".check-howtosend-buton-selected");
console.log(askOffer);



const howToSend = document.querySelectorAll(".check-howtosend-buton");

console.log(howToSend);




/* ///////End Radio Buttons========================================================*/




                                            
