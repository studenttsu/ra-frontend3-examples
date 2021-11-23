export class User {
    /**
     * Инициализация пользователя
     * @param {*} user - объект пользователя
     * @param {string} user.name - имя пользователя
     */
    constructor({ 
        name = '', 
        surName = '', 
        patronomyc = '', 
        age = null, 
        gender = null 
    }) {
        this.name = name;
        this.surName = surName;
        this.patronomyc = patronomyc;
        this.age = age;
        this.gender = gender;
    }

    getFullName() {
        return `${this.surName} ${this.name} ${this.patronomyc}`;
    }
}