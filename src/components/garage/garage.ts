import {
  renderCar,
  createCar,
  generateRandomCars,
  startEngine,
  drive,
  saveWinner,
  deleteWinner,
} from '../car/car';
import { Page } from '../templates/page';
import {
  getCars, deleteCar, updateCar, getCar, getDistanceBetweenELements, animation, stopAnimation,
} from '../store/store';
import './garage.css';

const garageURL = 'http://127.0.0.1:3000/garage';
interface Car{
  id:number,
  name:string,
  color:string,
  isEngineStarted:boolean
  speed:number
}
let cars:Car[] = [];

export class Garage extends Page {
  crateGarage(page:string) {
    getCars(page).then((json) => {
      cars = [];
      console.log(json.items);
      return cars.push(...json.items);
    }).then(() => {
      this.conteiner.innerHTML += '<div class="allCars"></div>';
      const carCon = document.querySelector('.allCars');
      if (carCon) {
        carCon.innerHTML = '';
      }
      cars.map((car) => {
        if (carCon) {
          carCon.innerHTML += renderCar(car);
        }
        return car;
      });
      this.addCar();
      this.generate100();
      this.changePage();
      this.removeCar();
      this.recreateCar();
      this.initRace();
      this.startRaceAll();
      this.reset();
    });
  }

  addForm():void {
    getCars('').then(() => {
      this.conteiner.innerHTML = `
      <h3>Garage (${localStorage.count})</h3>
      <h4>Page ${localStorage.page}</h4>
      <div class="navigate-btns">
      <div id="previous">Prev</div>
      <div id="next">Next</div>
      </div>
    <form class="add-form" id="form1">
       <input type="text"id="nameAddID">
       <input type="color"id="colorAddID">
       <button type="submit">Create</button>
     </form>
     <form class="update-form" id="form2">
       <input type="text"id="nameUpdateID">
       <input type="color"id="colorUpdateID">
       <button>Update</button>
       </form>
       <div class="common-btns">
          <button class="race">Race</button>
          <button class="reset">Reset</button>
          <button class="generate">Generate</button>
       </div>
    `;
    }).then(() => {
      const { page } = localStorage;
      this.crateGarage(page);
    });
  }

  addCar() {
    const formToCreateCar = <HTMLFormElement>document.querySelector('.add-form');
    formToCreateCar?.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = (<HTMLInputElement>document.getElementById('nameAddID')).value;
      const colorInput = (<HTMLInputElement>document.getElementById('colorAddID')).value;
      if (nameInput !== '') {
        const body:object = {
          name: nameInput,
          color: colorInput,
        };
        createCar(body).then(() => {
          this.addForm();
          formToCreateCar.reset();
        });
      }
    });
  }

  removeCar() {
    document.querySelectorAll('.remove-button').forEach((removeBTN) => {
      removeBTN.addEventListener('click', () => {
        deleteWinner(removeBTN.id.split('-').slice(-1).join());
        deleteCar(removeBTN.id.split('-').slice(-1).join())
          .then(() => {
            this.addForm();
          });
      });
    });
  }

  recreateCar() {
    document.querySelectorAll('.select-button').forEach((selectBTN) => {
      selectBTN.addEventListener('click', () => {
        (<HTMLInputElement>document.getElementById('nameUpdateID')).placeholder = 'Enter new';
        document.querySelector('.update-form button')?.addEventListener('click', (e) => {
          e.preventDefault();
          const voidCar = {
            name: (<HTMLInputElement>document.getElementById('nameUpdateID')).value,
            color: (<HTMLInputElement>document.getElementById('colorUpdateID')).value,
          };
          updateCar(selectBTN.id.split('-').slice(-1).join(), voidCar)
            .then(() => {
              this.addForm();
            });
        });
      });
    });
  }

  generate100() {
    document.querySelector('.generate')?.addEventListener('click', () => {
      generateRandomCars().forEach((car) => {
        const body:object = {
          name: car.name,
          color: car.color,
        };
        createCar(body);
      });
      this.addForm();
    });
  }

  initRace = () => {
    document.querySelectorAll('.start-engine-button').forEach((a) => {
      a.addEventListener('click', () => {
        const carId = a.id.split('-').slice(-1).join('');
        startEngine(carId)
          .then((sp) => {
            getCar(carId)
              .then((item) => {
                item.isEngineStarted = true;
              })
              .then(() => {
                getCar(carId).then((car) => {
                  const distance = getDistanceBetweenELements(document.getElementById(`car-${carId}`), document.getElementById(`flag-${carId}`));
                  animation(document.getElementById(`car-${carId}`), distance, `${500000 / sp.velocity}`);
                  drive(carId)
                    .then((res) => {
                      console.log(res);
                    });
                });
              });
          });
      });
    });
  };

  startRaceAll = () => {
    document.querySelector('.race')?.addEventListener('click', () => {
      const carsRace:any = [];
      getCars(`${localStorage.page}`).then((mas) => {
        carsRace.push(...mas.items);
        const distance = getDistanceBetweenELements(document.querySelector('.car'), document.querySelector('.flag img'));
        carsRace.forEach((car:Car) => {
          const startTime = new Date().getTime();
          startEngine(`${car.id}`)
            .then((speed) => {
              getCar(`${car.id}`).then(() => {
                car.isEngineStarted = true;
              })
                .then(() => {
                  car.speed = speed.velocity;
                })
                .then(() => {
                  drive(`${car.id}`)
                    .then((res) => {
                      if (res.success === false) {
                        stopAnimation(document.getElementById(`car-${car.id}`));
                        sessionStorage.setItem(`500-${car.id}`, `${res.success}`);
                        return;
                      }
                      if (!sessionStorage.winner) {
                        sessionStorage.setItem('winner', `${car.name}`);
                        alert(sessionStorage.winner);
                        saveWinner(`${car.id}`, `${Math.round((new Date().getTime() - startTime) / 1000)}`);
                      }
                    });
                  animation(document.getElementById(`car-${car.id}`), distance, `${500000 / car.speed}`);
                });
            });
        });
        sessionStorage.clear();
      });
    });
  };

  changePage() {
    document.getElementById('next')?.addEventListener('click', () => {
      if (+localStorage.page < +localStorage.maxPage) {
        localStorage.setItem('page', `${+localStorage.page + 1}`);
        this.addForm();
      }
    });

    document.getElementById('previous')?.addEventListener('click', () => {
      if (+localStorage.page !== 1) {
        localStorage.setItem('page', `${+localStorage.page - 1}`);
        this.addForm();
      }
    });
  }

  reset() {
    document.querySelector('button.reset')?.addEventListener('click', () => {
      this.addForm();
    });
  }

  render() {
    const title = this.createHeader(/* Garage.TextObg.MainTitle */'');
    this.conteiner.append(title);
    this.addForm();
    return this.conteiner;
  }
}
