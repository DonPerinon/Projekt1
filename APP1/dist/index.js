"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.listen(3000, () => console.log('Express server running at http://127.0.0.1:3000'));
app.get('/', function (request, response) {
    response.sendFile(path_1.default.join(__dirname, '..', 'index.html'));
});
app.use(express_1.default.static(__dirname));
//# sourceMappingURL=index.js.map