export default class Page {
  constructor(name) {
    this.target = document.querySelector('#app');
    this.pageName = name;
  }

  build(html) {
    this.target.className = `page-${this.pageName}`;

    this.target.appendChild(document.createRange().createContextualFragment(html));
  }
}
