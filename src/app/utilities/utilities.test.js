import utilities from './utilities';
describe('utilities', () => {
  describe('setToLS', () => {
    it('should set item to ls', () => {
      const item = { name: 'test' };
      const target = 'test';
      utilities.setToLS(target, item);
      const ls = JSON.parse(localStorage.getItem(target));
      expect(ls).toEqual({
        name: 'test'
      });
    });
  });
  describe('capitalize letters', () => {
    const str = 'i am your father!!!';
    const capitalizedStr = 'I Am Your Father!!!';
    it('should captilize the first letter of each word', () => {
      expect(utilities.capitalizeLetters(str)).toMatch(capitalizedStr);
    });
  });
  describe('processObject', () => {
    const obj = {
      name: 'Darth Vader',
      starships: ['one', 'two', 'three'],
      fakeUrl: 'https://fakeVader.endor',
      edited: 'fake date'
    };
    const processedObject = {
      name: 'Darth Vader'
    };
    it('should process obj', () => {
      expect(utilities.processObject(obj)).toEqual(processedObject);
    });
  });
});
