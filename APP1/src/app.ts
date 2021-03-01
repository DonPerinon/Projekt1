import {asyncFunction} from './index.js';
console.log("sdaaa");
function GetAnimal():void{
 const Animal = GetInputValue("Animal");
    PostAnimal(Animal);
   asyncFunction();
   
};
 
function GetInputValue(elementID:string):string | undefined{
const inputElement:HTMLInputElement = <HTMLInputElement>document.getElementById(elementID)

if(inputElement.value==='')
{
    return undefined;
}
else{
    return inputElement.value;
}
};
function PostAnimal(Animal:string="test",Image?:Blob):void{
    const elementAnimal:HTMLElement |null= document.getElementById("postedAnimal"); 
    elementAnimal!.innerText = `Selected anmal is ${Animal}`;
};
document.getElementById('showanimal')?.addEventListener('click',GetAnimal);
