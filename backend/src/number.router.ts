import express from 'express';
import { numberController } from './number.controller';
const router = express.Router();

export const numberRouter = router;

router.post('/sum', numberController.sumNumbers);
