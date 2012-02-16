# ytIframe
A flexible, plain javascript youtube video embedding script in 30 lines. You can embed as much videos as you like, each sharing one config or with one config for each video (to have different sizes et cetera).

## Dependencies
none

## Instruction
1. Include the script `iframe.min.js` to the bottom of your app: `<script type="text/javascript" src="iframe.min.js"></script>`

2. You can call ytIframe() by either passing a config object:
`ytIframe({
    https:      true,
    width:      560,
    height:     315,
    videoHash:  'w4yGJEU85wY',
    cookie:     true
})`
or by passing the videoHash directly as a string (and thus, using the defaults for size etc.): `ytIframe('w4yGJEU85wY')` You may also pass a full youtube url and ytIframe extracts the hash.

3. ytIframe() returns a DOM object (iframe) which then can be appended to other elements, like: `document.body.appendChild(ytIframe(config));` or `document.getElementById('myVideoDiv').appendChild(ytIframe(config));`

See index.html for four examples, two by passing a string and two by passing a config object.
