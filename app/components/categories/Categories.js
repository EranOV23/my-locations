import React from 'react';
import {connect} from 'react-redux';
import {getAllCategories, getAllLocations} from '../../actions/creators';
import CategoriesList from './CategoriesList';

class Categories extends React.Component {
    constructor(props){
        super(props);

        this.props.getAllCategories();
        this.props.getAllLocations(); // so user will be able to see locations when clicking on category

    }

    render() {
        return (
            <div>
                <CategoriesList categories={this.props.categories}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        categories: state.data.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllCategories: () => dispatch(getAllCategories()),
        getAllLocations: () => dispatch(getAllLocations())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
