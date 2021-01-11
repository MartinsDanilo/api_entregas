"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeStopWords = exports.removeEmptyObjects = exports.removeNil = exports.escapeRegExp = exports.capitalizeFirstChar = exports.parseToBooleanValue = exports.checkBooleanValue = exports.parseBoolean = exports.splitToken = exports.replaceSpecialChars = exports.manterApenasPalavras = exports.removerAcentosEspecialChars = exports.calcularDescontoProduto = exports.getCollectionName = exports.removerAcentos = void 0;
const lodash_1 = require("lodash");
const Stopwords_1 = __importDefault(require("./Stopwords"));
exports.removerAcentos = (inStr) => {
    return inStr.replace(/([àáâãäå])|([ç])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])|(['"`])/gi, (str, a, c, e, i, n, o, s, u, y, ae, apost) => {
        if (a)
            return 'a';
        if (c)
            return 'c';
        if (e)
            return 'e';
        if (i)
            return 'i';
        if (n)
            return 'n';
        if (o)
            return 'o';
        if (s)
            return 's';
        if (u)
            return 'u';
        if (y)
            return 'y';
        if (ae)
            return 'ae';
        if (apost)
            return '';
        return '';
    });
};
exports.getCollectionName = (url) => {
    try {
        const path = url.split('/');
        const baseUrl = path[1];
        return baseUrl.toUpperCase();
    }
    catch (err) {
        console.error('[ERROR] - Erro ao buscar collection name LOG-Request');
        return '';
    }
};
exports.calcularDescontoProduto = (preco, precoAntigo) => {
    try {
        const valorDesconto = precoAntigo - preco;
        const percentualDesconto = valorDesconto / precoAntigo;
        return percentualDesconto;
    }
    catch (error) {
        return 0;
    }
};
exports.removerAcentosEspecialChars = (str) => {
    try {
        return exports.removerAcentos(str)
            .replace(/[^a-z0-9 ]/gi, '')
            .trim();
    }
    catch (ex) {
        console.error(`[ex error] ${ex.message} | str: ${str}`);
        return '';
    }
};
exports.manterApenasPalavras = (str, lowerCase = true) => {
    const cleanWord = exports.removerAcentos(str)
        .replace(/[^a-z ]/gi, '')
        .trim();
    return !lowerCase ? cleanWord : cleanWord.toLowerCase();
};
exports.replaceSpecialChars = (str) => {
    const removedAcentos = exports.removerAcentos(str);
    return removedAcentos.replace(/[^a-z0-9]/gi, '');
};
exports.splitToken = (token) => {
    var _a;
    return (_a = token.split(' ')[1]) !== null && _a !== void 0 ? _a : null;
};
exports.parseBoolean = (param, errorMessage = 'Valor inválido') => {
    if (param === '' || typeof param === 'undefined')
        throw new Error(errorMessage);
    const parsedValue = JSON.parse(param.toString().toLowerCase());
    if ([1, true].includes(parsedValue)) {
        return true;
    }
    if ([0, false].includes(parsedValue)) {
        return false;
    }
    throw new Error(errorMessage);
};
exports.checkBooleanValue = (param, errorMessage = 'Valor inválido') => {
    if (param === '' || typeof param === 'undefined')
        return false;
    return exports.parseBoolean(param, errorMessage);
};
exports.parseToBooleanValue = (param, errorMessage = 'Valor inválido') => {
    return exports.checkBooleanValue(param, errorMessage);
};
exports.capitalizeFirstChar = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};
exports.escapeRegExp = (str) => {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};
exports.removeNil = (object) => {
    return lodash_1.omitBy(object, lodash_1.isNil);
};
exports.removeEmptyObjects = (array) => {
    return lodash_1.reject(array, lodash_1.isEmpty);
};
exports.removeStopWords = (words) => {
    return words.filter(word => !Stopwords_1.default.includes(word));
};
