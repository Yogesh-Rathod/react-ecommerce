import React from 'react';

class Categories extends React.Component {
    render() {
        return (
            <ul className="cat_menu" style={this.props.show}>
                {this.props.categories.map((category, index) => {
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
    }
}

export default Categories;
