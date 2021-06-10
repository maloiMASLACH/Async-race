/*const base = 'http://127.0.0.1:4000'

const garage =`${base}/garage`;
const engine =`${base}/engine`;
const winners =`${base}/winners`;

export const getCars = async (page:string, limit=7)=>{
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

  return{
    items: await response.json(),
    count: response.headers.get('X-Total-Count')
  };
}

export const getCar = async (id:string) => (await fetch(`${garage}/${id}`)).json();

export const createCar = async (body:Object) => (await fetch(garage,{
  method: 'POST',
  body: JSON.stringify(body),
  headers:{
    'Content-Type':'application/json'
  }
})).json();

export const deleteCar = async (id:string) => (await fetch(`${garage}/${id}`,{method: 'DELETE'})).json();

export const updateCar = async (id:string,body:Object) => (await fetch(`${garage}/${id}`,{
  method: 'PUT',
  body: JSON.stringify(body),
  headers:{
    'Content-Type':'application/json'
  }
})).json();

export const startEngine = async (id:string) => (await fetch(`${engine}?id=${id}&status=started`)).json();

export const stopEngine = async (id:string) => (await fetch(`${engine}?id=${id}&status=stopped`)).json();

export const drive = async (id:string) => {
  const res =await fetch(`${engine}?id=${id}&status=drive`).catch();
  return res.status !== 200 ? {success: false} : {...(await res.json())};
};

const getSortOrder = (sort:string, order:string) => {
  if (sort && order) return `&_sort=${sort}&_order=${order}`
  return '';
}

export const getWinners = async ( page:string, limit=10,sort:string,order:string)=>{
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort,order)}`);
  const items =await response.json();

  return{
    items: await Promise.all(items.map(async (winner) =>({...winner,car:await getCar(winner.id)}))),
    count: response.headers.get('X-Total-Count')
  };
}

export const getWinner = async (id:string) => (await fetch(`${winners}/${id}`)).json();

export const getWinnerStatus = async (id:string) => (await fetch(`${winners}/${id}`)).status;

export const deleteWinner = async (id:string) => (await fetch(`${winners}/${id}`,{method: 'DELETE'})).json();

export const createWinner = async (body:Object) => (await fetch(winners,{
  method: 'POST',
  body: JSON.stringify(body),
  headers:{
    'Content-Type':'application/json'
  }
})).json();

export const updateWinner = async(id:string,body:Object) => (await fetch(`${winners}/${id}`,{
  method: 'PUT',
  body: JSON.stringify(body),
  headers:{
    'Content-Type':'application/json'
  }
})).json();

export const saveWinner = async (id:string,time:string)=>{
  const winnerStatus = await getWinnerStatus(id);

  if (winnerStatus === 404){
    await createWinner({
      id,
      wins:1,
      time,
    });
  } else{
    const winner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: winners.wins +1,
      time: time < winners.time ? time : winner.time
    })
  }
}*/
