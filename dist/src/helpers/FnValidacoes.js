"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FnValidacoes {
    static isTruthy(value) {
        return (value !== 0 &&
            value !== false &&
            value !== null &&
            value !== undefined &&
            value !== '');
    }
    static isTruthyNumber(value) {
        return (value !== false &&
            value !== null &&
            value !== undefined &&
            value !== '');
    }
    static maxLength(value, size) {
        return value.length <= size;
    }
    static minLength(value, size) {
        return value.trim().length >= size;
    }
    static fixLength(value, size) {
        return value.trim().length === size;
    }
    static timeSpan(value) {
        if (!/^[0-2][0-9]:[0-5][0-9]$/.test(value))
            return false;
        const hora = parseInt(value.split(':')[0]);
        const minuto = parseInt(value.split(':')[1]);
        if (hora > 23 || minuto > 59)
            return false;
        return true;
    }
    static isUrl(value) {
        if (!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(value)) {
            return false;
        }
        return true;
    }
}
exports.default = FnValidacoes;
