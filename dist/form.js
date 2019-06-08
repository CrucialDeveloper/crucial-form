'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _errors = require('./errors.js');

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;
        for (var field in data) {
            this[field] = data[field];
        }

        this.errors = new _errors2.default();
    }

    _createClass(Form, [{
        key: 'delete',
        value: function _delete(url) {
            var _this = this;

            var form = this;

            return new Promise(function (resolve, reject) {
                axios.delete(url, _this.data()).then(function (response) {
                    resolve(response.data);
                }).catch(function (error) {
                    form.errors.record(errors.response.data.errors);
                    reject(error.response.data);
                });
            });
        }
    }, {
        key: 'patch',
        value: function patch(url, data) {
            var _this2 = this;

            var form = this;

            return new Promise(function (resolve, reject) {
                axios.patch(url, _this2.data()).then(function (response) {
                    resolve(response.data);
                }).catch(function (error) {
                    form.errors.record(errors.response.data.errors);
                    reject(error.response.data);
                });
            });
        }
    }, {
        key: 'post',
        value: function post(url) {
            var _this3 = this;

            var form = this;

            return new Promise(function (resolve, reject) {
                axios.post(url, _this3.data()).then(function (response) {
                    resolve(response.data);
                }).catch(function (error) {
                    form.errors.record(errors.response.data.errors);
                    reject(error.response.data);
                });
            });
        }
    }, {
        key: 'data',
        value: function data() {
            var data = {};
            for (var property in this.originalData) {
                data[property] = this[property];
            }
            return data;
        }
    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = this.originalData[field];
            }
        }
    }]);

    return Form;
}();

exports.default = Form;