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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shell = __importStar(require("shelljs"));
const routes = __importStar(require("./routes"));
shell.cp("-R", "src/views", "dist/");
const path_1 = __importDefault(require("path"));
const Keycloak = require('keycloak-connect');
const session = require('express-session');
const express_1 = __importDefault(require("express"));
require('dotenv').config({ path: path_1.default.resolve(__dirname, '../.env') });
const app = express_1.default();
const memoryStore = new session.MemoryStore();
// session
app.use(session({
    secret: 'thisShouldBeLongAndSecret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));
const keycloak = new Keycloak({ store: memoryStore });
app.use(keycloak.middleware({ logout: '/logoff' }));
// app.use(keycloak.middleware())
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express_1.default.json());
app.get('/test', keycloak.protect(), function (req, res) {
    res.cookie('token', 'ahoj');
    res.render('test', { title: 'Test of the test' });
});
app.get('/', keycloak.protect(), (request, response) => {
    response.render("index");
});
app.use(keycloak.middleware({ logout: '/' }));
app.listen(3000, () => { console.log('Express server running at http://127.0.0.1:3000'); });
// Routes registerd
routes.register(app);
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
//# sourceMappingURL=index.js.map