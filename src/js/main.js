import { Utils } from './utils.js';
import { TabsManager } from './tabs.js';

function init() {

    document.querySelectorAll('.tabs').forEach(tabEl => {
        new TabsManager(tabEl);
    });

    // const form = document.getElementById('form');
    // const loader = document.getElementById('loader');
    // checkValidity();

    // function checkValidity() {
    //     const isValid = form.checkValidity();
    //     const btn = form.querySelector('button[type="submit"]');
    //     btn.disabled = !isValid;
    // }
    
    // form.addEventListener('input', checkValidity);

    // form.addEventListener('submit', event => {
    //     event.preventDefault();

    //     const formData = new FormData();

    //     Array
    //         .from(event.target.elements)
    //         .filter(el => el.name)
    //         .forEach(el => {
    //             const { name, type } = el;
    //             let value = type === 'checkbox' ? el.checked : el.value;
                
    //             if (type === 'file') {
    //                 value = el.files[0];
    //             }

    //             formData.append(name, value);
    //         });

    //     for (let item of formData.entries()) {
    //         console.log(item);
    //     }

    //     loader.style.display = 'block';

    //     sendRequest(() => {
    //         loader.style.display = 'none';
    //         form.reset();
    //     });
    // });

    // function sendRequest(callback) {
    //     setTimeout(callback, 2000);
    // }

    // const todoForm = document.getElementById('todo-form');
    // const todoList = document.getElementById('todo-list');
    // const emptyMessageEl = document.querySelector('.empty-list');

    // const todoListElems = todoList.querySelectorAll('li');

    // todoList.addEventListener('click', event => {
    //     if (event.target.classList.contains('todo-list__item')) {
    //         event.target.remove();
    //     }
    // });


    // todoForm.addEventListener('submit', event => {
    //     event.preventDefault();

    //     const { task } = todoForm.elements;
    //     const todoEl = createTodoElement(task.value);
    //     todoList.append(todoEl);

    //     checkEmptyMessage();
    //     todoForm.reset();
    // });

    // function checkEmptyMessage() {
    //     const isEmpty = todoList.children.length === 0;
    //     emptyMessageEl.classList.toggle('hide', !isEmpty);
    // }

    // function createTodoElement(taskName) {
    //     const el = document.createElement('li');
    //     el.innerHTML = `<span>${taskName}</span>`;
    //     el.classList.add('todo-item');

    //     const btn = document.createElement('button');
    //     btn.textContent = 'Завершить';

    //     btn.addEventListener('click', () => {
    //         el.remove();
    //         checkEmptyMessage();
    //     });

    //     el.append(btn);
    //     return el;
    // }

    // const handler = () => {};

    // elem.addEventListener('click', handler);
    // elem.removeEventListener('click', handler);

}

document.addEventListener('DOMContentLoaded', init);