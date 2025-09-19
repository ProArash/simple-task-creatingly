import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { numberRouter } from './number.router';

const bootstrap = () => {
	const app = express();
	const PORT = process.env.PORT || 4000;
	app.use(express.json());
	app.use('/', numberRouter);

	app.listen(PORT, () => {
		console.log(`server is running on port ${PORT}`);
	});
};

bootstrap();
