import { useRef } from 'react';
import { items } from 'components/02-molecules/accordion/data.js';

const Accordion = () => {
 
    const handleClick = (event) => {
        const clickedItem = event.target.closest('.accordion__item');
        const allItems = document.querySelectorAll('.accordion__item');
        allItems.forEach((item) => {
            if (item === clickedItem) return;
            item.classList.remove('item--open')
        });
        clickedItem.classList.toggle('item--open');
    };

    return (
        <div className="accordion">
            { items && items.map((item, index) => (
                <div className="accordion__item item" key={ index } onClick={ handleClick }>
                    <div className="item__heading">{ item.question }</div>
                    <i className="item__icon icon icon--caret"></i>
                    <div className="item__text">{ item.answer }</div>
                </div>
            ))}
        </div>
    );

};

export default Accordion;