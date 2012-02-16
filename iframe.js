var YtIframe = (function() {
"use strict";
    var YtIframe = function (config) {
        // check if str or obj given, set default values if values are missing
        if ("undefined" === typeof config)
            return console.log('Please give video string or config object!');
        if ('string' === typeof config) {
            config  = {videoHash: config};
        } else if ('object' === typeof config && "undefined" === config.videoHash || '' === config.videoHash)
            return console.log('Please add a videohash property to your config object & give a youtube video hash');
        config.https  = config.https  || false;
        config.width  = config.width  || 560;
        config.height = config.height || 315;
        config.cookie = config.cookie || true;
        // build src attribute for iframe, regarding the config options
        var videoSource = '';
        videoSource += (config.https === false) ? 'http://' : 'https://';
        videoSource += (config.cookie === false) ? 'www.youtube-nocookie.com/embed/' : 'www.youtube.com/embed/';
        if (config.videoHash.indexOf('www.youtube') !== -1)
            config.videoHash = config.videoHash.split('v=')[1].split('&')[0];
        videoSource += config.videoHash;
        // create element and populate it with attributes regarding the config options
        var iframe = document.createElement('iframe');
        iframe.setAttribute('width', parseInt(config.width, 10));
        iframe.setAttribute('height', parseInt(config.height, 10));
        iframe.setAttribute('src', videoSource);
        iframe.setAttribute('frameBorder', 0);
        iframe.setAttribute('allowfullscreen', '');
        return iframe;
    };
    return function (config) {
        return new YtIframe(config);
    };
})();
