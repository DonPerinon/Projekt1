

function GetAnimal():void{
 const Animal = GetInputValue("Animal");
    PostAnimal(Animal);
};

function GetInputValue(elementID:string):string | undefined{
const inputElement:HTMLInputElement = document.getElementById(elementID) as HTMLInputElement

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
