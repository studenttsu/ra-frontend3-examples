import $ from 'jquery';
import { ApiService } from './services/index.js';
import { TabsManager } from './tabs.js';

async function init() {
    const masters = await ApiService.getMasters();

    $('.slider').slick({
        prevArrow: '.btn-prev',
        nextArrow: '.btn-next',
        slidesToShow: 4,
        infinite: false,
    });

    document.querySelectorAll('.tabs').forEach((tabEl) => {
        new TabsManager(tabEl);
    });
}

$(document).ready(init);
