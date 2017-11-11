import dataService from '../dataService';


const fullUrl = 'http://localhost:9090/api/data';
dataService.url = fullUrl;


describe('check dataService methods', () => {

  it('expect getAllLocations to return locations array', () => {
      expect.assertions(1);
      return dataService.getLocationsFromServer()
          .then( data => expect(data).toHaveLength(9) )
  });

    it('expect getAllCategories to return categories array', () => {
      expect.assertions(1);
      return dataService.getCategoriesFromServer()
        .then( data => expect(data).toHaveLength(3) )
    });


});
