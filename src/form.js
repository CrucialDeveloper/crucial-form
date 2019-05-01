import Errors from './errors.js'
export default class Form {
    constructor(data) {
        this.originalData = data
        for (let field in data) {
            this[field] = data[field]
        }

        this.errors = new Errors()
    }

    destroy(url) {
        let form = this
        axios.delete(url)
        .then(function(response) {
            window.location.reload()
        })
        .catch(function(errors) {
            form.errors.record(errors.response.data.errors)
        })
    }

    post(url) {
        let form = this
        axios.post(url, this.data())
        .then(function(response) {
            window.location.reload()
        })
        .catch(function(errors) {
            form.errors.record(errors.response.data.errors)
        })
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