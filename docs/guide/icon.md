# 字体图标

## 系统图标

`._icon-{name}` ColorUI自带的图标,不可移除。

<div class="ui-icon-list ui-grid ui-cols-5 mt-3">
    <div class="ui-item" v-for="(item,index) in list" :key="index">
        <div class="border radius ui-BG" style="padding: 15px 0;" @click="copyText('_icon-' + item)">
            <div class="text-cut mt-2 icon-xxl p-4 ui-TC">
                <span :class="'_icon-' + item"></span>
            </div>
            <div class="text-cut mt-2 text-xs text-grey">{{ item }}</div>
        </div>
    </div>
</div>


## 扩展图标

`.cicon-{name}` 选用 iconfont.com 的常用图标作为扩展。你可以在 `/mp-sdk/icon/doc.scss` 中移除这个图标库. 

<div class="ui-icon-list ui-grid ui-cols-5 mt-3">
    <div class="ui-item" v-for="(item,index) in doc" :key="index">
        <div class="border radius ui-BG" style="padding: 15px 0;" @click="copyText('cicon-' + item)">
            <div class="text-cut mt-2 icon-xxl p-4 ui-TC">
                <span :class="'cicon-' + item"></span>
            </div>
            <div class="text-cut mt-2 text-xs text-grey">{{ item }}</div>
        </div>
    </div>
</div>


<script setup>
const list = [
    'home','home-o','search','arrow','checkbox','checkbox-o','box','round','check','check-round','check-round-o','more',
    'close','close-round','close-round-o','edit','info','info-o','warn','warn-o','waiting','waiting-o','delete','delete-o',
    'add','add-round','add-round-o','title','move','move-round','move-round-o','titles','copy','copy-o','loading','loader',
    'back','forward','drop-down','drop-up',
];

