import { useRef, useEffect } from "react";

const Rainbow = ({ children }) => {

	useEffect(() => {
		colorize(children);
	}, [children]);

	const reference = useRef(null);

	const colorize = (value) => {
		const element = reference.current;
		const letters = value.split('');
		letters.forEach((letter) => {
			let span;
			span = document.createElement('span');
			span.classList.add('rainbow__letter');
			span.innerText = letter;
			element.append(span);
		});
	};

	return (
		<span className="rainbow" ref={ reference }></span>
	);

};

export default Rainbow;