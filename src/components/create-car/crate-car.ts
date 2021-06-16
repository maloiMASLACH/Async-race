import { BaseComponent } from '../base-component';
import './create-car.css';

export class CrateCar extends BaseComponent {
  constructor() {
    super('main', ['create-car']);
  }

  initForm = () => {
    const main = document.querySelector('main');
    if (main) {
      main.innerHTML = `
      <form class="add-form" id="form1">
        <input type="text">
        <input type="color">
        <button type"button">Create</button>
      </form>
      <form class="update-form" id="form2">
        <input type="text">
        <input type="color">
        <button type"button">Update</button>
        </form>

      `;
    }
  };
}
