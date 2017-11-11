import { getAllLocations } from '../creators';

let mockDispatch = {
    dispatch: (action) => {}
};

let mockPostsService = {
    getAllLocations: () => {
        return {then: cb => cb(true)};
    }
};

describe("get all locations action creator", ()=>{

    beforeEach(()=>{
        spyOn(mockDispatch, "dispatch");
        spyOn(mockPostsService, "getAllLocations").and.callThrough();
    });

    it("should get all locations", ()=> {
        let thunked = getAllLocations(mockPostsService);
        thunked(mockDispatch.dispatch);

        expect(mockDispatch.dispatch).toHaveBeenCalledTimes(2);

        let [firstAction] = mockDispatch.dispatch.calls.argsFor(0);
        expect(firstAction.type).toBe("getLocationsRequset");
        expect(mockPostsService.getAllLocations).toHaveBeenCalled();

        let [secondAction] = mockDispatch.dispatch.calls.argsFor(1);
        expect(secondAction.type).toBe("getLocationsRespond");
        expect(secondAction.data).toBe(true);

    });
});

