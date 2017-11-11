import { addItem } from '../creators';

let mockDispatch = {
    dispatch: (action) => {}
};

describe("add item action creator", ()=> {

    beforeEach(()=>{
        spyOn(mockDispatch, "dispatch");
    });

    it("should add chosen item", ()=> {

        expect(mockDispatch.dispatch).toHaveBeenCalledTimes(0);
        expect(addItem().type).toBe("addItem");
        expect(addItem({name:"eran", type: "category"})).toMatchObject({"data": {name:"eran", type: "category"}, "type": "addItem"});

    })
});