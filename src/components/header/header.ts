import { Component } from '../templates/component'
import {PageID} from '../../app'
import './header.css';
const Buttons =[
  {
    id:PageID.Garage,
    text:"Garage "
  },
  {
    id:PageID.Winners,
    text:"Winners"
  }
]

export class  Header extends Component {
  constructor(tagName:string,className:string) {
    super(tagName,className)

  }
 renderHeader(){
   const padeBTNS= document.createElement('div');
  Buttons.forEach((button)=>{
    const buttonHTML = document.createElement('a')
    buttonHTML.href=`#${button.id}`
    buttonHTML.innerText=button.text
    padeBTNS.append(buttonHTML)
  })
  this.conteiner.append(padeBTNS)
  return this.conteiner
 }

  render(){
    this.renderHeader()
    return this.conteiner
  }
}
/*import { BaseComponent } from '../base-component';
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
