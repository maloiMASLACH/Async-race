/* import {getCars, getWinners} from '../api/api'

const {items:cars,count:carsCount} = await getCars('1');
const {items:winners,count:winnersCount} = await getWinners('1',10,'null','null');

export default{
  carsPage:1,
  cars,
  carsCount,
  winnesPage:1,
  winners,
  winnersCount,
  animation: {},
  view: 'garage',
  sortBy: null,
  sortOrder:null,
}; */

const base = 'http://127.0.0.1:4000';

const garage = `${base}/garage`;

export const getCars = async (page:string, limit = 7) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  localStorage.setItem('count', `${response.headers.get('X-Total-Count')}`);
  localStorage.setItem('maxPage', `${Math.ceil(localStorage.count / 7)}`);
  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id:string) => (await fetch(`${garage}/${id}`)).json();

export const carsPage = async () => ((await getCars('')).count);

export const deleteCar = async (id:string) => (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();

export const updateCar = async (id:string, body:Object) => (await fetch(`${garage}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

function getPositionCenter(e:any) {
  const { top, left, width, height } = e.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}
export function getDistanceBetweenELements(a:any, b:any) {
  const positionA = getPositionCenter(a);
  console.log(positionA);
  const positionB = getPositionCenter(b);
  console.log(positionB);
  return Math.hypot(positionA.x - positionB.x);
}

export function animation(car:any, distance:any,animmationTime:any) {
  let start:any = null;
  const state:any = {};

  function step(timestamp:any) {
    if (!start) {
      start = timestamp;
    }
    const time = timestamp - start;
    const passed = Math.round(time * (distance / animmationTime));
    console.log(start);

    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

    if (passed < distance) {
      state.id = window.requestAnimationFrame(step);
    }
  }
  state.id = window.requestAnimationFrame(step);

  return state;
}

