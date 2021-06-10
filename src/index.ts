import './style.css';
import { App } from './app';
//import {render/*, listen, updateStateGarage*/} from  './components/ui/ui'

//render();
/*await updateStateGarage();
listen();*/

/*const jsonServer = require('json-server');
const server = jsonServer.create();*/
  new App().start()

 /* server.get('/garage',()=>{
    console.log(server)
  })*/
/*  const app= new App()
  app.start()
  document.querySelector('.garage-head')?.addEventListener('click',()=>{
    console.log('aa')
    new App().start();
  })

  document.querySelector('.winners-head')?.addEventListener('click',()=>{
    console.log('dd')
    new App().score();
  })
 window.document.querySelector('.garage-head')?.addEventListener('click',()=>{
  console.log('aa')
  new App().start();
})
  window.document.querySelector('.winners-head')?.addEventListener('click',()=>{
  console.log('dd')
  new App().score();
})*/
