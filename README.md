# ytIframe
A flexible, plain javascript youtube video embedding script in less than 40 lines

## Dependencies
none

## Instruction
1. Include the script `iframe.min.js` to the bottom of your app:
`<script type="text/javascript" src="iframe.min.js"></script>`

2. You can call ytIframe() by either passing a config object:
`ytIframe({
    https:      true,
    width:      560,
    height:     315,
    videoLink:  'w4yGJEU85wY',
    cookie:     true
})`

OR

by passing the videoLink directly as a string (and thus, using the defaults for size etc.):
`ytIframe('w4yGJEU85wY')

3. ytIframe() returns a DOM object (iframe) which then can be appended to other elements, like:

`document.body.appendChild(ytIframe(config));` 

OR

`document.getElementById('myVideoDiv').appendChild(ytIframe(config));`