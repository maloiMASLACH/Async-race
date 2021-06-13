(()=>{"use strict";var e={515:(e,t,n)=>{n.r(t)},178:(e,t,n)=>{n.r(t)},115:(e,t,n)=>{n.r(t)},307:(e,t,n)=>{n.r(t)},752:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const o=n(977),i=n(785),r=n(287);class a{constructor(){this.enableChange=()=>{window.addEventListener("hashchange",(()=>{const e=window.location.hash.slice(1);a.renderPage(e)}))},this.start=()=>{a.contaiter.append(this.header.render()),a.renderPage("garage"),this.enableChange(),void 0===localStorage.page&&localStorage.setItem("page","1")},this.score=()=>{},this.header=new o.Header("header","head-menu")}static renderPage(e){const t=document.querySelector(`#${a.defaultPage}`);t&&t.remove();let n=null;if("garage"===e?n=new i.Garage(e):"winners"===e&&(n=new r.Winners(e)),n){const e=n.render();e.id=a.defaultPage,a.contaiter.append(e)}}}t.App=a,a.contaiter=document.body,a.defaultPage="current"},881:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{d(o.next(e))}catch(e){r(e)}}function s(e){try{d(o.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}d((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.drive=t.stopEngine=t.startEngine=t.generateRandomCars=t.renderWinnerCar=t.saveWinner=t.updateWinner=t.createWinner=t.deleteWinner=t.getWinnerStatus=t.getWinner=t.createCar=t.renderCar=void 0,n(515);const i="http://127.0.0.1:3000/winners",r=e=>`\n<?xml version="1.0" encoding="utf-8"?><svg width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 35.03" style="enable-background:new 0 0 122.88 35.03 ;fill:${e}" xml:space="preserve"><style type="text/css" >.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0"\nd="M 25.58 13.57 c -5.93 0 -10.73 4.8 -10.73 10.73 c 0 5.93 4.8 10.73 10.73 10.73 s 10.73 -4.8 10.73 -10.73 C 36.31 18.37 31.51 13.57 25.58 13.57 L 25.58 13.57 z M 45.95 5 c 0.59 1.27 1.06 2.69 1.42 4.23 c 0.82 2.57 -0.39 3.11 -3.19 2.06 c -2.06 -1.23 -4.12 -2.47 -6.18 -3.7 c -1.05 -0.74 -1.55 -1.47 -1.38 -2.19 c 0.34 -1.42 3.08 -2.16 5.33 -2.6 C 44.81 2.23 44.61 2.11 45.95 5 L 45.95 5 z M 101.14 19.31 c -2.75 0 -4.99 2.23 -4.99 4.99 c 0 2.75 2.23 4.99 4.99 4.99 c 2.75 0 4.99 -2.23 4.99 -4.99 C 106.13 21.54 103.9 19.31 101.14 19.31 L 101.14 19.31 z M 25.58 19.31 c -2.75 0 -4.99 2.23 -4.99 4.99 c 0 2.75 2.23 4.99 4.99 4.99 c 2.75 0 4.99 -2.23 4.99 -4.99 C 30.57 21.54 28.34 19.31 25.58 19.31 L 25.58 19.31 z M 78.86 12.5 c -2.77 -2.97 -5.97 -4.9 -9.67 -6.76 c -8.1 -4.08 -13.06 -3.58 -21.66 -3.58 l 2.89 7.5 c 1.21 1.6 2.58 2.73 4.66 2.84 H 78.86 L 78.86 12.5 z M 101.14 13.57 c -5.93 0 -10.73 4.8 -10.73 10.73 c 0 5.93 4.8 10.73 10.73 10.73 s 10.73 -4.8 10.73 -10.73 C 111.87 18.37 107.07 13.57 101.14 13.57 L 101.14 13.57 z M 84.18 10.3 c -3.52 -2.19 -7.35 -4.15 -11.59 -5.82 c -12.91 -5.09 -22.78 -6 -36.32 -1.9 c -4.08 1.55 -8.16 3.1 -12.24 4.06 c -4.03 0.96 -21.48 1.88 -21.91 4.81 l 4.31 5.15 c -1.57 1.36 -2.85 3.03 -3.32 5.64 c 0.13 1.61 0.57 2.96 1.33 4.04 c 1.29 1.85 5.07 3.76 7.11 2.67 c 0.65 -0.35 1.02 -1.05 1.01 -2.24 c -0.06 -23.9 28.79 -21.18 26.62 2.82 H 89.52 C 80.2 5.49 119.96 5.4 112.9 28.7 C 115.38 31.38 121.23 27.34 125 18.75 c -1.03 -1.02 -2.16 -1.99 -3.42 -2.89 c 0.06 -0.05 -0.06 0.19 0.15 -0.17 c 0.21 -0.36 -0.51 -1.87 -1.99 -2.74 C 111.98 8.4 93.27 8.52 84.18 10.3 L 84.18 10.3 z"/></g></svg>`;t.renderCar=e=>`\n  <div class=carConteiner>\n  <div class="general-buttons">\n    <button class="button select-button" id="select-car-${e.id}">Select</button>\n    <button class="button remove-button" id="remove-car-${e.id}">Remove</button>\n    <span class="car-name">${e.name}</span>\n  </div>\n  <div class="road">\n    <div class="launch-pad">\n      <div class="control-panel">\n        <button class="icon start-engine-button" id="start-engine-car-${e.id}" ${e.isEngineStarted?"disabled":""}>A</button>\n        <button class="icon stop-engine-button" id="stop-engine-car-${e.id}" ${e.isEngineStarted?"":"disabled"}>B</button>\n      </div>\n      <div class="car" id="car-${e.id}">\n        ${r(e.color)}\n      </div>\n    </div>\n    <div class="flag" >\n      <img src="https://image.flaticon.com/icons/png/512/2164/2164598.png" id="flag-${e.id}">\n    </div>\n  </div>\n  </div>\n`,t.createCar=e=>o(void 0,void 0,void 0,(function*(){return(yield fetch("http://127.0.0.1:3000/garage",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json()})),t.getWinner=e=>o(void 0,void 0,void 0,(function*(){return(yield fetch(`${i}/${e}`)).json()})),t.getWinnerStatus=e=>o(void 0,void 0,void 0,(function*(){return(yield fetch(`${i}/${e}`)).status})),t.deleteWinner=e=>o(void 0,void 0,void 0,(function*(){return(yield fetch(`${i}/${e}`,{method:"DELETE"})).json()})),t.createWinner=e=>o(void 0,void 0,void 0,(function*(){return(yield fetch(i,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json()})),t.updateWinner=(e,t)=>o(void 0,void 0,void 0,(function*(){return(yield fetch(`${i}/${e}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json()})),t.saveWinner=(e,n)=>o(void 0,void 0,void 0,(function*(){if(404===(yield t.getWinnerStatus(e)))yield t.createWinner({id:e,wins:1,time:n});else{const o=yield t.getWinner(e);yield t.updateWinner(e,{id:e,wins:o.wins+1,time:n<o.time?n:o.time})}})),t.renderWinnerCar=e=>`\n  <div class=carConteiner>\n  <div class="general-buttons">\n    <button class="button select-button" id="select-car-${e.id}">Select</button>\n    <button class="button remove-button" id="remove-car-${e.id}">Remove</button>\n    <span class="car-name">${e.name=`${fetch("http://127.0.0.1:4000/garage").then((e=>e.json())).then((t=>(console.log(typeof t),console.log(t[e.id].name),console.log(JSON.stringify(t[e.id].name)),JSON.stringify(t[e.id].name))))}`}${console.log(e.name)}</span>\n  </div>\n  <div class="road">\n    <div class="launch-pad">\n      <div class="control-panel">\n        <button class="icon start-engine-button" id="start-engine-car-${e.id}" }>A</button>\n        <button class="icon stop-engine-button" id="stop-engine-car-${e.id}" >B</button>\n      </div>\n      <div class="car" id="car-${e.id}">\n        ${r(e.color)}\n      </div>\n    </div>\n    <div class="flag" id="flag-${e.id}">\n      <img src="https://image.flaticon.com/icons/png/512/2164/2164598.png">\n    </div>\n  </div>\n  </div>\n`;const a=["Tesla","Mersedes","BMW","Toyta","Jeelly","Moskvich","Opel","Reno","Porshe"],s=["Model X","CLK","7","911","Turbo","Not Bad","Astra","Corsa","AMG"],d=()=>{let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e};t.generateRandomCars=(e=100)=>new Array(e).fill(1).map((e=>({name:`${a[Math.floor(Math.random()*a.length)]} ${s[Math.floor(Math.random()*s.length)]}`,color:d()}))),t.startEngine=e=>o(void 0,void 0,void 0,(function*(){return(yield fetch(`http://127.0.0.1:3000/engine?id=${e}&status=started`)).json()})),t.stopEngine=e=>o(void 0,void 0,void 0,(function*(){return(yield fetch(`http://127.0.0.1:3000/engine?id=${e}&status=stopped`)).json()})),t.drive=e=>o(void 0,void 0,void 0,(function*(){const t=yield fetch(`http://127.0.0.1:3000/engine?id=${e}&status=drive`).catch();return 200!==t.status?{success:!1}:Object.assign({},yield t.json())}))},785:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Garage=void 0;const o=n(881),i=n(163),r=n(560);n(178);let a=[];class s extends i.Page{constructor(){super(...arguments),this.initRace=()=>{document.querySelectorAll(".start-engine-button").forEach((e=>{e.addEventListener("click",(()=>{const t=e.id.split("-").slice(-1).join("");o.startEngine(t).then((e=>{r.getCar(t).then((e=>{e.isEngineStarted=!0})).then((()=>{r.getCar(t).then((n=>{const i=r.getDistanceBetweenELements(document.getElementById(`car-${t}`),document.getElementById(`flag-${t}`));r.animation(document.getElementById(`car-${t}`),i,""+5e5/e.velocity),o.drive(t).then((e=>{console.log(e)}))}))}))}))}))}))},this.startRaceAll=()=>{var e;null===(e=document.querySelector(".race"))||void 0===e||e.addEventListener("click",(()=>{const e=[];r.getCars(`${localStorage.page}`).then((t=>{e.push(...t.items);const n=r.getDistanceBetweenELements(document.querySelector(".car"),document.querySelector(".flag img"));e.forEach((e=>{const t=(new Date).getTime();o.startEngine(`${e.id}`).then((i=>{r.getCar(`${e.id}`).then((()=>{e.isEngineStarted=!0})).then((()=>{e.speed=i.velocity})).then((()=>{o.drive(`${e.id}`).then((n=>{if(!1===n.success)return r.stopAnimation(document.getElementById(`car-${e.id}`)),void sessionStorage.setItem(`500-${e.id}`,`${n.success}`);sessionStorage.winner||(sessionStorage.setItem("winner",`${e.name}`),alert(sessionStorage.winner),o.saveWinner(`${e.id}`,`${Math.round(((new Date).getTime()-t)/1e3)}`))})),r.animation(document.getElementById(`car-${e.id}`),n,""+5e5/e.speed)}))}))})),sessionStorage.clear()}))}))}}crateGarage(e){r.getCars(e).then((e=>(a=[],console.log(e.items),a.push(...e.items)))).then((()=>{this.conteiner.innerHTML+='<div class="allCars"></div>';const e=document.querySelector(".allCars");e&&(e.innerHTML=""),a.map((t=>(e&&(e.innerHTML+=o.renderCar(t)),t))),this.addCar(),this.generate100(),this.changePage(),this.removeCar(),this.recreateCar(),this.initRace(),this.startRaceAll(),this.reset()}))}addForm(){r.getCars("").then((()=>{this.conteiner.innerHTML=`\n      <h3>Garage (${localStorage.count})</h3>\n      <h4>Page ${localStorage.page}</h4>\n      <div class="navigate-btns">\n      <div id="previous">Prev</div>\n      <div id="next">Next</div>\n      </div>\n    <form class="add-form" id="form1">\n       <input type="text"id="nameAddID">\n       <input type="color"id="colorAddID">\n       <button type="submit">Create</button>\n     </form>\n     <form class="update-form" id="form2">\n       <input type="text"id="nameUpdateID">\n       <input type="color"id="colorUpdateID">\n       <button>Update</button>\n       </form>\n       <div class="common-btns">\n          <button class="race">Race</button>\n          <button class="reset">Reset</button>\n          <button class="generate">Generate</button>\n       </div>\n    `})).then((()=>{const{page:e}=localStorage;this.crateGarage(e)}))}addCar(){const e=document.querySelector(".add-form");null==e||e.addEventListener("submit",(t=>{t.preventDefault();const n=document.getElementById("nameAddID").value,i=document.getElementById("colorAddID").value;if(""!==n){const t={name:n,color:i};o.createCar(t).then((()=>{this.addForm(),e.reset()}))}}))}removeCar(){document.querySelectorAll(".remove-button").forEach((e=>{e.addEventListener("click",(()=>{o.deleteWinner(e.id.split("-").slice(-1).join()),r.deleteCar(e.id.split("-").slice(-1).join()).then((()=>{this.addForm()}))}))}))}recreateCar(){document.querySelectorAll(".select-button").forEach((e=>{e.addEventListener("click",(()=>{var t;document.getElementById("nameUpdateID").placeholder="Enter new",null===(t=document.querySelector(".update-form button"))||void 0===t||t.addEventListener("click",(t=>{t.preventDefault();const n={name:document.getElementById("nameUpdateID").value,color:document.getElementById("colorUpdateID").value};r.updateCar(e.id.split("-").slice(-1).join(),n).then((()=>{this.addForm()}))}))}))}))}generate100(){var e;null===(e=document.querySelector(".generate"))||void 0===e||e.addEventListener("click",(()=>{o.generateRandomCars().forEach((e=>{const t={name:e.name,color:e.color};o.createCar(t)})),this.addForm()}))}changePage(){var e,t;null===(e=document.getElementById("next"))||void 0===e||e.addEventListener("click",(()=>{+localStorage.page<+localStorage.maxPage&&(localStorage.setItem("page",""+(+localStorage.page+1)),this.addForm())})),null===(t=document.getElementById("previous"))||void 0===t||t.addEventListener("click",(()=>{1!=+localStorage.page&&(localStorage.setItem("page",""+(+localStorage.page-1)),this.addForm())}))}reset(){var e;null===(e=document.querySelector("button.reset"))||void 0===e||e.addEventListener("click",(()=>{this.addForm()}))}render(){const e=this.createHeader("");return this.conteiner.append(e),this.addForm(),this.conteiner}}t.Garage=s},977:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;const o=n(164);n(115);const i=[{id:"garage",text:"Garage "},{id:"winners",text:"Winners"}];class r extends o.Component{renderHeader(){const e=document.createElement("div");return i.forEach((t=>{const n=document.createElement("a");n.href=`#${t.id}`,n.innerText=t.text,e.append(n)})),this.conteiner.append(e),this.conteiner}render(){return this.renderHeader(),this.conteiner}}t.Header=r},560:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{d(o.next(e))}catch(e){r(e)}}function s(e){try{d(o.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}d((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.stopAnimation=t.animation=t.getDistanceBetweenELements=t.updateCar=t.deleteCar=t.carsPage=t.getCar=t.getCars=void 0;const o="http://127.0.0.1:3000/garage";function i(e){const{top:t,left:n,width:o,height:i}=e.getBoundingClientRect();return{x:n+o/2,y:t+i/2}}t.getCars=(e,t=7)=>n(void 0,void 0,void 0,(function*(){const n=yield fetch(`${o}?_page=${e}&_limit=${t}`);return localStorage.setItem("count",`${n.headers.get("X-Total-Count")}`),localStorage.setItem("maxPage",`${Math.ceil(localStorage.count/7)}`),{items:yield n.json(),count:n.headers.get("X-Total-Count")}})),t.getCar=e=>n(void 0,void 0,void 0,(function*(){return(yield fetch(`${o}/${e}`)).json()})),t.carsPage=()=>n(void 0,void 0,void 0,(function*(){return(yield t.getCars("")).count})),t.deleteCar=e=>n(void 0,void 0,void 0,(function*(){return(yield fetch(`${o}/${e}`,{method:"DELETE"})).json()})),t.updateCar=(e,t)=>n(void 0,void 0,void 0,(function*(){return(yield fetch(`${o}/${e}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json()})),t.getDistanceBetweenELements=function(e,t){const n=i(e),o=i(t);return Math.hypot(n.x-o.x)},t.animation=function(e,t,n){let o=null;const i={};return i.id=window.requestAnimationFrame((function r(a){o||(o=a);const s=a-o,d=Math.round(s*(t/n));e.style.transform=`translateX(${Math.min(d,t)}px)`,"false"!==sessionStorage[`500-${e.id}`]&&(i.id=window.requestAnimationFrame(r))})),!1},t.stopAnimation=function(e){console.log(e),console.log(e)}},164:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0,t.Component=class{constructor(e,t){this.conteiner=document.createElement(e),this.conteiner.className=t}render(){return this.conteiner}}},163:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Page=void 0;class n{constructor(e){this.createHeader=e=>{const t=document.createElement("h1");return t.innerText=e,t},this.conteiner=document.createElement("div"),this.conteiner.id=e}render(){return this.conteiner}}t.Page=n,n.TextObg={}},287:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Winners=void 0;const o=n(881),i=n(163);let r=[];class a extends i.Page{showWinners(){fetch("http://127.0.0.1:3000/winners").then((e=>e.json())).then((e=>(r=[],r.push(...e)))).then((()=>{r.map((e=>(this.conteiner.innerHTML+=o.renderWinnerCar(e),e)))}))}render(){const e=this.createHeader(a.TextObg.MainTitle);return this.conteiner.append(e),this.showWinners(),this.conteiner}}t.Winners=a,a.TextObg={MainTitle:"Winners"}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(307),(new(n(752).App)).start()})();