import React from 'react';

const Categories = props => {
    return (
        <ul className="cat_menu" style={props.show}>
            {props.categories.map((category, index) => {
                return (
                    <li key={index}>
                        <a href="javascript:void(0)">
                            {category}
                            <i className="fas fa-chevron-right ml-auto" />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default Categories;
