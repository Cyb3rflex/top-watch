const firstinput = document.querySelector("#firstinput")
const secondinp = document.querySelector("#Secinput")
const third = document.querySelector("#output")
const button = document.querySelector(".out")
const button1 = document.querySelector(".outt")
const button2 = document.querySelector(".outs")
const button3 = document.querySelector(".outp")



   button.addEventListener("click", function(e){
    e.preventDefault();
    alert("Your Answer is.. click OK to view your Answer ", output)
    output.value = parseInt(firstinput.value) + parseInt(Secinput.value) 
 });
   button1.addEventListener("click", function(e){
    e.preventDefault();
    alert("Your Answer is.. click OK to view your Answer ", output)
    output.value = parseInt(firstinput.value) - parseInt(Secinput.value) 
 });
   button2.addEventListener("click", function(e){
    e.preventDefault();
    alert("Your Answer is.. click OK to view your Answer ", output)
    output.value = parseInt(firstinput.value) / parseInt(Secinput.value) 
 });
   button3.addEventListener("click", function(e){
    e.preventDefault();
    alert("Your Answer is.. click OK to view your Answer ", output)
    output.value = parseInt(firstinput.value) * parseInt(Secinput.value) 
 });
