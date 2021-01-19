/* eslint-disable import/no-cycle */
import FnValidacoes from './FnValidacoes';
import ValidationBuilder from './ValidationBuilder';

class ValidationContract {
    errors: string[];

    constructor() {
        this.errors = [];
    }

    setValidations(builders: ValidationBuilder[]): void {
        builders.forEach(builder => {
            if (builder.validation.errors.length > 0) {
                this.addErrors(builder.validation.errors);
            }
        });
    }

    isValid(): boolean {
        return this.errors.length === 0;
    }

    addError(message: string): null {
        this.errors.push(message);
        return null;
    }

    addErrors(errors: string[], prefix = ''): null {
        errors.forEach((message: string) => {
            this.addError(`${prefix ? `${prefix}.` : ''}${message}`);
        });

        return null;
    }

    clear(): ValidationContract {
        this.errors = [];
        return this;
    }

    isUrl(url: string, msg = 'URL inválido.'): ValidationContract {
        if (!FnValidacoes.isUrl(url)) this.addError(msg);
        return this;
    }

    isTimeSpan(timeSpan: string, msg: string): ValidationContract {
        if (!FnValidacoes.timeSpan(timeSpan)) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            } else {
                this.addError(`${msg} TimeSpan inválido.`);
            }
        }
        return this;
    }

    validaTimeSpanIntevalo(
        inicio: string,
        fim: string,
        msg: string,
    ): ValidationContract {
        try {
            const inicioHora: number = parseInt(inicio.split(':')[0]);
            const fimHora: number = parseInt(fim.split(':')[0]);
            if (fimHora > inicioHora) return this;
            if (inicioHora === fimHora) {
                const inicioMinuto = parseInt(inicio.split(':')[1]);
                const fimMinuto = parseInt(fim.split(':')[1]);
                if (inicioMinuto > fimMinuto) {
                    if (msg.split(' ').length > 1) {
                        this.addError(msg);
                    } else {
                        this.addError(
                            `${msg} possui um intervalo de horas inválido.`,
                        );
                    }
                }
            } else if (fimHora < inicioHora && fimHora > 5) {
                // horario fim é mais que inicio e nao esta operando na madrugada
                if (msg.split(' ').length > 1) {
                    this.addError(msg);
                } else {
                    this.addError(
                        `${msg} possui um intervalo de horas inválido.`,
                    );
                }
            }
            return this;
        } catch (ex) {
            console.log(ex);
            this.addError(`Erro ao validar intervalo ${msg}.`);
            return this;
        }
    }

    isRequired(value: any, msg: string): ValidationContract {
        if (!FnValidacoes.isTruthy(value)) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            } else {
                this.addError(`${msg} é obrigatório.`);
            }
        }
        return this;
    }

    oneOrOtherIsRequired(
        value: any,
        value2: any,
        msg: string,
        msg2: string,
    ): ValidationContract {
        const firstIsTruthy = FnValidacoes.isTruthy(value);
        const secondIsTruthy = FnValidacoes.isTruthy(value2);

        if (!firstIsTruthy && !secondIsTruthy) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            } else {
                this.addError(`É obrigatório escolher ${msg} ou ${msg2}.`);
            }
        }

        if (firstIsTruthy && secondIsTruthy) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            } else {
                this.addError(
                    `Não é possível escolher ${msg} e ${msg2} simultaneamente.`,
                );
            }
        }

        return this;
    }

    isRequiredNumber(value: any, msg: string): ValidationContract {
        if (!FnValidacoes.isTruthyNumber(value)) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            } else {
                this.addError(`${msg} é obrigatório.`);
            }
        }
        return this;
    }

    maxLength(value: string, size: number, msg: string): ValidationContract {
        try {
            if (!FnValidacoes.maxLength(value, size)) {
                if (msg.split(' ').length > 1) {
                    this.addError(msg);
                } else {
                    this.addError(
                        `${msg} deve ter no maximo ${size} caracteres.`,
                    );
                }
            }
            return this;
        } catch (ex) {
            return this;
        }
    }

    minLength(value: string, size: number, msg: string): ValidationContract {
        try {
            if (!FnValidacoes.minLength(value, size)) {
                if (msg.split(' ').length > 1) {
                    this.addError(msg);
                } else {
                    this.addError(
                        `${msg} deve ter no minimo ${size} caracteres.`,
                    );
                }
            }
            return this;
        } catch (ex) {
            return this;
        }
    }

    max(value: number, max: number, msg: string): ValidationContract {
        if (value > max) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            } else {
                this.addError(`${msg} deve ter ser menor que ${max}`);
            }
        }
        return this;
    }

    min(value: number, min: number, msg: string): ValidationContract {
        if (value < min) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            } else {
                this.addError(`${msg} deve ter ser maior que ${min}`);
            }
        }
        return this;
    }

    maxInclude(value: number, max: number, msg: string): ValidationContract {
        if (value >= max) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            } else {
                this.addError(`${msg} deve ter ser menor ou igual que ${max}`);
            }
        }
        return this;
    }

    minInclude(value: number, min: number, msg: string): ValidationContract {
        if (value <= min) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            } else {
                this.addError(`${msg} deve ter ser maior ou igual que ${min}`);
            }
        }
        return this;
    }

    minExclude(value: number, min: number, msg: string): ValidationContract {
        if (value <= min) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            } else {
                this.addError(`${msg} deve ter ser maior que ${min}`);
            }
        }
        return this;
    }

    fixLength(value: string, size: number, msg: string): ValidationContract {
        try {
            if (!FnValidacoes.fixLength(value, size)) {
                if (msg.split(' ').length > 1) {
                    this.addError(msg);
                } else {
                    this.addError(`${msg} deve ter ${size} caracteres.`);
                }
            }
            return this;
        } catch (ex) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            } else {
                this.addError(`${msg} deve ter ${size} caracteres.`);
            }
            return this;
        }
    }

    regex(value: string, regex: RegExp, msg: string): ValidationContract {
        try {
            if (!regex.test(value)) {
                this.addError(`${msg} possui um valor inválido.`);
            }
            return this;
        } catch (ex) {
            this.addError(`${msg} possui um valor inválido.`);

            return this;
        }
    }

    custom(
        value: any,
        fnCustom: (value: any) => boolean,
        msg: string,
    ): ValidationContract {
        if (!fnCustom(value)) this.addError(msg);
        return this;
    }

    in(value: any, collection: any[], msg: string): ValidationContract {
        const exists = collection.some((elem: any): boolean => elem === value);
        if (!exists) {
            if (msg.split(' ').length > 1) {
                this.addError(msg);
            } else {
                this.addError(`${msg} possui um valor inválido.`);
            }
        }

        return this;
    }

    isTrue(value: boolean, msg: string): ValidationContract {
        try {
            if (value !== true) {
                this.addError(msg);
            }
            return this;
        } catch (ex) {
            this.addError(msg);

            return this;
        }
    }    
    isCpf(cpf: string, msg: string = 'CPF inválido.'): ValidationContract {
        if (!FnValidacoes.cpf(cpf)) this.addError(msg);
        return this;
    }

    isEmail(email: string, msg: string = 'e-mail inválido.'): ValidationContract {
        if (!FnValidacoes.email(email)) this.addError(msg);
        return this;
    }

    
}

export default ValidationContract;
