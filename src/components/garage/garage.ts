import { renderCar,createCar,generateRandomCars} from '../car/car';
import {Page} from '../templates/page'
import {getCars,carsPage,deleteCar} from '../store/store'
import './garage.css'
const garageURL ='http://127.0.0.1:4000/garage'
interface Car{
  id:number,
  name:string,
  color:string,
  isEngineStarted:boolean
}
let cars:Car[]=[];

export class Garage extends Page {

  static TextObg={
    MainTitle:'Garage'
  };

   constructor(id:string){
     super(id)
   }

   crateGarage(page:string){
    getCars(page).then((json)=>{
      cars=[]
      console.log(json.items)
      return cars.push(...json.items)
    }).then(()=>{
     this.conteiner.innerHTML +=`<div class="allCars"></div>`
     const carCon=document.querySelector('.allCars')
     if (carCon){
       carCon.innerHTML=''
     }
     cars.map((car)=>{
       if(carCon){
         carCon.innerHTML += renderCar(car)
       }
      })
      this.addCar()
      this.generate100()
      this.changePage()
      this.removeCar()
    })

  }

   addForm():void{
      fetch('').then(()=>{
      this.conteiner.innerHTML=`
      <h3>Garage (${localStorage['count']})</h3>
      <h4>Page ${localStorage['page']}</h4>
      <div class="navigate-btns">
      <div id="previous">Prev</div>
      <div id="next">Next</div>
      </div>
    <form class="add-form" id="form1">
       <input type="text"id="nameAddID">
       <input type="color"id="colorAddID">
       <button type"button">Create</button>
     </form>
     <form class="update-form" id="form2">
       <input type="text">
       <input type="color">
       <button type"button">Update</button>
       </form>
       <div class="common-btns">
          <button class="race">Race</button>
          <button class="reset">Reset</button>
          <button class="generate">Generate</button>
       </div>
    `
    }).then(()=>{
      let page=localStorage['page']
      this.crateGarage(page)
    })
   }


   addCar(){
    const formToCreateCar=<HTMLFormElement>document.querySelector('.add-form')
    formToCreateCar?.addEventListener('submit',(e)=>{
     e.preventDefault();
     const nameInput=(<HTMLInputElement>document.getElementById('nameAddID')).value
     const colorInput=(<HTMLInputElement>document.getElementById('colorAddID')).value
     if(nameInput!==''){
       let body:object={
         name:nameInput,
         color:colorInput
       }
       createCar(body).then(()=>{
         this.addForm();
         formToCreateCar.reset();
       })
     }

    })
    }

    removeCar(){
      document.querySelectorAll('.remove-button').forEach((removeBTN)=>{
        removeBTN.addEventListener('click',()=>{
          deleteCar(removeBTN.id.split('-').slice(length-1).join())
          .then(()=>{
            this.addForm();
          })
        })
      })
    }

    generate100(){
      document.querySelector(".generate")?.addEventListener("click",()=>{
        console.log('qq')
       generateRandomCars().forEach((car)=>{
         let body:object={
           name:car.name,
           color:car.color
         }
         createCar(body)
       })
       this.addForm();
      })

    }

    changePage(){

      document.getElementById('next')?.addEventListener('click',()=>{
        if(+localStorage['page'] < +localStorage['maxPage']){
          localStorage.setItem('page',`${+localStorage['page']+1}`)
          this.addForm()
        }
      })

      document.getElementById('previous')?.addEventListener('click',()=>{
        if(+localStorage['page']!==1){
          localStorage.setItem('page',`${+localStorage['page']-1}`)
          this.addForm()
        }
      })
    }

   render(){
     const title=this.createHeader(/*Garage.TextObg.MainTitle*/'')
     this.conteiner.append(title)
     this.addForm()
   //  this.crateGarage();
     return this.conteiner
   }



}
