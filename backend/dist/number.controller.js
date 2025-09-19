"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberController = void 0;
exports.numberController = {
    sumNumbers: async (req, res) => {
        const dto = req.body;
        if (!dto || dto.numArray.length == 0)
            return res
                .status(400)
                .json({ message: 'Number array is required.' });
        const result = dto.numArray.reduce((firstNum, current) => firstNum + current);
        res.json({
            data: result,
        });
    },
};
//# sourceMappingURL=number.controller.js.map