describe('YtIframe instantiated with a videoHash string', function() {
    var videoHash = 'w4yGJEU85wY';
    var iframe = YtIframe(videoHash);

    it('returns an IFRAME node object', function() {
        expect(iframe.nodeName).toEqual('IFRAME');
    });

    it('which has a width property', function() {
        expect(iframe.hasAttribute('width')).toBeTruthy();
    });

    it('where with is the default value of 560', function() {
        expect(iframe.width).toEqual('560');
    });

    it('which has a height property', function() {
        expect(iframe.hasAttribute('height')).toBeTruthy();
    });

    it('where height is the default value of 315', function() {
        expect(iframe.height).toEqual('315');
    });

    it('which has a src property', function() {
        expect(iframe.hasAttribute('src')).toBeTruthy();
    });

    it('that consists of the youtube embed link and the passed video hash', function() {
        expect(iframe.src).toMatch('http://www.youtube.com/embed/' + videoHash);
    })

    it('which has a frameBorder property', function() {
        expect(iframe.hasAttribute('frameBorder')).toBeTruthy();
    });

    it('that is set to 0', function() {
        expect(iframe.frameBorder).toEqual('0');
    });

    it('which has a allowFullScreen property', function() {
        expect(iframe.hasAttribute('allowFullScreen')).toBeTruthy();
    });

    it('that is a empty string', function() {
        expect(iframe.getAttribute('allowFullScreen')).toEqual("");
    });
});

describe('YtIframe instantiated with a full url string', function() {
    var videoURL  = 'http://www.youtube.com/watch?v=pqaARDsiJv4';
    var videoHash = 'pqaARDsiJv4';
    var iframe    = YtIframe(videoURL);

    it('returns an IFRAME node object', function() {
        expect(iframe.nodeName).toEqual('IFRAME');
    });

    it('which has a width property', function() {
        expect(iframe.hasAttribute('width')).toBeTruthy();
    });

    it('where with is the default value of 560', function() {
        expect(iframe.width).toEqual('560');
    });

    it('which has a height property', function() {
        expect(iframe.hasAttribute('height')).toBeTruthy();
    });

    it('where height is the default value of 315', function() {
        expect(iframe.height).toEqual('315');
    });

    it('which has a src property', function() {
        expect(iframe.hasAttribute('src')).toBeTruthy();
    });

    it('that consists of the youtube embed link and the passed video hash', function() {
        expect(iframe.src).toMatch('http://www.youtube.com/embed/' + videoHash);
    })

    it('which has a frameBorder property', function() {
        expect(iframe.hasAttribute('frameBorder')).toBeTruthy();
    });

    it('that is set to 0', function() {
        expect(iframe.frameBorder).toEqual('0');
    });

    it('which has a allowFullScreen property', function() {
        expect(iframe.hasAttribute('allowFullScreen')).toBeTruthy();
    });

    it('that is a empty string', function() {
        expect(iframe.getAttribute('allowFullScreen')).toEqual("");
    });
});

describe('ytIframe instantiated with a config object', function() {
    var config = { https: true, width: 333, height: 666, videoHash: 'w4yGJEU85wY', cookie: false };
    var iframe = YtIframe(config);

    it('returns an IFRAME node object', function() {
        expect(iframe.nodeName).toEqual('IFRAME');
    });

    it('which has a width property', function() {
        expect(iframe.hasAttribute('width')).toBeTruthy();
    });

    it('where with is the custom value 333', function() {
        expect(iframe.width).toEqual('333');
    });

    it('which has a height property', function() {
        expect(iframe.hasAttribute('height')).toBeTruthy();
    });

    it('where height is the custom value of 666', function() {
        expect(iframe.height).toEqual('666');
    });

    it('which has a src property', function() {
        expect(iframe.hasAttribute('src')).toBeTruthy();
    });

    it('that contains "https"', function() {
        expect(iframe.src).toMatch('https');
    });

    it('that contains "youtube-nocookie"', function() {
        expect(iframe.src).toMatch('youtube-nocookie');
    });

    it('that contains "embed/" & the video hash', function() {
        expect(iframe.src).toMatch('embed/' + config.videoHash);
    });

    it('which has a frameBorder property', function() {
        expect(iframe.hasAttribute('frameBorder')).toBeTruthy();
    });

    it('that is set to 0', function() {
        expect(iframe.frameBorder).toEqual('0');
    });

    it('which has a allowFullScreen property', function() {
        expect(iframe.hasAttribute('allowFullScreen')).toBeTruthy();
    });

    it('that is a empty string', function() {
        expect(iframe.getAttribute('allowFullScreen')).toEqual("");
    });
});

