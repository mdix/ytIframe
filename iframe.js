var ytIframe = (function() {
    var ytIframe = function (config) {
        // check if str or obj given, set default values if values are missing
        if ("undefined" == typeof config)
            return console.log('Please give video string or config object!');
        if ('string' == typeof config) {
            var url = config;
            config  = {videoHash: url};
        } else if ('object' == typeof config && "undefined" === config.videoHash || '' === config.videoHash) {
            return console.log('Please add a videohash property to your config object & give a youtube video hash');
        }
        if (!config.hasOwnProperty('https'))
            config.https  = false;
        if (!config.hasOwnProperty('width'))
            config.width  = 560;
        if (!config.hasOwnProperty('height'))
            config.height = 315;
        if (!config.hasOwnProperty('cookie'))
            config.cookie = true;
        // build src attribute for iframe, regarding the config options
        var videoSource = '';
        (config.https === false)  ? videoSource += 'http://' : videoSource += 'https://';
        (config.cookie === false) ? videoSource += 'www.youtube-nocookie.com/embed/' : videoSource += 'www.youtube.com/embed/';
        if (config.videoHash.indexOf('www.youtube') !== -1)
            config.videoHash = config.videoHash.split('v=')[1].split('&')[0];
        videoSource += config.videoHash;
        // create element and populate it with attributes regarding the config options
        var iframe = document.createElement('iframe');
        iframe.setAttribute('width', parseInt(config.width));
        iframe.setAttribute('height', parseInt(config.height));
        iframe.setAttribute('src', videoSource);
        iframe.setAttribute('frameborder', 0);
        iframe.setAttribute('allowfullscreen', '');
        return iframe;
    }
    return function (config) {
        return new ytIframe(config);
    }
})();
