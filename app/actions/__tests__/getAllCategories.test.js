import { getAllCategories } from '../creators';

let mockDispatch = {
    dispatch: (action) => {}
};

let mockPostsService = {
    getAllCategories: () => {
        return {then: cb => cb(true)};
    }
};

describe("get all categories action creator", ()=>{

    beforeEach(()=>{
        spyOn(mockDispatch, "dispatch");
        spyOn(mockPostsService, "getAllCategories").and.callThrough();
    });

    it("should get all categories", ()=> {
        let thunked = getAllCategories(mockPostsService);
        thunked(mockDispatch.dispatch);

        expect(mockDispatch.dispatch).toHaveBeenCalledTimes(2);

        let [firstAction] = mockDispatch.dispatch.calls.argsFor(0);
        expect(firstAction.type).toBe("getCategoriesRequset");
        expect(mockPostsService.getAllCategories).toHaveBeenCalled();

        let [secondAction] = mockDispatch.dispatch.calls.argsFor(1);
        expect(secondAction.type).toBe("getCategoriesRespond");
        expect(secondAction.data).toBe(true);

    });
});

