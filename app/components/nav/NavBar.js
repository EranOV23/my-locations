import React from 'react';
import { NavLink } from 'react-router-dom';
import AddItem from '../addItem/AddItem';

import './navbar.scss';

export default class NavBar extends React.Component{
  constructor(){
    super();

  }

  render(){
    let title = this.props.match.params.page;
    return(
      <div className="navbar">
        <ul className="nav-list">
          <li>{title[0].toUpperCase()+title.slice(1)}</li>
          <li><NavLink to={`/manage/${title.toLowerCase()}`} activeClassName="active">Add Item</NavLink></li>

        </ul>
      </div>
    )
  }
}
