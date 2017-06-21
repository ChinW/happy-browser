/**
 * Created by Chi on 17/06/2017.
 */

export default class HappyBrowser {
    static alertMode = {
      jump: 'jump',
      banner: 'banner'
    };

    static config = {
        alertWhen: () => true,
        alertMode: HappyBrowser.alertMode.banner,
        jumpURL: 'https://browsehappy.com/'
    };

    static browser = {
        name: '?',
        version: '?'
    };

    constructor() {

    }

    isOpera() {
        return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    }

    isFirefox() {
        return typeof InstallTrigger !== 'undefined';
    }

    isSafari() {
        return /constructor/i.test(window.HTMLElement) ||
            (function (p) {
                return p.toString() === "[object SafariRemoteNotification]";
            })(!window['safari'] || safari.pushNotification);
    }

    isIE() {
        return /*@cc_on!@*/false || !!document.documentMode;
    }

    isEdge() {
        return !HappyBrowser.browsers.isIE && !!window.StyleMedia;
    }

    isChrome() {
        return !!window.chrome && !!window.chrome.webstore;
    }

    isBlink() {
        return (HappyBrowser.browsers.isChrome || HappyBrowser.browsers.isOpera) && !!window.CSS;
    }

    getIEVersion() {
        const navigator = window.navigator;
        let ua = navigator.userAgent;
        let msie = ua.indexOf("MSIE ");
        let rv = -1;

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {

            if (isNaN(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))))) {
                //For IE 11 >
                if (navigator.appName == 'Netscape') {
                    let ua = navigator.userAgent;
                    let re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                    if (re.exec(ua) !== null) {
                        rv = parseFloat(RegExp.$1);
                        return rv;
                    }
                } else {
                    return 'Version Unknown';
                }
            } else {
                //For < IE11
                return (parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
            }
            return false;
        }
    }

    getChromeVersion() {
        const v = window.navigator.userAgent.match(/Chrome\/(\S+)/);
        return v ? v[1] : 'Version Unknown';
    }

    getEdgeVersion() {
        const v = window.navigator.userAgent.match(/Edge\/(\S+)/);
        return v ? v[1] : 'Version Unknown';
    }

    detect() {
        //noinspection JSAnnotator
        const ua = window.navigator.userAgent;
        const navigator = window.navigator;
        let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\S+)/i) || [];
        let tem;
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            M = ['IE', (tem[1] || '')];
        } else {
            if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem !== null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, `${navigator.appVersion}-?`];
            if ((tem = ua.match(/version\/(\d+)/i)) !== null) {
                M.splice(1, 1, tem[1]);
            }
        }

        HappyBrowser.browser.name = M[0];
        HappyBrowser.browser.version = M[1];
        return HappyBrowser.browser;
    }

    alert(config = {}) {
        const thisConfig = Object.assign({}, HappyBrowser.config, config);
        const { alertWhen, jumpURL, alertMode } = thisConfig;
        if (alertWhen(this.detect())) {
            document.write(`
                <div class="hb-alert">
                  ${HappyBrowser.browser.name} ${HappyBrowser.browser.version}
                </div>
            `);
        }
    }
}

const happyBrowser = new HappyBrowser({});
console.log(happyBrowser.alert());