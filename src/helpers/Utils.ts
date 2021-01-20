/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */

import { omitBy, isNil, isEmpty, reject } from 'lodash';
import { ObjectId } from 'mongodb';
import { uuid } from 'uuidv4'

/* eslint-disable no-return-assign */
export const removerAcentos = (inStr: string): string => {
    // accentFold
    return inStr.replace(
        /([àáâãäå])|([ç])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])|(['"`])/gi,
        (
            str: string,
            a: string,
            c: string,
            e: string,
            i: string,
            n: string,
            o: string,
            s: string,
            u: string,
            y: string,
            ae: string,
            apost: string,
        ): string => {
            if (a) return 'a';
            if (c) return 'c';
            if (e) return 'e';
            if (i) return 'i';
            if (n) return 'n';
            if (o) return 'o';
            if (s) return 's';
            if (u) return 'u';
            if (y) return 'y';
            if (ae) return 'ae';
            if (apost) return '';
            return '';
        },
    );
};

export const getCollectionName = (url: string): string => {
    try {
        const path = url.split('/');

        const baseUrl = path[1];

        return baseUrl.toUpperCase();
    } catch (err) {
        console.error('[ERROR] - Erro ao buscar collection name LOG-Request');
        return '';
    }
};

export const calcularDescontoProduto = (
    preco: number,
    precoAntigo: number,
): number => {
    try {
        const valorDesconto = precoAntigo - preco;
        const percentualDesconto = valorDesconto / precoAntigo;

        return percentualDesconto;
    } catch (error) {
        return 0;
    }
};

// FIXME: Corrigir implementação
export const removerAcentosEspecialChars = (str: string): string => {
    try {
        return removerAcentos(str)
            .replace(/[^a-z0-9 ]/gi, '')
            .trim();
    } catch (ex) {
        console.error(`[ex error] ${ex.message} | str: ${str}`);
        return '';
    }
};

export const manterApenasPalavras = (str: string, lowerCase = true): string => {
    const cleanWord = removerAcentos(str)
        .replace(/[^a-z ]/gi, '')
        .trim();

    return !lowerCase ? cleanWord : cleanWord.toLowerCase();
};

export const replaceSpecialChars = (str: string): string => {
    const removedAcentos = removerAcentos(str);

    // o resto

    return removedAcentos.replace(/[^a-z0-9]/gi, '');
};

export const splitToken = (token: string): string | null => {
    return token.split(' ')[1] ?? null;
};

/**
 * Função que recebe uma string ou número e converte para booleano.
 * Ex: 'true' | 1 => true -- 'false' | 0 => false
 *
 * @param param Parametro a ser convertido para booleano
 */
export const parseBoolean = (
    param: string | number | boolean | undefined,
    errorMessage = 'Valor inválido',
): boolean => {
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

export const checkBooleanValue = (
    param: string | number | boolean | undefined,
    errorMessage = 'Valor inválido'): boolean => {
    if (param === '' || typeof param === 'undefined') return false

    return parseBoolean(param, errorMessage)
}

export const parseToBooleanValue = (
    param: string | number | boolean | undefined,
    errorMessage = 'Valor inválido'): boolean => {
    return checkBooleanValue(param, errorMessage)
}

export const capitalizeFirstChar = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

export const escapeRegExp = (str: string): string => {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

/**
 * Remove todos atributos de um objeto que são null e undefined
 */
export const removeNil = (object: any): any => {
    return omitBy(object, isNil);
};

export const removeEmptyObjects = (array: any[]): any[] => {
    return reject(array, isEmpty);
};

export const toObject = (objThis: any): any => {
    try {
        const obj = { ...objThis }

        // eslint-disable-next-line array-callback-return
        Object.keys(obj).map(key => {
            if (obj[key] === undefined) {
                delete obj[key]
            }
        })

        return obj
    } catch (ex) {
        return objThis
    }
}

export const getUuid = (): string => {
    return uuid()
}

export const toObjectId = (param: string): ObjectId | undefined => {
    return !isEmpty(param) ? new ObjectId(param) : undefined;
}

export const toFloat = (param: string): number | undefined => {
    return !isEmpty(param) ? Number.parseFloat(param) : undefined;
}

export const toArrayObj = (arrayString: string[]): ObjectId[] => {
    const arrayStringValues = arrayString.map(valueId =>{
        return new ObjectId(valueId)
    })
    return arrayStringValues
}
