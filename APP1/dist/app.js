var _a;
function GetAnimal() {
    const Animal = GetInputValue("Animal");
    PostAnimal(Animal);
}
;
function GetInputValue(elementID) {
    const inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
;
function PostAnimal(Animal = "test", Image) {
    const elementAnimal = document.getElementById("postedAnimal");
    elementAnimal.innerText = `Selected anmal is ${Animal}`;
}
;
(_a = document.getElementById('showanimal')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', GetAnimal);
//# sourceMappingURL=app.js.map