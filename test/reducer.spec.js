jest.mock("axios", () => async url => ({ data: { url, foo: "bar" } }));

import { dispatchMiddleware } from "../src/store/reducer";

describe("dispatchMiddleware", () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  test("should be defined", () => {
    expect(dispatchMiddleware).toBeDefined();
    expect(dispatchMiddleware).toBeInstanceOf(Function);
  });

  test("should dispatch `LOAD_SUCCESS` if successful load", async () => {
    const dispatcher = dispatchMiddleware(dispatch);
    await dispatcher({ type: "LOAD" });
    const expected = {
      type: "LOAD_SUCCESS",
      data: {
        url: "http://localhost:3010/subjects",
        foo: "bar"
      }
    };
    expect(dispatch).toHaveBeenCalledWith(expected);
  });
});
