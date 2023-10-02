
    module.exports = ['URL', (url) => {
        if (!url.toString().includes('/')) return 'http://localhost:3080/';

        return 'http://localhost:3080/' + url;
    }];
