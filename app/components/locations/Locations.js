import React from 'react';
import {connect} from 'react-redux';
import {getAllLocations} from '../../actions/creators';
import LocationsList from './LocationsList';


class Locations extends React.Component {
    constructor(props){
        super(props);

        this.props.getAllLocations();
    }

    render() {
        return (
            <div>
                <LocationsList locations={this.props.locations}/>
            </div>
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
        getAllLocations: () => dispatch(getAllLocations()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)
