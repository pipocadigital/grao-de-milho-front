import Page from './Page';

export default class HomePage extends Page {
  constructor() {
    super('home');
  }

  render() {
    this.build(`
      <h1>Home</h1>
    `);
  }
}
