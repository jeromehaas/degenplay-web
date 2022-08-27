import { useRef, useEffect } from "react";

const Rainbow = ({ children }) => {
	
	const reference = useRef(null);

	const colorize = (value) => {
		const element = reference.current;
		const words = value.split(' ');
		words.forEach((word) => {
			const letters = word.split('');
			let wordSpan;
			wordSpan = document.createElement('span');
			wordSpan.classList.add('rainbow__word');
			letters.forEach((letter) => {
				let letterSpan;
				letterSpan = document.createElement('span');
				letter === ' ' ? letterSpan.classList.add('rainbow__space') : letterSpan.classList.add('rainbow__letter');
				letterSpan.innerText = letter;
				wordSpan.append(letterSpan);
			});
			element.append(wordSpan);
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