"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const number_router_1 = require("./number.router");
const bootstrap = () => {
    const app = (0, express_1.default)();
    const PORT = process.env.PORT || 4000;
    app.use(express_1.default.json());
    app.use('/', number_router_1.numberRouter);
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
};
bootstrap();
//# sourceMappingURL=app.js.map