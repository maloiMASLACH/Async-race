const base = 'http://127.0.0.1:3000';

const garage = `${base}/garage`;
const winnersURL = 'http://127.0.0.1:3000/winners';

interface WinnerCar{
  id:number,
  name:string,
  color:string,
  wins:number,
  time:number
}

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

export const getWinners = async (page:string, limit = 10) => {
  const response = await fetch(`${winnersURL}?_page=${page}&_limit=${limit}`);
  const items = await response.json();
  localStorage.setItem('countW', `${response.headers.get('X-Total-Count')}`);
  localStorage.setItem('maxPageW', `${Math.ceil(localStorage.countW / 10)}`);

  return {
    items: await Promise.all<WinnerCar>(items.map(async (winner:WinnerCar) =>
      ({ ...winner,
        name: await getCar(`${winner.id}`).then((e) => e.name),
        color: await getCar(`${winner.id}`).then((e) => e.color) }))),
    count: response.headers.get('X-Total-Count'),
  };
};
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

function getPositionCenter(e:HTMLElement) {
  const {
    top, left, width, height,
  } = e.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}
export function getDistanceBetweenELements(a:HTMLElement, b:HTMLElement) {
  const positionA = getPositionCenter(a);
  const positionB = getPositionCenter(b);
  return Math.hypot(positionA.x - positionB.x);
}

export function animation(car:HTMLElement, distance:number, animmationTime:string) {
  let start:number;
  const state = {
    id:0
  };

  function step(timestamp:number) {
    if (!start) {
      start = timestamp;
      console.log(typeof (start))
    }
    const time = timestamp - start;
    const passed = Math.round(time * (distance / +animmationTime));

    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

    if (sessionStorage[`500-${car.id}`] !== 'false') {
      state.id = window.requestAnimationFrame(step);
    }
  }

  state.id = window.requestAnimationFrame(step);
console.log(state)
  return false;
}

export function stopAnimation(car: HTMLElement) {
  console.log(car);

  console.log(car);
}

