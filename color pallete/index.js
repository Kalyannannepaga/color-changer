let A = ["#142d4c","#fdb44b","#00bbf0","#eb2632"];
let i = 0 ; 
document.querySelector('.color-1 h1').addEventListener("click", function()
{
       document.querySelector(".color-1 h1").innerHTML = A[i%(A.length)];
       i++; 
       document.querySelector('.playarea').style.backgroundColor= A[i%(A.length)];
});
document.querySelector('.reset h1').addEventListener("click", function ()
{
    document.querySelector(".color-1 h1").innerHTML = "#FFF";
    document.querySelector('.playarea').style.backgroundColor= "white";
    i = 0 ;
});