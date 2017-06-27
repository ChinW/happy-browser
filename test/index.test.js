/**
 * Created by Chi on 27/06/2017.
 */

import happybrowser from '../src/index.js';

const userAgents = {
    Chrome: {
        58: {
            agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
            target: {
                name: 'Chrome',
                version: '58.0.3029.110'
            }
        }
    },
    Opera: {
        45: {
            agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 OPR/45.0.2552.888',
            target: {
                name: 'Opera',
                version: '45.0.2552.888'
            }
        }
    },
    Firefox: {
        53: {
            agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:53.0) Gecko/20100101 Firefox/53.0',
            target: {
                name: 'Firefox',
                version: '53.0'
            }
        }
    },
    Edge: {
        12: {
            agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240',
            target: {
                name: 'Edge',
                version: '12.10240'
            }
        }
    },
    MSIE: {
        11: {
            agent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko',
            target: {
                name: 'IE',
                version: '11.0'
            }
        },
        10: {
            agent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 10.0; WOW64; Trident/8.0; .NET4.0C; .NET4.0E)',
            target: {
                name: 'IE',
                version: '10.0'
            }
        },
        9: {
            agent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/8.0; .NET4.0C; .NET4.0E)',
            target: {
                name: 'IE',
                version: '9.0'
            }
        },
        8: {
            agent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; WOW64; Trident/8.0; .NET4.0C; .NET4.0E)',
            target: {
                name: 'IE',
                version: '8.0'
            }
        },
        7: {
            agent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/8.0; .NET4.0C; .NET4.0E)',
            target: {
                name: 'IE',
                version: '7.0'
            }
        }
    }
};

Object.defineProperty(window.navigator, 'userAgent', (function (_value) {
    return {
        get: function _get() {
            return _value;
        },
        set: function _set(v) {
            _value = v;
        }
    };
})(window.navigator.userAgent));

Object.defineProperty(window.navigator, 'appName', (function (_value) {
    return {
        get: function _get() {
            return _value;
        },
        set: function _set(v) {
            _value = v;
        }
    };
})(window.navigator.appName));

Object.defineProperty(window.navigator, 'appVersion', (function (_value) {
    return {
        get: function _get() {
            return _value;
        },
        set: function _set(v) {
            _value = v;
        }
    };
})(window.navigator.appVersion));

describe('[Happy Browser]', () => {
    test('detect function works', () => {
        Object.keys(userAgents).map((browser) => {
            Object.keys(userAgents[browser]).map((version) => {
                const userAgent = userAgents[browser][version];
                window.navigator.appName = 'test';
                window.navigator.appVersion = version;
                window.navigator.userAgent = userAgent.agent;
                expect(happybrowser.detect()).toEqual(userAgent.target);
            });
        });
    });
});