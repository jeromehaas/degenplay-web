import DesktopNavigation from "components/03-organisms/desktop-navigation/desktop-navitgation";
import MobileNavigation from "components/03-organisms/mobile-navigation/mobile-navigation";
import TeaserBanner from "components/03-organisms/teaser-banner/teaser-banner";
import Notifier from "components/03-organisms/notifier/notifier";
import { useRef } from 'react';

const Page = ({ className, children }) => {

	const reference = useRef();
	
	const updateRandomColor = () => {
		const element = reference.current;
		const currentColor = element.getAttribute('data-color');
		const colors = ['red', 'orange', 'green', 'blue'];
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		if (randomColor === currentColor) return updateRandomColor();
		element.classList.remove('page__random-color--red', 'page__random-color--orange', 'page__random-color--green', 'page__random-color--blue', )	
		element.classList.add(`page__random-color--white`);
		setTimeout(() =>  {
			element.classList.remove('page__random-color--white', )	
			element.setAttribute('data-color', randomColor);
			element.classList.add(`page__random-color--${ randomColor }`);
		}, 100)
	};


	return (
		<div className={ `${className ? className : '' } page page__random-color--blue`} tabIndex="0" onMouseDown={ updateRandomColor } ref={ reference }  >
			<TeaserBanner />
			<DesktopNavigation />
			<MobileNavigation />
			{ children }
			<Notifier />
		</div>
	)
};

export default Page;