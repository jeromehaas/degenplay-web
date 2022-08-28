import DesktopNavigation from "components/03-organisms/desktop-navigation/desktop-navitgation";
import MobileNavigation from "components/03-organisms/mobile-navigation/mobile-navigation";
import TeaserBanner from "components/03-organisms/teaser-banner/teaser-banner";
import Notifier from "components/03-organisms/notifier/notifier";
import { useRef } from 'react';

const Page = ({ className, children }) => {

	const reference = useRef();
	
	const updateSelectionColor = () => {
		const element = reference.current;
		const currentColor = element.getAttribute('data-color');
		const colors = ['red', 'orange', 'green', 'blue'];
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		if (randomColor === currentColor) return updateSelectionColor();
		element.classList.remove('page__selection--red', 'page__selection--orange', 'page__selection--green', 'page__selection--blue', )	
		element.classList.add(`page__selection--${ randomColor }`);
		element.setAttribute('data-color', randomColor);
	};


	return (
		<div className={ `${className ? className : '' } page page__selection--blue`} tabIndex="0" onMouseDown={ updateSelectionColor } ref={ reference }  >
			<TeaserBanner />
			<DesktopNavigation />
			<MobileNavigation />
			{ children }
			<Notifier />
		</div>
	)
};

export default Page;