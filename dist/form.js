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
            var form = this;
            axios.delete(url).then(function (response) {
                window.location.reload();
            }).catch(function (errors) {
                form.errors.record(errors.response.data.errors);
            });
        }
    }, {
        key: 'patch',
        value: function patch(url, data) {
            var form = this;
            axios.patch(url, data).then(function () {
                window.location.reload();
            }).catch(function (errors) {
                form.errors.record(errors.response.data.errors);
            });
        }
    }, {
        key: 'post',
        value: function post(url) {
            var form = this;
            axios.post(url, this.data()).then(function (response) {
                window.location.reload();
            }).catch(function (errors) {
                form.errors.record(errors.response.data.errors);
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