/**
 * Created by Chi on 17/06/2017.
 */

import '../assets/styles/index.scss';

export class HappyBrowser {
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

    isOpera() {
        const browser = this.detect();
        return browser.name === 'Opera';
    }

    isFirefox() {
        const browser = this.detect();
        return browser.name === 'Firefox';
    }

    isSafari() {
        const browser = this.detect();
        return browser.name === 'Safari';
    }

    isIE() {
        const browser = this.detect();
        return browser.name === 'IE';
    }

    isEdge() {
        const browser = this.detect();
        return browser.name === 'Edge';
    }

    isChrome() {
        const browser = this.detect();
        return browser.name === 'Chrome';
    }

    isBlink() {
        const browser = this.detect();
        return browser.name === 'Blink';
    }

    detect() {
        //noinspection JSAnnotator
        const navigator = window.navigator;
        const ua = navigator.userAgent;
        let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([^\s;()]+)/i) || [];
        let tem;
        if (/(trident)/i.test(M[1])) {
            tem = /\brv[ :]+([^\s;()]+)/g.exec(ua) || [];
            M = ['IE', (tem[1] || '')];
        } else if (/(msie)/i.test(M[1])) {
            M = ['IE', (M[2] || '')];
        } else {
            if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\S+)/);
                if (tem !== null) {
                    console.log(tem[1]);
                    tem[1] = tem[1].replace('OPR', 'Opera');
                    M = tem;
                }
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

    dismiss() {
        const hbAlert = document.getElementById("hb-alert");
        hbAlert.parentNode.removeChild(hbAlert);
    }

    alert(config = {}) {
        const thisConfig = Object.assign({}, HappyBrowser.config, config);
        const { alertWhen, jumpURL, alertMode } = thisConfig;
        if (alertMode === HappyBrowser.alertMode.banner) {
            if (alertWhen(this.detect())) {
                document.write(`
                    <div class="hb-alert ${thisConfig.hide ? 'hb-hide': ''}" id="hb-alert">
                      <div class="hb-alert-wrapper">
                          Please update your browser for better experience, 
                          <a href=${jumpURL} class="hb-button">click here for updating</a>
                          <span class="hb-current-version">(Current: ${HappyBrowser.browser.name} ${HappyBrowser.browser.version})</span>
                          <span class="hb-close" id="hb-close"></span>
                      </div>
                    </div>
                `);
            }
            document.getElementById("hb-close").onclick = this.dismiss;
        } else {
            window.href = jumpURL;
        }
    }
}

export default new HappyBrowser();

if (process.env.NODE_ENV === 'development') {
    const happyBrowser = new HappyBrowser();
    console.log(happyBrowser.alert());
}