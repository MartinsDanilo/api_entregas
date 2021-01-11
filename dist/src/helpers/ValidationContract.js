"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FnValidacoes_1 = __importDefault(require("./FnValidacoes"));
class ValidationContract {
    constructor() {
        this.errors = [];
    }
    setValidations(builders) {
        builders.forEach(builder => {
            if (builder.validation.errors.length > 0) {
                this.addErrors(builder.validation.errors);
            }
        });
    }
    isValid() {
        return this.errors.length === 0;
    }
    addError(message) {
        this.errors.push(message);
        return null;
    }
    addErrors(errors, prefix = '') {
        errors.forEach((message) => {
            this.addError(`${prefix ? `${prefix}.` : ''}${message}`);
        });
        return null;
    }
    clear() {
        this.errors = [];
        return this;
    }
    isUrl(url, msg = 'URL inválido.') {
        if (!FnValidacoes_1.default.isUrl(url))
            this.addError(msg);
        return this;
    }
    isTimeSpan(timeSpan, msg) {
        if (!FnValidacoes_1.default.timeSpan(timeSpan)) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            }
            else {
                this.addError(`${msg} TimeSpan inválido.`);
            }
        }
        return this;
    }
    validaTimeSpanIntevalo(inicio, fim, msg) {
        try {
            const inicioHora = parseInt(inicio.split(':')[0]);
            const fimHora = parseInt(fim.split(':')[0]);
            if (fimHora > inicioHora)
                return this;
            if (inicioHora === fimHora) {
                const inicioMinuto = parseInt(inicio.split(':')[1]);
                const fimMinuto = parseInt(fim.split(':')[1]);
                if (inicioMinuto > fimMinuto) {
                    if (msg.split(' ').length > 1) {
                        this.addError(msg);
                    }
                    else {
                        this.addError(`${msg} possui um intervalo de horas inválido.`);
                    }
                }
            }
            else if (fimHora < inicioHora && fimHora > 5) {
                if (msg.split(' ').length > 1) {
                    this.addError(msg);
                }
                else {
                    this.addError(`${msg} possui um intervalo de horas inválido.`);
                }
            }
            return this;
        }
        catch (ex) {
            console.log(ex);
            this.addError(`Erro ao validar intervalo ${msg}.`);
            return this;
        }
    }
    isRequired(value, msg) {
        if (!FnValidacoes_1.default.isTruthy(value)) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            }
            else {
                this.addError(`${msg} é obrigatório.`);
            }
        }
        return this;
    }
    oneOrOtherIsRequired(value, value2, msg, msg2) {
        const firstIsTruthy = FnValidacoes_1.default.isTruthy(value);
        const secondIsTruthy = FnValidacoes_1.default.isTruthy(value2);
        if (!firstIsTruthy && !secondIsTruthy) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            }
            else {
                this.addError(`É obrigatório escolher ${msg} ou ${msg2}.`);
            }
        }
        if (firstIsTruthy && secondIsTruthy) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            }
            else {
                this.addError(`Não é possível escolher ${msg} e ${msg2} simultaneamente.`);
            }
        }
        return this;
    }
    isRequiredNumber(value, msg) {
        if (!FnValidacoes_1.default.isTruthyNumber(value)) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            }
            else {
                this.addError(`${msg} é obrigatório.`);
            }
        }
        return this;
    }
    maxLength(value, size, msg) {
        try {
            if (!FnValidacoes_1.default.maxLength(value, size)) {
                if (msg.split(' ').length > 1) {
                    this.addError(msg);
                }
                else {
                    this.addError(`${msg} deve ter no maximo ${size} caracteres.`);
                }
            }
            return this;
        }
        catch (ex) {
            return this;
        }
    }
    minLength(value, size, msg) {
        try {
            if (!FnValidacoes_1.default.minLength(value, size)) {
                if (msg.split(' ').length > 1) {
                    this.addError(msg);
                }
                else {
                    this.addError(`${msg} deve ter no minimo ${size} caracteres.`);
                }
            }
            return this;
        }
        catch (ex) {
            return this;
        }
    }
    max(value, max, msg) {
        if (value > max) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            }
            else {
                this.addError(`${msg} deve ter ser menor que ${max}`);
            }
        }
        return this;
    }
    min(value, min, msg) {
        if (value < min) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            }
            else {
                this.addError(`${msg} deve ter ser maior que ${min}`);
            }
        }
        return this;
    }
    maxInclude(value, max, msg) {
        if (value >= max) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            }
            else {
                this.addError(`${msg} deve ter ser menor ou igual que ${max}`);
            }
        }
        return this;
    }
    minInclude(value, min, msg) {
        if (value <= min) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            }
            else {
                this.addError(`${msg} deve ter ser maior ou igual que ${min}`);
            }
        }
        return this;
    }
    minExclude(value, min, msg) {
        if (value <= min) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            }
            else {
                this.addError(`${msg} deve ter ser maior que ${min}`);
            }
        }
        return this;
    }
    fixLength(value, size, msg) {
        try {
            if (!FnValidacoes_1.default.fixLength(value, size)) {
                if (msg.split(' ').length > 1) {
                    this.addError(msg);
                }
                else {
                    this.addError(`${msg} deve ter ${size} caracteres.`);
                }
            }
            return this;
        }
        catch (ex) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            }
            else {
                this.addError(`${msg} deve ter ${size} caracteres.`);
            }
            return this;
        }
    }
    regex(value, regex, msg) {
        try {
            if (!regex.test(value)) {
                this.addError(`${msg} possui um valor inválido.`);
            }
            return this;
        }
        catch (ex) {
            this.addError(`${msg} possui um valor inválido.`);
            return this;
        }
    }
    custom(value, fnCustom, msg) {
        if (!fnCustom(value))
            this.addError(msg);
        return this;
    }
    in(value, collection, msg) {
        const exists = collection.some((elem) => elem === value);
        if (!exists) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            }
            else {
                this.addError(`${msg} possui um valor inválido.`);
            }
        }
        return this;
    }
    isTrue(value, msg) {
        try {
            if (value !== true) {
                this.addError(msg);
            }
            return this;
        }
        catch (ex) {
            this.addError(msg);
            return this;
        }
    }
}
exports.default = ValidationContract;
