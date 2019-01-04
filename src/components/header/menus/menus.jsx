import React from 'react';
import { Link } from 'react-router-dom';

class Menus extends React.Component {
    render() {
        return (
            <ul className="standard_dropdown main_nav_dropdown">
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                {this.props.menus.map((item, index) => {
                    return (
                        <li className="hassubs" key={index}>
                            <a href="javascript:void(0)">
                                {item.name}
                                {item.sub && item.sub.length ? (
                                    <i className="fas fa-chevron-down" />
                                ) : (
                                    ''
                                )}
                            </a>
                            {item.sub && item.sub.length ? (
                                <ul>
                                    {item.sub.map((subItem, subIndex) => {
                                        return (
                                            <li key={subIndex}>
                                                <a href="javascript:void(0)">{subItem}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                ''
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default Menus;
