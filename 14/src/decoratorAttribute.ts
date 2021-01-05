type ValidatorType = 'required' | 'email';

interface ValidatorConfig {
    [prop: string]: {
        [validateProp: string]: ValidatorType,
    }
};

const validators: ValidatorConfig = {};

const Required = <
    T extends object,
    K extends keyof T>(target: T, propName: K) => {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required',
    }
};

const Email = <
    T extends object,
    K extends keyof T>(target: T, propName: K) => {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'email',
    }
};

const validate = (obj: any): boolean => {
    const objectConfig = validators[obj.constructor.name];

    if (!objectConfig) {
        return true;
    }

    return Object
        .entries(objectConfig)
        .reduce<boolean>((res, [key, validatorType]) => {
            switch (validatorType) {
                case 'required':
                    return res && Boolean(obj[key]);
                case 'email':
                    return res && /@/.test(obj[key]);
            }

            return res;
        }, true);
};

class Form {
    @Required
    public login: string | void;

    @Email
    public email: string | void;

    constructor(login?: string, email?: string) {
        this.login = login;
        this.email = email;
    }
}

const form = new Form();

if (validate(form)) {
    console.log(form);
} else {
    console.log('invalid');
}

/* console.log(validators); */
