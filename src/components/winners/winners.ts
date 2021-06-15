import { renderCar, renderWinnerCar} from '../car/car';
import { getCar,getWinner,getWinners } from '../store/store';
import { Page } from '../templates/page';
import './winners.css'

const wiinerURL = 'http://127.0.0.1:3000/winners';
interface WinnerCar{
  id:number,
  name:string,
  color:string,
  wins:number,
  time:number
}
let cars:any[] = [];

export class Winners extends Page {
  static TextObg = {
    MainTitle: 'Winners',
  };


  showWinners(page:string) {
    getWinners(page).then((json)=>{
      cars=[]
      cars.push(...json.items)
      console.log(cars)
    }).then(()=>{
      cars.forEach((car)=>{
        this.conteiner.innerHTML += renderWinnerCar(car)
        this.changePage();
      })
    })

  }

  initWinners() {
    getWinners('').then(() => {
      this.conteiner.innerHTML = `
      <h3>Winners (${localStorage.countW})</h3>
      <h4>Page ${localStorage.pageW}</h4>
      <div class="navigate-btns">
      <div id="previous">Prev</div>
      <div id="next">Next</div>
      </div>
      <ul class="winnersTable">
      <li>№</li>
      <li>Car</li>
      <li>Name</li>
      <li>Wins</li>
      <li>Time(s)</li>
      </ul>
    `;
    }).then(() =>{
      const { pageW } = localStorage;
      this.showWinners(pageW);
    });
  }
  changePage() {
    document.getElementById('next')?.addEventListener('click', () => {
      console.log('q')
      if (+localStorage.pageW < +localStorage.maxPageW) {
        localStorage.setItem('pageW', `${+localStorage.pageW + 1}`);
        this.initWinners();
      }
    });

    document.getElementById('previous')?.addEventListener('click', () => {
      if (+localStorage.pageW !== 1) {
        localStorage.setItem('pageW', `${+localStorage.pageW - 1}`);
        this.initWinners();
      }
    });
  }
  render() {
    const title = this.createHeader('');
    this.conteiner.append(title);
    this.initWinners();
    return this.conteiner;
  }
}
