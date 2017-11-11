import React from 'react';
import { NavLink } from 'react-router-dom';

import './footer.scss';

export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <ul className="footer-list">
                    <li><NavLink to="/categories" activeClassName="active">Categories</NavLink></li>
                    <li><NavLink to="/locations" activeClassName="active">Locations</NavLink></li>
                </ul>
            </div>
        )
    }
}
