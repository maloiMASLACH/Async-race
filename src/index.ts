import './style.css';
import { App } from './app';

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('error');
  new App(document.body);
};
