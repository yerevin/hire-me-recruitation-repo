import { getParameterByName } from "core/utils/methods";

describe("Tests for utils", () => {
  it("Should not return `not_test` query URL param value", () => {
    const result = getParameterByName(
      "test",
      "http://localhost.com?not_test=1"
    );
    expect(result).toBe(null);
  });

  it("Should return `test` query URL param value", () => {
    const result = getParameterByName("test", "http://localhost.com?test=1");
    expect(result).toBe("1");
  });
});
