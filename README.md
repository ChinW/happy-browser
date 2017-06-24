## 1. Happy Browser

A browser detection tool

## 2. Brwosers Supported

| Chrome | Firefox | IE | Edge | Opera | Safari |
|--------|---------|----|------|-------|--------|
| >= 45   | >=3.5   | >7 | >=12 | >3    | >3     |



## 3. Usage

### 3.1 Import

```
import HappyBrowser from 'HappyBrowser'
# or
const HappyBrowser = require('HappyBrowser')
```

### 3.2 Detect Specific Browser

```
HappyBrowser.isChrome()
HappyBrowser.isOpera()
HappyBrowser.isSafari()
HappyBrowser.isIE()
HappyBrowser.isEdge()
HappyBrowser.isChrome()
HappyBrowser.isBlink()
```

### 3.3 Alert

```
HappyBrowser.alert({
  alertWhen: () => true,
  alertMode: HappyBrowser.alertMode.banner,
  jumpURL: 'https://browsehappy.com/'
})
```

## 4. Configuration

### 4.1 Alert Mode

```$xslt
static alertMode = {
  jump: 'jump', // jump to JumpURL directly
  banner: 'banner' // show banner in webpage
};
```

## 5. Contribution

PR welcome!