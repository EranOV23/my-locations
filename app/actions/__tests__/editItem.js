import { editItem } from '../creators';

let mockDispatch = {
    dispatch: (action) => {}
};

describe("edit Item action creator", ()=> {

    beforeEach(()=>{
        spyOn(mockDispatch, "dispatch");
    });

    it("should edit chosen item", ()=> {

        expect(mockDispatch.dispatch).toHaveBeenCalledTimes(0);
        expect(editItem().type).toBe("editItem");
        expect(editItem({name:"shoes", type: "category"}, "men shoes")).toMatchObject({data: {name: "shoes", type: "category"}, itemName: "men shoes", type: "editItem"});

    })
});