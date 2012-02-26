describe('YtIframe instantiated with a string', function() {
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

    it('that contains the youtube embed link and the passed video hash', function() {
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
})