"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationContract_1 = __importDefault(require("./ValidationContract"));
class ValidationBuilder {
    constructor(value, message, value2, message2) {
        this.value = value;
        this.message = message;
        this.value2 = value2;
        this.message2 = message2;
        this.validation = new ValidationContract_1.default();
    }
    static field(value, message, value2, message2) {
        return new ValidationBuilder(value, message, value2, message2);
    }
    isRequired() {
        this.validation.isRequired(this.value, this.message);
        return this;
    }
    oneOrOtherIsRequired() {
        this.validation.oneOrOtherIsRequired(this.value, this.value2, this.message, this.message2);
        return this;
    }
    maxLength(size) {
        this.validation.maxLength(this.value, size, this.message);
        return this;
    }
    regex(regex) {
        this.validation.regex(this.value, regex, this.message);
        return this;
    }
    min(min) {
        this.validation.min(this.value, min, this.message);
        return this;
    }
    max(max) {
        this.validation.max(this.value, max, this.message);
        return this;
    }
}
exports.default = ValidationBuilder;
