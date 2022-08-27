import Accordion from "components/02-molecules/accordion/accordion";
import Logo from "components/01-atoms/logo/logo";
import Text from "components/01-atoms/text/text";
import { items } from 'components/03-organisms/faq/data.js';

const FAQ = () => {

    return (
        <div className="faq section">
            <div className="faq__inner section__inner">
                <div className="faq__teaser teaser">
                    <Logo className="teaser__logo logo--white" />
                    <Text className="teaser__text text--white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
                </div>
                <Accordion classNames="faq__items" items={ items } />
            </div>
        </div>
    );

};

export default FAQ;