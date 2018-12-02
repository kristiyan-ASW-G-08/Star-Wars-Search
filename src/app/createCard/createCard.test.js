import createCard from './createCard';
describe('createCard', () => {
  const testObject = {
    title: 'test test',
    purpose: 'testing'
  };
  const card = createCard(testObject);
  it('should have DIV tag', () => {
    expect(card.tagName).toMatch('UL');
  });
  it('should have "device-card" class', () => {
    expect(card.className).toMatch('card');
  });
});
