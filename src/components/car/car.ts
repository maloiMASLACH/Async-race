import './car.css';

const garageURL = 'http://127.0.0.1:3000/garage';
const winnersURL = 'http://127.0.0.1:3000/winners';

interface Car{
  id:number,
  name:string,
  color:string,
  isEngineStarted:boolean
}
interface WinnerCar{
  id:number,
  name:string,
  color:string,
  wins:number,
  time:number
}
const renderCarImage = (color:string) => `
<?xml version="1.0" encoding="utf-8"?><svg width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 35.03" style="enable-background:new 0 0 122.88 35.03 ;fill:${color}" xml:space="preserve"><style type="text/css" >.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0"
d="M 25.58 13.57 c -5.93 0 -10.73 4.8 -10.73 10.73 c 0 5.93 4.8 10.73 10.73 10.73 s 10.73 -4.8 10.73 -10.73 C 36.31 18.37 31.51 13.57 25.58 13.57 L 25.58 13.57 z M 45.95 5 c 0.59 1.27 1.06 2.69 1.42 4.23 c 0.82 2.57 -0.39 3.11 -3.19 2.06 c -2.06 -1.23 -4.12 -2.47 -6.18 -3.7 c -1.05 -0.74 -1.55 -1.47 -1.38 -2.19 c 0.34 -1.42 3.08 -2.16 5.33 -2.6 C 44.81 2.23 44.61 2.11 45.95 5 L 45.95 5 z M 101.14 19.31 c -2.75 0 -4.99 2.23 -4.99 4.99 c 0 2.75 2.23 4.99 4.99 4.99 c 2.75 0 4.99 -2.23 4.99 -4.99 C 106.13 21.54 103.9 19.31 101.14 19.31 L 101.14 19.31 z M 25.58 19.31 c -2.75 0 -4.99 2.23 -4.99 4.99 c 0 2.75 2.23 4.99 4.99 4.99 c 2.75 0 4.99 -2.23 4.99 -4.99 C 30.57 21.54 28.34 19.31 25.58 19.31 L 25.58 19.31 z M 78.86 12.5 c -2.77 -2.97 -5.97 -4.9 -9.67 -6.76 c -8.1 -4.08 -13.06 -3.58 -21.66 -3.58 l 2.89 7.5 c 1.21 1.6 2.58 2.73 4.66 2.84 H 78.86 L 78.86 12.5 z M 101.14 13.57 c -5.93 0 -10.73 4.8 -10.73 10.73 c 0 5.93 4.8 10.73 10.73 10.73 s 10.73 -4.8 10.73 -10.73 C 111.87 18.37 107.07 13.57 101.14 13.57 L 101.14 13.57 z M 84.18 10.3 c -3.52 -2.19 -7.35 -4.15 -11.59 -5.82 c -12.91 -5.09 -22.78 -6 -36.32 -1.9 c -4.08 1.55 -8.16 3.1 -12.24 4.06 c -4.03 0.96 -21.48 1.88 -21.91 4.81 l 4.31 5.15 c -1.57 1.36 -2.85 3.03 -3.32 5.64 c 0.13 1.61 0.57 2.96 1.33 4.04 c 1.29 1.85 5.07 3.76 7.11 2.67 c 0.65 -0.35 1.02 -1.05 1.01 -2.24 c -0.06 -23.9 28.79 -21.18 26.62 2.82 H 89.52 C 80.2 5.49 119.96 5.4 112.9 28.7 C 115.38 31.38 121.23 27.34 125 18.75 c -1.03 -1.02 -2.16 -1.99 -3.42 -2.89 c 0.06 -0.05 -0.06 0.19 0.15 -0.17 c 0.21 -0.36 -0.51 -1.87 -1.99 -2.74 C 111.98 8.4 93.27 8.52 84.18 10.3 L 84.18 10.3 z"/></g></svg>`;

export const renderCar = (car:Car) => `
  <div class=carConteiner>
  <div class="general-buttons">
    <button class="button select-button" id="select-car-${car.id}">Select</button>
    <button class="button remove-button" id="remove-car-${car.id}">Remove</button>
    <span class="car-name">${car.name}</span>
  </div>
  <div class="road">
    <div class="launch-pad">
      <div class="control-panel">
        <button class="icon start-engine-button" id="start-engine-car-${car.id}" ${car.isEngineStarted ? 'disabled' : ''}>A</button>
        <button class="icon stop-engine-button" id="stop-engine-car-${car.id}" ${!car.isEngineStarted ? 'disabled' : ''}>B</button>
      </div>
      <div class="car" id="car-${car.id}">
        ${renderCarImage(car.color)}
      </div>
    </div>
    <div class="flag" >
      <img src="https://image.flaticon.com/icons/png/512/2164/2164598.png" id="flag-${car.id}">
    </div>
  </div>
  </div>
`;
export const createCar = async (body:object) => (await fetch(garageURL, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const getWinner = async (id:string) => (await fetch(`${winnersURL}/${id}`)).json();

export const getWinnerStatus = async (id:string) => (await fetch(`${winnersURL}/${id}`)).status;

export const deleteWinner = async (id:string) => (await fetch(`${winnersURL}/${id}`, { method: 'DELETE' })).json();

export const createWinner = async (body:Object) => (await fetch(winnersURL, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const updateWinner = async (id:string, body:Object) => (await fetch(`${winnersURL}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const saveWinner = async (id:string, time:string) => {
  const winnerStatus = await getWinnerStatus(id);
  if (winnerStatus === 404) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
};

export const renderWinnerCar = (car:WinnerCar) => {
  const carCon = `
  <div class=carConteiner>
  <div class="general-buttons">
    <button class="button select-button" id="select-car-${car.id}">Select</button>
    <button class="button remove-button" id="remove-car-${car.id}">Remove</button>
    <span class="car-name">${car.name = `${
    fetch('http://127.0.0.1:4000/garage').then((e) => e.json()).then((json) => {
      console.log(typeof json);
      console.log(json[car.id].name);
      console.log(JSON.stringify(json[car.id].name));
      return JSON.stringify(json[car.id].name);
    })}`}${console.log(car.name)}</span>
  </div>
  <div class="road">
    <div class="launch-pad">
      <div class="control-panel">
        <button class="icon start-engine-button" id="start-engine-car-${car.id}" }>A</button>
        <button class="icon stop-engine-button" id="stop-engine-car-${car.id}" >B</button>
      </div>
      <div class="car" id="car-${car.id}">
        ${renderCarImage(car.color)}
      </div>
    </div>
    <div class="flag" id="flag-${car.id}">
      <img src="https://image.flaticon.com/icons/png/512/2164/2164598.png">
    </div>
  </div>
  </div>
`;
  return carCon;
};
const models = ['Tesla', 'Mersedes', 'BMW', 'Toyta', 'Jeelly', 'Moskvich', 'Opel', 'Reno', 'Porshe'];
const names = ['Model X', 'CLK', '7', '911', 'Turbo', 'Not Bad', 'Astra', 'Corsa', 'AMG'];

const getRandomNames = () => {
  const model = models[Math.floor(Math.random() * models.length)];
  const name = names[Math.floor(Math.random() * names.length)];
  return `${model} ${name}`;
};

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const generateRandomCars = (count = 100) => new Array(count).fill(1).map((_) => ({ name: getRandomNames(), color: generateRandomColor() }));

export const startEngine = async (id:string) => (await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`)).json();

export const stopEngine = async (id:string) => (await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`)).json();

export const drive = async (id:string) => {
  const res = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};
