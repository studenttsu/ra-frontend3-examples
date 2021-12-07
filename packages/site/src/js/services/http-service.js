export class HttpService {
    constructor(baseApiPath) {
        this.baseApi = baseApiPath;
    }

    async get(path) {
        const response = await fetch(`${this.baseApi}/${path}`);
        return response.json();
    }

    async post(path, data) {
        const response = await fetch(`${this.baseApi}/${path}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.json();
    }
}
