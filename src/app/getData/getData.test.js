import getData from "./getData";
jest.mock("./getData");

const mockData = [{ name: "Death Star" }];

getData.mockResolvedValue(mockData);
describe("getData", () => {
  it("should fetch data", async () => {
    await expect(getData()).resolves.toEqual(mockData);
  });
});
