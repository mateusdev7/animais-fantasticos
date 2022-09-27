export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }
  // const accordionList = document.querySelectorAll();

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addEventAccordion() {
    this.accordionList[0].classList.add(this.activeClass);
    this.accordionList[0].nextElementSibling.classList.add(this.activeClass);
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => {
        this.toggleAccordion(item);
      });
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addEventAccordion();
    }
  }
}