const doc = [
    'Aa','accounts','accounts-o','add','add-round','add-round-o','alarm','album','alipay','android','angle','apple',
    'apps','archive','archive-o','arrow','at-line','avatar','avatar-o','avatars','avatars-o','back','backspace',
    'backup','backup-restore','barcode','book','bookmark','bookmark-o','bookmarks','box','box-block','box-right',
    'brand','brand-o','building','building-o','camera','camera-add','camera-add-o','camera-lens','camera-lens-o',
    'camera-o','camera-rotate','card','cardboard','cardboard-o','cardboard-off-o','cart','cart-o','chat','chat-bubble',
    'chat-bubble-o','chat-list','chat-list-o','chat-o','chat-smile','chat-smile-o','chat-smiles','chat-smiles-o','check',
    'checkbox','checkbox-o','check-round','check-round-o','choiceness','choiceness-o','chrome','circle','circle-o','close',
    'close-round','close-round-o','clothes','clothes-o','cloud','cloud-done','cloud-download','cloud-o','cloud-off',
    'cloud-upload','code-box','coin','coin-o','comment','comment-o','community','community-o','countdown',
    'countdown-o','creative','creative-o','crop','crown','crown-o','cut','DarkMode','dashboard','delete',
    'delete-close',
    'delete-line',
    'delete-line-o',
    'delete-o',
    'deliver',
    'deliver-o',
    'demo',
    'discover',
    'discover-o',
    'discuss-fill',
    'discuss-line',
    'dollar',
    'dollar-o',
    'done',
    'done-all',
    'douyin',
    'drop-down',
    'drop-up',
    'eject',
    'ellipse',
    'emoji',
    'emoji-o',
    'equalizer',
    'eraser',
    'eraser-o',
    'evaluate',
    'evaluate-o',
    'event-close',
    'event-done',
    'event-list',
    'explore',
    'explore-line',
    'explore-line-o',
    'explore-o',
    'extension',
    'extension-o',
    'eye',
    'eye-favor',
    'eye-favor-o',
    'eye-o',
    'eye-off',
    'eye-off-o',
    'facebook',
    'favorite',
    'favorite-o',
    'female',
    'file',
    'file-copy',
    'file-copy-o',
    'file-o',
    'file-text',
    'file-text-o',
    'filter',
    'fingerprint',
    'first-page',
    'flag',
    'flag-o',
    'flash-close',
    'flash-off',
    'flash-on',
    'flash-open',
    'folder',
    'folder-add',
    'folder-o',
    'folder-special',
    'forward',
    'fullscreen',
    'fullscreen-exit',
    'game',
    'game-o',
    'git-commit',
    'git-commit-o',
    'github',
    'github-circle',
    'goods',
    'goodsnew',
    'goodsnew-o',
    'goods-o',
    'GooglePlaylogo',
    'grid',
    'grid-o',
    'group',
    'group-o',
    'guanli',
    'headset',
    'headset-mic',
    'help',
    'help-o',
    'home',
    'home-2',
    'home-2-o',
    'home-3',
    'home-3-o',
    'home-4',
    'home-4-o',
    'home-community',
    'home-dot',
    'home-dot-o',
    'home-line',
    'home-line-o',
    'home-o',
    'home-sm',
    'home-smile',
    'home-smile-o',
    'home-smline',
    'home-smline-o',
    'home-sm-o',
    'hotel',
    'hotel-o',
    'huohu',
    'IE',
    'image-text',
    'image-text-o',
    'import-export',
    'info',
    'info-o',
    'input',
    'input-o',
    'keyboard',
    'kinds',
    'last-page',
    'layout',
    'layout-o',
    'LightMode',
    'link',
    'link-off',
    'loader-fill',
    'loading',
    'loading1',
    'loading2',
    'location-off',
    'location-off-o',
    'location-on',
    'location-on-o',
    'lock',
    'lock-o',
    'lock-open',
    'logout',
    'loop',
    'magic',
    'magic-o',
    'mail',
    'mail-o',
    'male',
    'mic',
    'mic-none',
    'mic-off',
    'miniprogram',
    'mobile',
    'mobile-o',
    'moneybag',
    'moneybag-o',
    'more',
    'more-tag',
    'move',
    'move-round',
    'move-round-o',
    'music',
    'music-off',
    'my',
    'my-o',
    'near-me',
    'near-me-o',
    'not',
    'notice',
    'notice-active',
    'notice-active-o',
    'notice-o',
    'notice-off',
    'notice-off-o',
    'numcode',
    'order',
    'order-o',
    'paint',
    'paint-o',
    'palette',
    'palette-o',
    'pause',
    'pause-circle',
    'person',
    'person-add',
    'person-add-o',
    'person-o',
    'person-pin-circle',
    'person-pin-circle-o',
    'phone',
    'phone-call',
    'pic',
    'pic-o',
    'pin-drop',
    'pin-drop-o',
    'place',
    'place-o',
    'play-arrow',
    'play-circle',
    'play-circle-o',
    'popover',
    'popover-o',
    'present',
    'present-o',
    'progress',
    'qq',
    'qr-code-fill',
    'qr-code-line',
    'quill',
    'quill-o',
    'radio',
    'radiobox',
    'radiobox-o',
    'recharge',
    'recharge-o',
    'record',
    'record-o',
    'redo',
    'redpacket',
    'redpacket-o',
    'refresh',
    'repair',
    'repair-o',
    'repeat',
    'replay',
    'reply',
    'reply-all',
    'road-map',
    'road-map-o',
    'round',
    'round-angle',
    'round-angle-o',
    'round-arrow-line',
    'round-box',
    'safe',
    'safe-check',
    'safe-check-o',
    'safe-flash',
    'safe-flash-o',
    'safe-key',
    'safe-key-o',
    'safe-o',
    'save',
    'save-o',
    'scan',
    'scissors',
    'search',
    'search-line',
    'searchlist',
    'search-o',
    'search-sm',
    'service',
    'service-fill',
    'service-o',
    'set',
    'set-list',
    'set-o',
    'settings',
    'settings-o',
    'share',
    'share-line-o',
    'shengji',
    'shopping-cart',
    'shopping-cart-o',
    'show',
    'show-o',
    'shuffle',
    'sip',
    'sip-o',
    'skip-next',
    'skip-previous',
    'slack',
    'slack-square',
    'sort',
    'sort-order',
    'sound',
    'sponsor',
    'sponsor-o',
    'star',
    'star-half',
    'star-o',
    'stock',
    'stop',
    'store',
    'store-0',
    'store-2',
    'store-2-o',
    'sub-left',
    'sub-right',
    'subtitles',
    'subtitles-o',
    'sync-alt',
    'tag',
    'tag-o',
    'taobao',
    'terminal',
    'terminal-o',
    'thumb-down',
    'thumb-down-o',
    'thumb-up',
    'thumb-up-line',
    'thumb-up-line-o',
    'thumb-up-o',
    'ticket',
    'ticket-o',
    'time',
    'time-o',
    'timer',
    'title',
    'titles',
    'toggle',
    'toggle-o',
    'topbar',
    'translate',
    'tree',
    'Tt',
    'twiter',
    'cicon-community-o',
    'undo',
    'unfold-less',
    'unfold-more',
    'upstage',
    'upstage-o',
    'view-agenda',
    'view-array',
    'view-carousel',
    'view-column',
    'view-day',
    'view-headline',
    'view-list',
    'view-module',
    'view-quilt',
    'volume',
    'volume-off',
    'warn',
    'warn-o',
    'wechat-pay',
    'weibo-fill',
    'weibo-o',
    'weixin',
    'whatshot',
    'whatshot-o',
    'wifi',
    'wifi-off',
    'yamaxun',
    'zuoji'
];

//复制文本
function copyText(text) {
    let createInput = document.createElement('textarea');
    createInput.value = text;
    document.body.appendChild(createInput);
    createInput.select();
    document.execCommand('Copy');
    createInput.className = 'createInput';
    createInput.style.display = 'none';
};
</script>