import Page from './Page';

export default class NotFound extends Page {
  constructor() {
    super('404');
  }

  render() {
    this.build(`
      <h1>404</h1>
    `);
  }
}
