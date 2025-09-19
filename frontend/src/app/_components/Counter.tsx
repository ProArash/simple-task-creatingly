'use client';

import { useState } from 'react';
import Button from './Button';

const Counter = () => {
	const [counter, setCounter] = useState<number>(0);
	const increaseNumber = () => {
		setCounter((prv) => prv + 1);
	};
	const decreaseNumber = () => {
		setCounter((prv) => (prv > 0 ? prv - 1 : prv));
	};
	return (
		<div className="flex flex-col items-center gap-5 p-5 shadow rounded-[16px]">
            <h1>Simple counter task</h1>
			<span>{`Counter: ${counter}`}</span>
			<div className="flex gap-5">
				<Button onClick={increaseNumber}>Increase</Button>
				<Button onClick={decreaseNumber}>Decrease</Button>
			</div>
		</div>
	);
};

export default Counter;
