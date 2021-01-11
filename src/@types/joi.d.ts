import Joi from 'joi';

declare namespace Joi {
    export type Types =
        | 'any'
        | 'alternatives'
        | 'array'
        | 'boolean'
        | 'binary'
        | 'date'
        | 'function'
        | 'lazy'
        | 'number'
        | 'object'
        | 'string'
        | 'objectId'
        | 'jwt'
        | 'timespan';

    export function objectId(): StringSchema;
    export function jwt(): StringSchema;
    export function timeSpan(): StringSchema;
}
