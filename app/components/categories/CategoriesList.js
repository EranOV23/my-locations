import React from 'react';
import {connect} from 'react-redux';
import {deleteCategory} from '../../actions/creators';
import {NavLink} from 'react-router-dom';

import './categoriesList.scss';

class CategoriesList extends React.Component {
    constructor(){
        super();
        this.state = {
            catSelected: "",
        }
    }

    deleteCat(category){
        console.log(category);
        this.props.deleteCategory(category);
    }

    selectCategory(catSelected){
        console.log(catSelected);
        this.setState({catSelected});
    }

    renderCategories(category, i){
        return <li key={i}>
            <div onClick={()=>this.selectCategory(category.name)}>
                <h3>{category.name}</h3>
                <div className="actions">
                    <span onClick={()=>this.deleteCat(category.name)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                    <span><NavLink to={`/manage/categories/edit/${category.name}`}><i className="fa fa-pencil" aria-hidden="true"></i></NavLink></span>
                </div>
            </div>
            <div className="locations-list">
                {
                    this.state.catSelected === category.name ?
                    this.props.locations.filter((location) => {
                        return location.category === category.name
                    }).map((location, i)=><span key={i}><strong>name: </strong>{location.name}, <strong>address: </strong>{location.address}</span>):
                    ""
                }
            </div>
            <hr/>
        </li>
    }

    render() {
        return (
            <ul className="categories-list">
                {this.props.categories.map( (category, i) => this.renderCategories(category, i) )}
            </ul>
        )
    }
}


function mapStateToProps(state) {
    return {
        locations: state.data.locations
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteCategory: (category) => dispatch(deleteCategory(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList)
