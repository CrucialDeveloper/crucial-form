import Errors from './errors.js'
export default class Form {
    constructor(data) {
        this.originalData = data
        for (let field in data) {
            this[field] = data[field]
        }

        this.errors = new Errors()
    }

    delete(url) {
         let form = this

        return new Promise((resolve, reject) => {
            axios.delete(url, this.data())
                .then(function(response){
                    resolve(response.data);
                })
                .catch(function(error){
                    form.errors.record(errors.response.data.errors)
                    reject(error.response.data);
                });
        });
    }

    patch(url, data) {
         let form = this

        return new Promise((resolve, reject) => {
            axios.patch(url, this.data())
                .then(function(response){
                    resolve(response.data);
                })
                .catch(function(error){
                    form.errors.record(errors.response.data.errors)
                    reject(error.response.data);
                });
        });
    }

    post(url) {
        let form = this

        return new Promise((resolve, reject) => {
            axios.post(url, this.data())
                .then(function(response){
                    resolve(response.data);
                })
                .catch(function(error){
                    form.errors.record(errors.response.data.errors)
                    reject(error.response.data);
                });
        });
    }

    data() {
        let data = {}
        for (let property in this.originalData) {
            data[property] = this[property]
        }
        return data
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = this.originalData[field]
        }
    }

}