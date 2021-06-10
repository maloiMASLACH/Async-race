/*import store from '../store/store'

function getPositionCenter(e) {
  const {top, left, width, height} =e.getBoundingClientReact();
  return{
    x: left+width/2,
    y: top+height/2
  };
}

export function getDistanceBetweenELements(a:any,b:any){
  const positionA=getPositionCenter(a)
  const positionB=getPositionCenter(b);

  return Math.hypot(positionA.x-positionB.x,positionA.y-positionB.y);
}

export function animation(car:any, distance:any,animmationTime:any){
  let start:any = null;
  const state:any={}

  function step(timestamp:any){
    if (!start){
      start=timestamp;
    }
    const time = timestamp-start;
    const passed = Math.round(time * (distance/animmationTime))

    car.style.transform= `translateX(${Math.min(passed,distance)}px)`;

    if (passed < distance){
      state.id=window.requestAnimationFrame(step)
    }
  }
  state.id=window.requestAnimationFrame(step)

  return state
}

export const raceAll = async (promises:any, ids:any) =>{
  const {success, id, time} = await Promise.race(promises)

  if(!success){
    const failedIndex = ids.findIndex(i => i === id);
    const restPromises = [...promises.slice(0,failedIndex),...promises.slice(failedIndex+1,promises.length)];
    const restIds = [...ids.slice(0,failedIndex), ...ids.slice(failedIndex+1,ids.length)];
    return raceAll(restPromises,restIds)
  }
  return {...store.cars.find(car=>car.id === id),time: +(time/1000).toFixed(2)};
};

export const race = async (action:any) =>{
  const promises = store.cars.map((map:any)=> action(id));

  const winner= await raceAll(promises, store.cars.map(car => car.id));

  return winner;
};

const models=['Tesla','Mersedes','BMW','Toyta','Jeelly','Moskvich','Opel','Reno','Porshe'];
const names=['Model X','CLK','7','911','Turbo','Not Bad','Astra','Corsa','AMG'];

const getRandomNames =()=>{
  const model = models[Math.floor(Math.random()*models.length)];
  const name = names[Math.floor(Math.random()*names.length)];
  return `${model} ${name}`;
};

const generateRandomColor=()=>{
  const letters='0123456789ABCDEF'
  let color='#'
  for (let i=0;i<6;i++){
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

export const generateRandomCars =(count = 100)=> new Array(count).fill(1).map(_=> ({name:getRandomNames(),color:generateRandomColor()}))
*/
