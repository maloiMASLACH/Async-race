import { Component } from '../templates/component';

import './header.css';

export const enum PageID{
  GarageP = 'garage',
  WinnersP = 'winners',
}
const Buttons = [
  {
    id: PageID.GarageP,
    text: 'Garage ',
  },
  {
    id: PageID.WinnersP,
    text: 'Winners',
  },
];

export class Header extends Component {
  renderHeader() {
    const padeBTNS = document.createElement('div');
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      padeBTNS.append(buttonHTML);
    });
    this.conteiner.append(padeBTNS);
    return this.conteiner;
  }

  render() {
    this.renderHeader();
    return this.conteiner;
  }
}
/* import { BaseComponent } from '../base-component';
import './header.css';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
  }
  createHeader = ():void => {
    const head = document.querySelector('body');
    if (head) {
      head.innerHTML = `
      <header>
        <div class="garage-head">
         Garage
        </div>
        <div class="winners-head">
          Winners
        </div>
      </header>
      <main>

      </main>
      `;
    }
  };
}
*/
