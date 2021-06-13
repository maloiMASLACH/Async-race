const base = 'http://127.0.0.1:3000';

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
  const {
    top, left, width, height,
  } = e.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}
export function getDistanceBetweenELements(a:any, b:any) {
  const positionA = getPositionCenter(a);
  const positionB = getPositionCenter(b);
  return Math.hypot(positionA.x - positionB.x);
}

export function animation(car:any, distance:any, animmationTime:any) {
  let start:any = null;
  const state:any = {};

  function step(timestamp:any) {
    if (!start) {
      start = timestamp;
    }
    const time = timestamp - start;
    const passed = Math.round(time * (distance / animmationTime));

    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

    if (sessionStorage[`500-${car.id}`] !== 'false') {
      state.id = window.requestAnimationFrame(step);
    }
  }

  state.id = window.requestAnimationFrame(step);

  return false;
}

export function stopAnimation(car: any) {
  console.log(car);

  console.log(car);
}
