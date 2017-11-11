import { deleteCategory } from '../creators';

let mockDispatch = {
    dispatch: (action) => {}
};

describe("delete category action creator", ()=> {

    beforeEach(()=>{
        spyOn(mockDispatch, "dispatch");
    });

    it("should delete chosen category", ()=> {

      expect(mockDispatch.dispatch).toHaveBeenCalledTimes(0);
      expect(deleteCategory().type).toBe("deleteCategory");
      expect(deleteCategory("dresses")).toMatchObject({"category": "dresses", "type": "deleteCategory"});

    })
});