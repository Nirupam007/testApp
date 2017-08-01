import { CinemaPage } from './app.po';

describe('cinema App', () => {
  let page: CinemaPage;

  beforeEach(() => {
    page = new CinemaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
