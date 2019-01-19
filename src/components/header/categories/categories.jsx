import React from 'react';
import { Link } from 'react-router-dom';

const Categories = props => {
    return (
        <ul className="cat_menu" style={props.show}>
            {props.categories.map((category, index) => {
                return (
                    <li key={index}>
                        <Link to={`/product-listing/${category}`}>
                            {category}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Categories;
