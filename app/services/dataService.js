import "isomorphic-fetch";

class DataService{

    constructor(){
        this.url = `/api/data`;
    }

    getAllLocations(){
        if(localStorage.getItem('locations')){
            console.log("Locations from local storage");
            let locations = localStorage.getItem('locations');
            return Promise.resolve(JSON.parse(locations))
        }
        return this.getLocationsFromServer()
    }

    getLocationsFromServer(){
        console.log("Locations from server");
        return fetch(this.url)
            .then(response => response.json())
            .then(response => response.locations)
    }

    getAllCategories(){
        if(localStorage.getItem('categories')){
            console.log("Categories from local storage");
            let categories = localStorage.getItem('categories');
            return Promise.resolve(JSON.parse(categories))
        }
        return this.getCategoriesFromServer()
    }

    getCategoriesFromServer(){
        console.log("Categories from server");
        return fetch(this.url)
            .then(response =>response.json())
            .then(response => response.categories)
    }
}

export default module.exports = new DataService();
