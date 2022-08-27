import { useRef, useEffect } from "react";

const Rainbow = ({ children }) => {
	
	const reference = useRef(null);

	const colorize = (value) => {
		const element = reference.current;
		const letters = value.split('');
		letters.forEach((letter) => {
			let span;
			span = document.createElement('span');
			letter === ' ' ? span.classList.add('rainbow__space') : span.classList.add('rainbow__letter');
			span.innerText = letter;
			element.append(span);
		});
	};
	
	useEffect(() => {
		colorize(children);
	}, [children]);

	return (
		<span className="rainbow" ref={ reference }></span>
	);

};

export default Rainbow;