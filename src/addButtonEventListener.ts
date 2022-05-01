import addClick from './addClick';
import { document } from './globals/document';

export default function addButtonEventListener(): void {
  const add = document.querySelector('#add');
  add.addEventListener('click', addClick);
}
