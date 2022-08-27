import { useRef, useEffect } from "react";

const Rainbow = ({ children }) => {
	
	const reference = useRef(null);

	// const colorize = (value) => {
	// 	const element = reference.current;
	// 	const letters = value.split('');
	// 	letters.forEach((letter) => {
	// 		let span;
	// 		span = document.createElement('span');
	// 		letter === ' ' ? span.classList.add('rainbow__space') : span.classList.add('rainbow__letter');
	// 		span.innerText = letter;
	// 		element.append(span);
	// 	});
	// };

	const colorize = (value) => {
		const element = reference.current;
		const words = value.split(' ');
		words.map((word) => {

			let wordSpan;
			wordSpan = document.createElement('span');
			wordSpan.classList.add('rainbow__word');

			const letters = word.split('');
			letters.map((letter) => {
				let letterSpan;
				letterSpan = document.createElement('span');
				letter === ' ' ? letterSpan.classList.add('rainbow__space') : letterSpan.classList.add('rainbow__letter');
				letterSpan.innerText = letter;
				wordSpan.append(letterSpan);
			});

			element.append(wordSpan);

		});

		console.log(words);
		// const letters = value.split('');
		// letters.forEach((letter) => {
		// 	let span;
		// 	span = document.createElement('span');
		// 	letter === ' ' ? span.classList.add('rainbow__space') : span.classList.add('rainbow__letter');
		// 	span.innerText = letter;
		// 	element.append(span);
		// });
	};
	
	useEffect(() => {
		colorize(children);
	}, [children]);

	return (
		<span className="rainbow" ref={ reference }></span>
	);

};

export default Rainbow;