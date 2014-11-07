# wechat-share-guide

## Usage
html:
```html
  <div class="wechat-share-guide">
    <span>点击右上角分享给好友</span>
  </div>
```

css:
```css
@import('maizuo-fe/wechat-share-guide');
```

javascript:
```javascript
var share = require('maizuo-fe/wechat-share-guide');
$('#el').on('click', function () {
    share.show();
});
wechat.on('share', function () {
    share.hide();
});
```

## License
the MIT License
