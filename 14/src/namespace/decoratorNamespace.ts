/// <reference path="./form-namespace.ts"/>

namespace App {
    class MyForm {
        private type: Form.FormType = 'inline';
        private state: Form.FormState = 'active';

        constructor(public email: string) {

        }

        getInfo(): Form.FormInfo {
            return {
                type: this.type,
                state: this.state,
            }
        }
    }

    const myForm = new MyForm('123@123.ru');
    console.log(myForm);
}