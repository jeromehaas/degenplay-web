import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import { useRef } from 'react';

const Accordion = ({ items}) => {
 
    const reference = useRef();

    const handleClick = (event) => {
        const clickedItem = event.target.closest('.accordion__item');
        const clickedItemText = clickedItem.querySelector('.item__text');
        const clickedItemIcon = clickedItem.querySelector('.item__icon');
        const clickedItemHeight = clickedItem.scrollHeight + clickedItemText.scrollHeight;
        const allItems = document.querySelectorAll('.accordion__item');
        allItems.forEach((item) => {
            const text = item.querySelector('.item__text');
            const icon = item.querySelector('.item__icon'); 
            text.style.maxHeight = '0px';
            text.style.opacity = '0';
            text.style.paddingTop = '0px';
            icon.style.transform = 'rotate(0deg)';
        });
        clickedItemText.style.maxHeight = `${clickedItemHeight}px`;
        clickedItemText.style.opacity = '1';
        clickedItemText.style.paddingTop = '16px';
        clickedItemIcon.style.transform = 'rotate(180deg)';
    };

    return (
        <div className="accordion">
            { items && items.map((item, index) => (
                <div className="accordion__item item" key={ index } onClick={ handleClick } ref={ reference } >
                    <Text className="item__heading">{ item.question }</Text>
                    <i className="item__icon icon icon--caret"></i>
                    <Text className="item__text">{ item.answer }</Text>
                </div>
            ))}
        </div>
    );

};

export default Accordion;