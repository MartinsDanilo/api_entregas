// eslint-disable-next-line import/no-cycle
import ValidationContract from './ValidationContract';

export default class ValidationBuilder {
    validation: ValidationContract;

    constructor(
        private value: any,
        private message: string,
        private value2?: any,
        private message2?: string,
    ) {
        this.validation = new ValidationContract();
    }

    static field(
        value: any,
        message: string,
        value2?: any,
        message2?: string,
    ): ValidationBuilder {
        return new ValidationBuilder(value, message, value2, message2);
    }

    /** wrappers */

    isRequired(): ValidationBuilder {
        this.validation.isRequired(this.value, this.message);
        return this;
    }

    oneOrOtherIsRequired(): ValidationBuilder {
        this.validation.oneOrOtherIsRequired(
            this.value,
            this.value2,
            this.message,
            this.message2 as string,
        );
        return this;
    }

    maxLength(size: number): ValidationBuilder {
        this.validation.maxLength(this.value, size, this.message);
        return this;
    }

    regex(regex: RegExp): ValidationBuilder {
        this.validation.regex(this.value, regex, this.message);
        return this;
    }

    min(min: number): ValidationBuilder {
        this.validation.min(this.value, min, this.message);
        return this;
    }

    max(max: number): ValidationBuilder {
        this.validation.max(this.value, max, this.message);
        return this;
    }
        
    isCPF(): ValidationBuilder {
        this.validation.isCpf(this.value, this.message);
        return this;
    }

    isEmail(): ValidationBuilder {
        this.validation.isEmail(this.value, this.message)
        return this;
    }
}
