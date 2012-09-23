# ytIframe
A flexible, plain javascript youtube video embedding script in 30 lines. You can embed as much videos as you like, each sharing one config or with one config for each video (to have different sizes et cetera).

## Preface
Please do not hesitate to inform me about downsides, change requests et cetera. It is no good idea to complain about my script by mumbling curse spells at your screen. Write a comment instead, so I know whats wrong and can fix the problem. 

## Dependencies
none

## Download
Currently ytIframe is available as version 1.0.2, which can be downloaded [here](https://github.com/mdix/ytIframe/zipball/ytIframe-1.0.2).

## Instruction
1. Include the script `iframe.min.js` to the bottom of your app: `<script type="text/javascript" src="iframe.min.js"></script>`

2. You can call YtIframe() by either passing a config object:
`YtIframe({
    https:      true,
    width:      560,
    height:     315,
    videoHash:  'w4yGJEU85wY',
    cookie:     true
})`
or by passing the videoHash directly as a string (and thus, using the defaults for size etc.): `YtIframe('w4yGJEU85wY')` You may also pass a full youtube url and ytIframe extracts the hash, like: `YtIframe('http://www.youtube.com/watch?v=VLnr3-tsJ0A')`. Note: This also works if you use the config object.

3. YtIframe() returns a DOM object (IFRAME) which then can be appended to other elements, like: `document.body.appendChild(YtIframe(config));` or `document.getElementById('myVideoDiv').appendChild(YtIframe(config));`

## Demo
See [http://github.dixpix.de/ytiframe/](http://github.dixpix.de/ytiframe/) for a live demo. To see the markup see [index.html](https://github.com/mdix/ytIframe/blob/master/index.html).

## Tests
ytIframe is tested with [Jasmine BDD testing framework](https://github.com/pivotal/jasmine) which is not included. You can download Jasmine [here](http://pivotal.github.com/jasmine/download.html) and place the contents in test/lib/. To run the tests, open test/specRunner.html in your browser.
