function GetAnimal():void{
 const Animal = GetInputValue("Animal");
console.log(Animal);



}
function GetInputValue(elementID:string):string | undefined{
const inputElement:HTMLInputElement = <HTMLInputElement>document.getElementById(elementID)

if(inputElement.value==='')
{
    return undefined;
}
else{
    return inputElement.value;
}
}
document.getElementById('showanimal')?.addEventListener('click',GetAnimal);