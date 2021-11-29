import $ from 'jquery';
import apiService from './services/api-service.ts';
import { TabsManager } from './tabs.js';

async function init() {

    const services = await apiService.getServices();
    console.log(services);

    // new OrderForm();

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