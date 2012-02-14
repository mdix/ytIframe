var ytIframe = (function() {
    var ytIframe = function (config) {
        if (undefined == typeof config) {
            return console.log('Please give video string or config object!');
        }
        if ('string' == typeof config) {
            var url = config;
            config  = {};
            config.videoLink = url;
        } else if ('object' == typeof config && undefined === config.videoLink || '' === config.videoLink) {
            return console.log('Please add a videolink property to your config object & give a youtube video hash');
        }
        if (!config.hasOwnProperty('https'))
            config.https  = false;
        if (!config.hasOwnProperty('width'))
            config.width  = 560;
        if (!config.hasOwnProperty('height'))
            config.height = 315;
        if (!config.hasOwnProperty('cookie'))
            config.cookie = true;
        
        var videoSource = '';
        (config.https === false)  ? videoSource += 'http://' : videoSource += 'https://';
        (config.cookie === false) ? videoSource += 'www.youtube-nocookie.com/embed/' : videoSource += 'www.youtube.com/embed/';
        videoSource += config.videoLink;
        
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