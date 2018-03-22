import Page from './Page';

export default class AboutPage extends Page {
  constructor() {
    super('about');
  }

  render() {
    this.build(`
      <h1>About</h1>
    `);
  }
}
