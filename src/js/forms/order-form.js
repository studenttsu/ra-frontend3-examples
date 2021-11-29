import ApiService from '../services';

export class OrderForm {
    constructor() {
        this.pending = false;
        this.formEl = document.getElementById('order-form');
        this.mastersSelect = this.formEl.elements.masterId;
        this.servicesSelect = this.formEl.elements.serviceId;

        this._init();
        this._bindEvents();
    }

    _init() {
        this._buildMastersSelect();
        this._buildServicesSelect();
    }

    async _buildMastersSelect() {
        const masters = await ApiService.getMasters();

        masters.forEach(master => {
            const option = document.createElement('option');
            option.value = master.id;
            option.textContent = `${master.surName} ${master.firstName}`;
            this.mastersSelect.add(option);
        });
    }

    async _buildServicesSelect() {
        const services = await ApiService.getSaloonServices();

        services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.id;
            option.textContent = `${service.name}`;
            this.servicesSelect.add(option);
        });
    }

    _bindEvents() {
        this.formEl.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleForm();
        });
    }

    async _handleForm() {
        const { name, phone, masterId, serviceId, visitDate } = this.formEl.elements;

        const orderData = {
            name: name.value,
            phone: phone.value,
            masterId: masterId.value,
            serviceId: serviceId.value,
            visitDate: visitDate.value,
        };

        this._togglePendingState();

        setTimeout(async () => {
            try {
                await ApiService.createOrder(orderData);
                this.formEl.reset();
            } catch (error) {
                console.error(error);
            } finally {
                this._togglePendingState();
            }
        }, 3000);
    }

    _togglePendingState() {
        this.pending = !this.pending;
        this.formEl.classList.toggle('order-form_pending', this.pending);
    }
}