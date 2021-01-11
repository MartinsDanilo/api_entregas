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
}

export default FnValidacoes;
