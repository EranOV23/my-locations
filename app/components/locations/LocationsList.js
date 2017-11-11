import React from 'react';
import {connect} from 'react-redux';
import {deleteLocation} from '../../actions/creators';
import {NavLink} from 'react-router-dom';

import './locationsList.scss';

class LocationsList extends React.Component {

    constructor(){
        super();
        this.state = {
            sortedList: [],
            locationSelected: "",
        }
    }

    deleteLocation(location){
        this.props.deleteLocation(location);
    }

    selectLocation(locationSelected){
        this.setState({locationSelected})
    }

    sortABC(){
        let sortedABC = this.props.locations.sort((a, b) => {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
        this.setState({sortedList :sortedABC});
    }

    sortAbcCat(){
        let sortAbcCat = this.props.locations.sort((a, b) => {
            let categoryA = a.category.toUpperCase();
            let categoryB = b.category.toUpperCase();
            return (categoryA < categoryB) ? -1 : (categoryA > categoryB) ? 1 : 0;
        });
        this.setState({sortedList: sortAbcCat});
    }


    renderLocations(location, i){
        return (
            <li key={i}>
                <div className="location">
                    <div className="content">
                        <h3 onClick={()=>this.selectLocation(location.name)}>{location.name}</h3>
                        <p>Category: {location.category}</p>
                        <div className="info">
                            {this.state.locationSelected === location.name ?
                                <div>
                                    <p>Address : {location.address}</p>
                                    <NavLink to={`/map/${location.coordinates.lat}/${location.coordinates.lng}`}>
                                        <button className="btn">View on map</button>
                                    </NavLink>
                                </div> :
                                ""}
                        </div>
                    </div>
                    <div className="actions">
                        <span onClick={()=>this.deleteLocation(location.name)}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </span>
                        <span><NavLink to={`/manage/locations/edit/${location.name}`}>
                            <i className="fa fa-pencil" aria-hidden="true"></i></NavLink>
                        </span>
                    </div>
                </div>
                <hr/>
            </li>)
    }

    render(){
        return (
            <div>
                <ul key="sort-list" className="sort-list">
                    <li><button className="btn" onClick={()=>this.sortABC()}>Sort By Name</button></li>
                    <li><button className="btn" onClick={()=>this.sortAbcCat()}>Sort By Categories</button></li>
                </ul>
                <ul key="locations-list" className="locations-list">
                    {
                        this.state.sortedList.length !== 0 ?
                        this.state.sortedList.map( (location, i) => this.renderLocations(location, i) ) :
                        this.props.locations.map( (location, i) => this.renderLocations(location, i) )
                    }
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteLocation: (location) => dispatch(deleteLocation(location)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList)




