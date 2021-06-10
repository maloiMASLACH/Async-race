import { CrateCar } from "./components/create-car/crate-car"
import { Header } from "./components/header/header"
import { Garage } from "./components/garage/garage"
import { Winners } from "./components/winners/winners"
import { Page } from "./components/templates/page";

export const enum PageID{
  Garage='garage',
  Winners='winners'
}

export class App {
  static contaiter: HTMLElement =document.body
  private static defaultPage:string ='current'

  private header:Header;


  static renderPage(idPage:string){
    const currentPage=document.querySelector(`#${App.defaultPage}`)
    if (currentPage){
      currentPage.remove();
    }
     let page: Page | null =null;

     if(idPage === PageID.Garage){
       page=new Garage(idPage);
     } else if(idPage === PageID.Winners){
       page=new Winners(idPage)
     }

     if(page){
       const pageHTML =page.render();
       pageHTML.id=App.defaultPage;
       App.contaiter.append(pageHTML);
     }

  }
  private enableChange() {
    window.addEventListener('hashchange',()=>{
      const hash= window.location.hash.slice(1);
      App.renderPage(hash)
    })
  }

  constructor() {
    this.header= new Header('header','head-menu')
  }

  start=()=>{
    App.contaiter.append(this.header.render())
    App.renderPage('garage')
    this.enableChange();
    if(localStorage['page'] === undefined)
    localStorage.setItem('page','1')
  }


  score=()=>{

  }
}
