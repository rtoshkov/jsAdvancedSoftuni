(function () {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }
        return `${str}${this}`;
    };

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }
        return `${this}${str}`;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;

    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }


        if (n < 4) {
            return '...'.slice(0, n);
        }


        if (this.includes(' ')) {
            let stringArray = this.split(' ');
            while (stringArray.join(' ').length > n - 3) {
                stringArray.pop();
            }
            return `${stringArray.join(' ')}...`;
        }

        return `${this}`.slice(0, n - 3) + '...';
    };

    String.format = function (str, ...params) {
        let temp = 0;
        params.forEach((e) => {
            str = str.replace(`{${temp}}`, e);
            while (str.includes(`{${temp}}`)) {
                str = str.replace(`{${temp}}`, e);
            }
            temp += 1;
        })

        return str;
    };
}())