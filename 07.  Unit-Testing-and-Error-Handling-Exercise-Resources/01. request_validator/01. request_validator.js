function requestValidator(obj) {
    let myObj = obj

    checkProperties(obj)
    checkMethod(obj);
    checkUri(obj);
    checkVersion(obj);
    checkMessage(obj);

    function checkProperties(obj){
        let valid_properties = ['Method','URI','Version','Message'];
        for (let property of valid_properties) {
            if (!Object.keys(obj).includes(property.toLowerCase())) {
                throw new Error(`Invalid request header: Invalid ${property}`);
            }
        }
    }

    function checkMethod(obj) {
        let valid_methods = ['GET', 'POST', 'DELETE', 'CONNECT']; // check for lowercase
        for (let method of valid_methods) {
            if (!valid_methods.includes(obj.method)) {
                throw new Error(`Invalid request header: Invalid Method`);
            }
        }
    }

    function checkUri(obj) {
        let regPath = /\*|^[a-zA-Z0-9.]+$/;
        if (!regPath.test(obj.uri)) {
            throw new Error(`Invalid request header: Invalid URI`);
        }
    }

    function checkVersion(obj) {
        let valid_versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        for (let version of valid_versions) {
            if (!valid_versions.includes(obj.version)) {
                throw new Error(`Invalid request header: Invalid Version`);
            }
        }
    }


    function checkMessage(obj){
        let regPath = /^[^<>\\&'"]*$/;
        if(!regPath.test(obj.message)){
            throw new Error(`Invalid request header: Invalid Message`);
        }
    }
    return myObj;
}

try {
    console.log(requestValidator({
                method: 'POST',
                version: 'HTTP/2.0',
                message: 'rm -rf /*'
            }

        )
    )
} catch (e) {
    console.error(e.message);
}