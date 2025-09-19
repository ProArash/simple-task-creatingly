import { Request, Response } from 'express';
import { NumberDto } from './number.dto';

export const numberController = {
	sumNumbers: async (req: Request, res: Response) => {
		const dto = req.body as NumberDto;
		if (!dto || dto.numArray.length == 0)
			return res
				.status(400)
				.json({ message: 'Number array is required.' });
		const result = dto.numArray.reduce(
			(firstNum, current) => firstNum + current
		);
		res.json({
			data: result,
		});
	},
};
