function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed();
    }

    return x.trim();
}

// ====

class MyResponse {
    header = 'response header';
    result = 'response result';
}

class MyError {
    header = 'error header';
    result = 'error result';
}

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    }

    return {
        info: res.header + res.result
    }
}

// ====

type AlerType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlerType) {

}

setAlertType('success');
setAlertType('danger');
setAlertType('warning');