const proxy = 'PROXY proxy2-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443; PROXY proxy3-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443; DIRECT';
// Define the domain patterns to match
const domainPatterns = [
    /^anymeeting\.com$/,
    /^apple\.com$/,
    /^azure\.net$/,
    /^cisco(?:webex)?\.com$/,
    /^clickwebinar\.com$/,
    /^cortana\.ai$/,
    /^freeconferencecall\.com$/,
    /^google(?:\.com|\.co)$/,
    /^join\.me$/,
    /^live\.com$/,
    /^lululemon\.com$/,
    /^microsoft(?:online)?\.com$/,
    /^microsoft\.us$/,
    /^microsoft\.com$/,
    /^mozilla\.org$/,
    /^netflix\.com$/,
    /^nflximg\.com$/,
    /^nflximg\.net$/,
    /^nflxvideo\.net$/,
    /^nflxext\.com$/,
    /^office365\.us$/,
    /^okta(?:preview)?\.com$/,
    /^oktacdn\.com$/,
    /^onelogin\.com$/,
    /^omnovia\.com$/,
    /^on24\.com$/,
    /^ping(?:identity|one)\.com$/,
    /^readytalk\.com$/,
    /^skype\.com$/,
    /^ssl\.gstatic\.com$/,
    /^ticketmaster\.com$/,
    /^update\.microsoft\.com$/,
    /^wayfair\.com$/,
    /^windowsupdate\.microsoft\.com$/
];
const exemptTLD = [
    "*.edu",
    "*.gov",
    "*.mil"
]
function FindProxyForURL(url, host) {
    url = url.toLowerCase();
    host = host.toLowerCase();
    for(i = 0; i < exemptTLD.length; i++){
        if(shExpMatch(host, bypassProxyTLDs[i])){
            return "DIRECT";
        }
    }
    //if(shExpMatch(hostIP, "131.39.*"){
    //    return "DIRECT";
    //}
    // Check if the host matches any of the domain patterns
    for (let i = 0; i < domainPatterns.length; i++) {
        if (domainPatterns[i].test(host)) {
            // If the host matches, return a direct connection
            return "DIRECT";
        }
    }

    // If the host doesn't match any of the domain patterns, return a proxy server
    return proxy;
}
