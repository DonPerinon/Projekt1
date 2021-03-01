var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import mariadb from 'mariadb';
import express from 'express';
const app = express();
const db = mariadb.createPool({
    host: 'localhost',
    port: 3385,
    password: 'mypass',
    user: 'root',
    database: 'app_db',
    connectionLimit: 5
});
console.log(__dirname);
export function asyncFunction() {
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
asyncFunction();
app.listen(3000, () => console.log('Express server running at http://127.0.0.1:3000'));
app.get('/', function (request, response) {
    response.sendFile(path.join(process.cwd(), 'index.html'));
});
app.use('/src', express.static(path.join(process.cwd(), "src")));
app.use('/dist', express.static(path.join(process.cwd(), "dist")));
app.use('/css', express.static(path.join(process.cwd(), "css")));
app.use('/img', express.static(path.join(process.cwd(), "IMG")));
//# sourceMappingURL=index.js.map