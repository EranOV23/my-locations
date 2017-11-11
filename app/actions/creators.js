import * as ACTIONS from '../constants/index'
import DataService from '../services/dataService';

export function getAllCategories(dataService = DataService) {
    return dispatch => {
        dispatch({type: ACTIONS.GET_CATEGORIES_REQUEST});

        dataService.getAllCategories()
            .then( data => dispatch({type: ACTIONS.GET_CATEGORIES_RESPOND, data }) )
    }
}

export function getAllLocations(dataService = DataService) {
    return dispatch => {
        dispatch({type: ACTIONS.GET_LOCATIONS_REQUEST});

        dataService.getAllLocations()
            .then( data => dispatch({type: ACTIONS.GET_LOCATIONS_RESPOND, data }) )
    }
}

export function deleteCategory(category) {
    return {type: ACTIONS.DELETE_CATEGORY, category };
}

export function deleteLocation(location) {
    return {type: ACTIONS.DELETE_LOCATION, location };
}

export function addItem(data) {
    return {type: ACTIONS.ADD_ITEM, data};
}

export function editItem(data , itemName) {
    return {type: ACTIONS.EDIT_ITEM, data , itemName};
}