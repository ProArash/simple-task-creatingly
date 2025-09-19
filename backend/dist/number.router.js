"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRouter = void 0;
const express_1 = __importDefault(require("express"));
const number_controller_1 = require("./number.controller");
const router = express_1.default.Router();
exports.numberRouter = router;
router.post('/sum', number_controller_1.numberController.sumNumbers);
//# sourceMappingURL=number.router.js.map