import data from '../data';

describe('data to have a property of categories and locations arrays with items in it', () => {

  it('expect data to have property of categories', ()=> {
    expect(data).toHaveProperty("categories", expect.any(Array));
  });

  it('expect data to have property of locations', ()=> {
      expect(data).toHaveProperty("locations", expect.any(Array));
  });

  it('expect categories array to have object with name property', ()=> {
    expect(data["categories"][0]).toHaveProperty("name", expect.any(String))
  });

  it('expect locations array to have object with name property', ()=> {
    expect(data["locations"][0]).toHaveProperty("name", expect.any(String))
  });

  it('expect locations array to have object with category property', ()=> {
      expect(data["locations"][0]).toHaveProperty("category", expect.any(String))
  });

  it('expect locations array to have object with address property', ()=> {
      expect(data["locations"][0]).toHaveProperty("address", expect.any(String))
  });

  it('expect locations array to have object with coordinates property', ()=> {
      expect(data["locations"][0]).toHaveProperty("coordinates", expect.any(Object))
  });

  it('expect locations array to have object with name property', ()=> {
      expect(data["locations"][0]).toHaveProperty("name", expect.any(String))
  });

});
