class FnValidacoes {
    static isTruthy(value: any): boolean {
        return (
            value !== 0 &&
            value !== false &&
            value !== null &&
            value !== undefined &&
            value !== ''
        );
    }

    static isTruthyNumber(value: any): boolean {
        return (
            value !== false &&
            value !== null &&
            value !== undefined &&
            value !== ''
        );
    }

    static maxLength(value: string, size: number): boolean {
        return value.length <= size;
    }

    static minLength(value: string, size: number): boolean {
        return value.trim().length >= size;
    }

    static minArray(value: string, size: number): boolean {
        return value.length >= size;
    }

    static fixLength(value: string, size: number): boolean {
        return value.trim().length === size;
    }

    static timeSpan(value: string): boolean {
        if (!/^[0-2][0-9]:[0-5][0-9]$/.test(value)) return false;

        const hora = parseInt(value.split(':')[0]);
        const minuto = parseInt(value.split(':')[1]);

        if (hora > 23 || minuto > 59) return false;
        return true;
    }

    static isUrl(value: string): boolean {
        if (
            !/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
                value,
            )
        ) {
            return false;
        }
        return true;
    }
        
    static cpf(cpf: string): boolean {
        if (cpf === null || cpf === undefined) return false;
        let numeros, digitos, soma, i, resultado, digitos_iguais;
        const value = cpf.replace(new RegExp(/[^\d]+/, 'g'), '');
        digitos_iguais = 1;
        if (value.length < 11)
            return false;
        for (i = 0; i < value.length - 1; i++)
            if (value.charAt(i) != value.charAt(i + 1)) {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais) {
            numeros = value.substring(0, 9);
            digitos = value.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                soma += parseInt(numeros.charAt(10 - i)) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != parseInt(digitos.charAt(0)))
                return false;
            numeros = value.substring(0, 10);
            soma = 0;
            for (i = 11; i > 1; i--)
                soma += parseInt(numeros.charAt(11 - i)) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != parseInt(digitos.charAt(1)))
                return false;
            return true;
        } else
            return false;
    };

    static email(email: string): boolean {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    };
}

export default FnValidacoes;
