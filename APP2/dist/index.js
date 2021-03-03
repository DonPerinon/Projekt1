"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const shell = __importStar(require("shelljs"));
const routes = __importStar(require("./routes"));
shell.cp("-R", "src/views", "dist/");
// const require = createRequire(import.meta.url);
const path_1 = __importDefault(require("path"));
// import mariadb from'mariadb';
const mariadb_1 = __importDefault(require("mariadb"));
// import express from 'express';
// import express from '../node_modules/@types/express/';
const express_1 = __importDefault(require("express"));
const app = express_1.default();
exports.db = mariadb_1.default.createPool({
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
            conn = yield exports.db.getConnection();
            const rows = yield conn.query("SELECT Name from Animal;");
            console.log(rows); // [ {val: 1}, meta: ...
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
;
app.listen(3000, () => { console.log('Express server running at http://127.0.0.1:3000'); });
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express_1.default.json());
app.get('/', function (request, response) {
    response.render("index");
});
// Routes registerd
routes.register(app);
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
//# sourceMappingURL=index.js.map