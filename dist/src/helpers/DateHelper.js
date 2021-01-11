"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDate = exports.timeZone = void 0;
const locale_1 = require("date-fns/locale");
const date_fns_tz_1 = require("date-fns-tz");
exports.timeZone = 'America/Bahia';
const options = {
    locale: locale_1.ptBR,
    timeZone: exports.timeZone,
};
function toDate(date) {
    const newDate = date_fns_tz_1.toDate(date || new Date(), options);
    return newDate;
}
exports.toDate = toDate;
