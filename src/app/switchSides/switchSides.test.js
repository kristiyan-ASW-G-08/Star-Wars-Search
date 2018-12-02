import switchSides from './switchSides';
describe('switchSides', () => {
  beforeAll(() => {
    switchSides();
    switchSidesBtn.click();
  });
  const sides = [
    {
      side: 'ligth-side',
      color: 'rgb(79, 101, 199)',
      icon: '<i class="fas fa-jedi"></i>',
      text: 'Join the Dark Side!'
    },
    {
      side: 'dark-side',
      color: 'rgb(219, 58, 58)',
      icon: '<i class="fab fa-galactic-republic"></i>',
      text: 'Join the Light Side!'
    }
  ];
  document.body.innerHTML = `
    <button class="switch-sides-btn">Join the Light Side!<button>
    <button class="search-btn"><i class="fas fa-jedi"></i></button>
    `;
    const body = document.body
  const switchSidesBtn = document.querySelector('.switch-sides-btn');
  const icon = document.querySelector('.search-btn');
  describe('clicking switchSidesBtn for the first time', () => {
    it("switchSidesBtn's text content should change to 'Join the Light Side!'", () => {
      expect(switchSidesBtn.textContent).toMatch('Join the Light Side!');
    });
    it("Icon's inner html  should change to 'Join the Light Side!'", () => {
      expect(icon.innerHTML).toMatch(
        '<i class="fab fa-galactic-republic"></i>'
      );
    });
    it('local storage should have light side currentSide object', () => {
      const ls = JSON.parse(localStorage.getItem('currentSide'));
      expect(ls).toEqual(sides[1]);
    });
  });
  describe('clicking switchSidesBtn for the second time', () => {
    beforeAll(() => {
      switchSidesBtn.click();
    });
    it("switchSidesBtn's text content should change to 'Join the Light Side!'", () => {
      expect(switchSidesBtn.textContent).toMatch('Join the Dark Side!');
    });
    it("Icon's inner html  should change to 'Join the Light Side!'", () => {
      expect(icon.innerHTML).toMatch('<i class="fas fa-jedi"></i>');
    });
    it('local storage should have light side currentSide object', () => {
      const ls = JSON.parse(localStorage.getItem('currentSide'));
      expect(ls).toEqual(sides[0]);
    });
  });
});
