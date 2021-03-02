var _a;
console.log("sdaaa");
function GetAnimal() {
    const Animal = GetInputValue("Animal");
    PostAnimal(Animal);
}
;
/*async function asyncFunction() {
   let conn;
   try {
     conn = await db.getConnection();
     const rows = await conn.query("SELECT Name from Animal;");
     console.log(rows); //[ {val: 1}, meta: ...
   } catch (err) {
     throw err;
   } finally {
     if (conn) return conn.end();
   } };*/
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
export {};
//# sourceMappingURL=app.js.map