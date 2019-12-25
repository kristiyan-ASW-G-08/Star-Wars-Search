import { processObject, capitalizeLetters, setToLS } from "./utilities";
describe("utilities", () => {
  describe("setToLS", () => {
    it("should set item to ls", () => {
      const item = { name: "test" };
      const target = "test";
      setToLS(target, item);
      const ls = JSON.parse(localStorage.getItem(target));
      expect(ls).toEqual({
        name: "test"
      });
    });
  });
  describe("capitalize letters", () => {
    const words = [
      { string: "some word", capitalized: "Some Word" },
      { string: "i am your father!!!", capitalized: "I Am Your Father!!!" }
    ];
    it.each(words)(
      "should capitalize the first letter of each word",
      ({ string, capitalized }) => {
        expect(capitalizeLetters(string)).toMatch(capitalized);
      }
    );
  });
  describe("processObject", () => {
    const objects = [
      {
        object: {
          name: "Darth Vader",

          starships: ["one", "two", "three"],
          fakeUrl: "https://fakeVader.endor",
          edited: "fake date"
        },

        processed: { name: "Darth Vader" }
      }
    ];
    it.each(objects)(
      'should remove array, url and "edited" keys',
      ({ object, processed }) => {
        expect(processObject(object)).toMatchObject(processed);
      }
    );
  });
});
