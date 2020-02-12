import {renderHook, act} from "@testing-library/react-hooks/lib/pure.js";
import {useFetch} from "./hooks";
import {BASE_URL} from "./constants";

test("should create correct state from fetch calls", () => {
    function mockFetch(data) {
        return jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json: () => data
            })
        );
    }

    const mockData = {mockElement: "mockValue"};
    window.fetch = mockFetch(mockData);

    const {result} = renderHook(() => useFetch("users"));

    act(() => {
        expect(fetch).toHaveBeenCalledWith(`${BASE_URL}users.json`);

        expect(result).toEqual({current: []});
    });
});