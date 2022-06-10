/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'edit': '&#xe95f;',
            'pencil-square': '&#xe95f;',
            'edit-outline': '&#xe977;',
            'pencil-square-outline': '&#xe977;',
            'bank': '&#xe90d;',
            'eye-slash-outline': '&#xe917;',
            'arrow-downward': '&#xe922;',
            'arrow-circle-up-outline': '&#xe939;',
            'arrow-circle-right-outline': '&#xe93b;',
            'arrow-circle-left-outline': '&#xe93d;',
            'global': '&#xe900;',
            'global-outline': '&#xe901;',
            'logout': '&#xe902;',
            'people': '&#xe903;',
            'people-outline': '&#xe904;',
            'user': '&#xe905;',
            'person': '&#xe905;',
            'user-outline': '&#xe906;',
            'person-outline': '&#xe906;',
            'menu-square': '&#xe907;',
            'menu': '&#xe908;',
            'chart-square': '&#xe909;',
            'chart-square-outline': '&#xe90a;',
            'dashboard-grid-outline': '&#xe90b;',
            'dashboard-grid': '&#xe90c;',
            'bank-outline': '&#xe90e;',
            'card': '&#xe90f;',
            'credit-card': '&#xe90f;',
            'card-outline': '&#xe910;',
            'credit-card-outline': '&#xe910;',
            'close': '&#xe911;',
            'x': '&#xe911;',
            'briefcase': '&#xe912;',
            'briefcase-outline': '&#xe913;',
            'eye': '&#xe914;',
            'eye-outline': '&#xe915;',
            'eye-slash': '&#xe916;',
            'message': '&#xe918;',
            'chat': '&#xe918;',
            'message-outline': '&#xe919;',
            'chat-outline': '&#xe919;',
            'retweet': '&#xe91a;',
            'repeat': '&#xe91b;',
            'heart': '&#xe91c;',
            'love': '&#xe91c;',
            'heart-outline': '&#xe91d;',
            'love-outline': '&#xe91d;',
            'arrow-right': '&#xe91e;',
            'arrow-forward': '&#xe91e;',
            'arrow-left': '&#xe91f;',
            'arrow-back': '&#xe91f;',
            'arrow-upward': '&#xe920;',
            'arrow-up': '&#xe921;',
            'arrow-down': '&#xe923;',
            'chevron-up': '&#xe924;',
            'chevron-down': '&#xe925;',
            'chevron-right': '&#xe926;',
            'chevron-forward': '&#xe926;',
            'chevron-left': '&#xe927;',
            'chevron-back': '&#xe927;',
            'chevron-square-up': '&#xe928;',
            'chevron-square-up-outline': '&#xe929;',
            'chevron-square-down': '&#xe92a;',
            'chevron-square-down-outline': '&#xe92b;',
            'chevron-square-right': '&#xe92c;',
            'chevron-square-forward': '&#xe92c;',
            'chevron-square-right-outline': '&#xe92d;',
            'chevron-square-forward-outline': '&#xe92d;',
            'chevron-square-left': '&#xe92e;',
            'chevron-square-back': '&#xe92e;',
            'chevron-square-left-outline': '&#xe92f;',
            'chevron-square-back-outline': '&#xe92f;',
            'chevron-circle-left': '&#xe930;',
            'chevron-circle-back': '&#xe930;',
            'chevron-circle-left-outline': '&#xe931;',
            'chevron-circle-back-outline': '&#xe931;',
            'chevron-circle-right': '&#xe932;',
            'chevron-circle-forward': '&#xe932;',
            'chevron-circle-right-outline': '&#xe933;',
            'chevron-circle-forward-outline': '&#xe933;',
            'chevron-circle-down': '&#xe934;',
            'chevron-circle-down-circle': '&#xe935;',
            'chevron-circle-up': '&#xe936;',
            'chevron-circle-up-outline': '&#xe937;',
            'arrow-circle-up': '&#xe938;',
            'arrow-circle-right': '&#xe93a;',
            'arrow-circle-forward': '&#xe93a;',
            'arrow-circle-left': '&#xe93c;',
            'arrow-circle-back': '&#xe93c;',
            'arrow-circle-down': '&#xe93e;',
            'arrow-circle-down-outline': '&#xe93f;',
            'export': '&#xe940;',
            'export-outline': '&#xe941;',
            'bell': '&#xe942;',
            'notification': '&#xe942;',
            'bell-outline': '&#xe943;',
            'notification-outline': '&#xe943;',
            'location': '&#xe944;',
            'pin': '&#xe944;',
            'location-outline': '&#xe945;',
            'pin-outline': '&#xe945;',
            'search-outline': '&#xe946;',
            'search': '&#xe947;',
            'bar-chart': '&#xe948;',
            'bar-chart-outline': '&#xe949;',
            'link': '&#xe94a;',
            'hyperlink': '&#xe94a;',
            'more-vertical': '&#xe94b;',
            'more-android': '&#xe94b;',
            'ellipsis-vertical': '&#xe94b;',
            'more-horizontal': '&#xe94c;',
            'more-ios': '&#xe94c;',
            'ellipsis-horizontal': '&#xe94c;',
            'more-vertical-outline': '&#xe94d;',
            'more-android-outline': '&#xe94d;',
            'ellipsis-vertical-outline': '&#xe94d;',
            'more-horizontal-outline': '&#xe94e;',
            'more-ios-outline': '&#xe94e;',
            'ellipsis-horizontal-outline': '&#xe94e;',
            'adjust-square-outline': '&#xe94f;',
            'adjust-square': '&#xe950;',
            'category-outline': '&#xe951;',
            'grid-outline': '&#xe951;',
            'category': '&#xe952;',
            'grid': '&#xe952;',
            'check': '&#xe953;',
            'tick': '&#xe953;',
            'sort': '&#xe954;',
            'sort-square': '&#xe955;',
            'close-square-outline': '&#xe956;',
            'x-square-outline': '&#xe956;',
            'close-square': '&#xe957;',
            'x-square': '&#xe957;',
            'check-square-outline': '&#xe958;',
            'tick-square-outline': '&#xe958;',
            'check-square': '&#xe959;',
            'tick-square': '&#xe959;',
            'minus-square-outline': '&#xe95a;',
            'minus-square': '&#xe95b;',
            'add-square-outline': '&#xe95c;',
            'plus-square-outline': '&#xe95c;',
            'add-square': '&#xe95d;',
            'plus-square': '&#xe95d;',
            'minus': '&#xe95e;',
            'add': '&#xe960;',
            'plus': '&#xe960;',
            'warning-triangle-outline': '&#xe961;',
            'warning-triangle': '&#xe962;',
            'question-circle': '&#xe963;',
            'question-circle-outline': '&#xe964;',
            'info-circle-outline': '&#xe965;',
            'warning-circle-outline': '&#xe966;',
            'info-circle': '&#xe967;',
            'warning-circle': '&#xe968;',
            'more-circle-outline': '&#xe969;',
            'more-circle': '&#xe96a;',
            'close-circle-outline': '&#xe96b;',
            'close-circle': '&#xe96c;',
            'x-circle': '&#xe96c;',
            'minus-circle-outline': '&#xe96d;',
            'minus-circle': '&#xe96e;',
            'add-circle-outline': '&#xe96f;',
            'plus-circle-outline': '&#xe96f;',
            'add-circle': '&#xe970;',
            'plus-circle': '&#xe970;',
            'check-circle-outline': '&#xe971;',
            'tick-circle-outline': '&#xe971;',
            'check-circle': '&#xe972;',
            'tick-circle': '&#xe972;',
            'more-square-horizontal-outline': '&#xe973;',
            'more-square-horizontal': '&#xe974;',
            'home-outline': '&#xe975;',
            'house-outline': '&#xe975;',
            'home': '&#xe976;',
            'house': '&#xe976;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/alpha-icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
