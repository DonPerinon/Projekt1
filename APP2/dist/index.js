"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncFunction = exports.db = void 0;
const express_1 = __importDefault(require("express"));
const mariadb_1 = __importDefault(require("mariadb"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
exports.db = mariadb_1.default.createPool({
    host: 'db',
    password: 'mypass',
    user: 'root',
    database: 'APP_DB',
    connectionLimit: 5
});
function asyncFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        let conn;
        try {
            conn = yield exports.db.getConnection();
            const rows = yield conn.query("SELECT * from Name;");
            console.log(rows); //[ {val: 1}, meta: ... ]
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
exports.asyncFunction = asyncFunction;
app.listen(3000, () => console.log('Express server running at http://127.0.0.1:3000'));
app.get('/', function (request, response) {
    response.sendFile(path_1.default.join(__dirname, '..', 'index.html'));
});
app.use(express_1.default.static(__dirname));
app.use('/css', express_1.default.static(path_1.default.join(process.cwd(), "css")));
//# sourceMappingURL=index.js.map