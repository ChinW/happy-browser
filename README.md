[![Build Status](https://travis-ci.org/ChinW/happy-browser.svg?branch=master)](https://travis-ci.org/ChinW/happy-browser)

## 1. Happy Browser

A browser detection tool

## 2. Brwosers Supported

| Chrome | Firefox | IE | Edge | Opera | Safari |
|--------|---------|----|------|-------|--------|
| >= 45   | >=3.5   | >7 | >=12 | >3    | >3     |


## 3. Install

```javascript
yarn add --save-dev happy-brwoser
npm install --dev happy-browser
``` 

## 4. Usage

### 4.1 Import

```javascript
import HappyBrowser from 'HappyBrowser';
# or
const HappyBrowser = require('HappyBrowser');

# then
require('happy-browser/dist/happy-browser.min.css');

```

### 4.2 Detect Specific Browser

```javascript
HappyBrowser.isChrome()
HappyBrowser.isOpera()
HappyBrowser.isSafari()
HappyBrowser.isIE()
HappyBrowser.isEdge()
HappyBrowser.isChrome()
HappyBrowser.isBlink()
```

### 4.3 Alert

```javascript
HappyBrowser.alert({
  alertWhen: (browser) => true,
  alertMode: HappyBrowser.alertMode.banner,
  jumpURL: 'https://browsehappy.com/'
})
```

## 5. Configuration

### 5.1 Alert Mode

```javascript
static alertMode = {
  jump: 'jump', // jump to JumpURL directly
  banner: 'banner' // show banner in webpage
};
```

### 5.2 alertWhen 

The `alertWhen` function returns Boolean, `true` means alerting, `false` for not. The `browser` object is passed to `alertWhen`:

```javascript
browser = {
    name: String,
    version: String
}    
```

## 6. Contribution

PR welcome!