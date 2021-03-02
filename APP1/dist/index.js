var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
/// <reference path="../node_modules/@types/node/path.d.ts"/>
/// <reference path="../node_modules/@types/node/url.d.ts"/>
/// <reference path="../node_modules/@types/express/index.d.ts"/>
/// <reference path="../node_modules/mariadb/types/index.d.ts"/>
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import express from 'express';
const app = express();
app.listen(3000, () => console.log('Express server running at http://127.0.0.1:3000'));
app.get('/', function (request, response) {
    response.sendFile(path.join(process.cwd(), 'index.html'));
});
app.use('/src', express.static(path.join(process.cwd(), "src")));
app.use('/dist', express.static(path.join(process.cwd(), "dist")));
app.use('/css', express.static(path.join(process.cwd(), "css")));
app.use('/img', express.static(path.join(process.cwd(), "IMG")));
import mariadb from 'mariadb';
console.log("sdaaa");
function GetAnimal() {
    const Animal = GetInputValue("Animal");
    PostAnimal(Animal);
    asyncFunction();
}
;
const db = mariadb.createPool({
    host: 'localhost',
    port: 3385,
    password: 'mypass',
    user: 'root',
    database: 'app_db',
    connectionLimit: 5
});
function asyncFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        let conn;
        try {
            conn = yield db.getConnection();
            const rows = yield conn.query("SELECT Name from Animal;");
            console.log(rows); //[ {val: 1}, meta: ... 
        }
        catch (err) {
            throw err;
        }
        finally {
            if (conn)
                return conn.end();
        }
    });
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
//# sourceMappingURL=index.js.map