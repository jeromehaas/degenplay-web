import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";

const Accordion = ({ items}) => {
 
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
                    <Text className="item__heading">{ item.question }</Text>
                    <i className="item__icon icon icon--caret"></i>
                    <Text className="item__text">{ item.answer }</Text>
                </div>
            ))}
        </div>
    );

};

export default Accordion;