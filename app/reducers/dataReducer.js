import {GET_CATEGORIES_RESPOND, GET_LOCATIONS_RESPOND, DELETE_CATEGORY, DELETE_LOCATION, ADD_ITEM, EDIT_ITEM } from '../constants';
import { combineReducers } from 'redux';


function categoriesReducer (state = null, action){

    switch(action.type){

        case GET_CATEGORIES_RESPOND:
            localStorage.setItem('categories', JSON.stringify(action.data));
            return [...action.data];

        case DELETE_CATEGORY:
            let newList = state.filter( (category) => category.name !==  action.category);
            localStorage.setItem('categories', JSON.stringify(newList));
            return newList;

        case ADD_ITEM:
            if(action.data.type === 'categories'){
                let newState = [{name: action.data.item.name}, ...state];
                localStorage.setItem('categories', JSON.stringify(newState));
                console.log(newState);
                return newState;
            }
            return state;

        case EDIT_ITEM:
            if(action.data.type === 'categories'){
                let removeEdited = state.filter((item) => item.name !== action.itemName);
                let newState = [{name: action.data.item.name}, ...removeEdited];
                localStorage.setItem('categories', JSON.stringify(newState));
                return newState;
            }
            return state;
    }
    return state;
}

function locationsReducer (state = null, action){
    switch(action.type){
        case GET_LOCATIONS_RESPOND:
            localStorage.setItem('locations', JSON.stringify(action.data));
            return [...action.data];

        case DELETE_LOCATION:
            let newList = state.filter( (location) => location.name !==  action.location);
            localStorage.setItem('locations', JSON.stringify(newList));
            return newList;

        case ADD_ITEM:
            if(action.data.type === 'locations'){
                let newState = [action.data.item, ...state];
                localStorage.setItem('locations', JSON.stringify(newState));
                console.log(newState);
                return newState;
            }
            return state;

        case EDIT_ITEM:
            if(action.data.type === 'locations'){
                let removeEdited = state.filter((item) => item.name !== action.itemName);
                console.log(removeEdited);
                console.log(action.data.item);
                let newState = [action.data.item, ...removeEdited];
                localStorage.setItem('locations', JSON.stringify(newState));
                return newState;
            }
            return state;

    }
    return state
}

export default combineReducers({
    // Reducers go here
    categories: categoriesReducer,
    locations: locationsReducer,
});
