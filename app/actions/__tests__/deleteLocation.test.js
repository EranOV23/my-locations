import { deleteLocation } from '../creators';

let mockDispatch = {
    dispatch: (action) => {}
};

describe("delete location action creator", ()=> {

    beforeEach(()=>{
        spyOn(mockDispatch, "dispatch");
    });

    it("should delete chosen location", ()=> {

        expect(mockDispatch.dispatch).toHaveBeenCalledTimes(0);
        expect(deleteLocation().type).toBe("deleteLocation");
        expect(deleteLocation("1947")).toHaveProperty("location", "1947");

    })
});