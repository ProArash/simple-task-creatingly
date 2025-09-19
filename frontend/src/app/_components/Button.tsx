import { ReactNode } from 'react';

const Button = ({
	children,
	onClick,
}: {
	children: ReactNode;
	onClick: () => void;
}) => {
	return (
		<button
			className="flex rounded-lg bg-blue-500 text-white p-2 items-center active:bg-blue-600 transition hover:bg-blue-400"
			onClick={onClick}>
			<span>{children}</span>
		</button>
	);
};

export default Button;
