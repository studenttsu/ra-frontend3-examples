import $ from 'jquery';
import { OrderForm } from './forms/order-form.js';
import { TabsManager } from './tabs.js';

function init() {

    new OrderForm();

    $('.slider').slick({
        prevArrow: '.btn-prev',
        nextArrow: '.btn-next',
        slidesToShow: 4,
        infinite: false
    });

    document.querySelectorAll('.tabs').forEach(tabEl => {
        new TabsManager(tabEl);
    });

}

$(document).ready(init);