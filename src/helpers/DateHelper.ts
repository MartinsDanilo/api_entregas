import { ptBR as locale } from 'date-fns/locale';
import { toDate as toDateFns } from 'date-fns-tz';

export const timeZone = 'America/Bahia';

const options = {
    locale,
    timeZone,
};

export function toDate(date?: string | Date): Date {
    const newDate = toDateFns(date || new Date(), options);

    return newDate;
}
