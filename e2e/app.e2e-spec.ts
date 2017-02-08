import { JobspecialistUIPage } from './app.po';

describe('jobspecialist-ui App', function() {
  let page: JobspecialistUIPage;

  beforeEach(() => {
    page = new JobspecialistUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
