import React from "react";
import PropTypes from "prop-types";

const TitleWithItems = (
    {
        title,
        items
    }) => {
    return (
        <div className='w-full'>
            <h2 className='text-left'>{title}</h2>
            <ul >
            {items.map((ItemComponent, index) => (
                <li key={index} className='p-1 md:p-2'>
                    {/* 하위 컴포넌트를 렌더링 */}
                    {React.isValidElement(ItemComponent) ? ItemComponent : <ItemComponent />}
                </li>
            ))}
        </ul>
        </div>
    )
}

TitleWithItems.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default TitleWithItems;