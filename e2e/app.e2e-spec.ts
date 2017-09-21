import { DaudrWebPage } from './app.po';

describe('daudr-web App', () => {
  let page: DaudrWebPage;

  beforeEach(() => {
    page = new DaudrWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
