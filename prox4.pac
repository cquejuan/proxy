const proxy = 'PROXY proxy2-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443; PROXY proxy3-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443; DIRECT';
const RegexArray = [
  /google\.com$/,
  /(windowsupdate|update|delivery\.mp)\.microsoft\.com$/,
  /windowsupdate\.com$/,
  /tsfe\.trafficshaping\.dsp\.mp\.microsoft\.com$/,
  /download\.microsoft\.com$/,
  /wustat\.microsoft\.com$/,
  /media-(discovery|assetcatalog)\.microsoft\.com$/,
  /store-images\.(s-)?microsoft\.com$/,
  /(itunes|api\.apps)\.apple\.com$/,
  /(swcdn|swdownload|swquery)\.apple\.com$/,
  /(ssl|gsa|smoot|ls|configuration|gc|ess|gsas|identity|smp-device-content|swdist)\.apple\.com$/,
  /mzstatic\.com$/,
  /(icloud|aus4|aus5|self-repair)\.apple\.com$/,
  /(mocos|ciscowebex)\.com$/,
  /(gotomeeting|gotowebinar|gototraining|gotomypc|gotoassist)\.com$/,
  /(skype|freeconferencecall|join\.me|anymeeting|clickwebinar|readytalk|on24|omnovia)\.com$/,
  /(onelogin|okta|oktapreview|oktacdn|pingidentity|pingone)\.com$/,
  /(ssl|netflix|nflximg|nflximg\.edgesuite\.net)\.net$/,
  /(192\.173\.64|192\.173\.96|198\.45\.48|216\.21\.170|185\.2|185\.9)\.([0-9]+\.){2}[0-9]+$/,
  /(lululemon|ticketmaster|wayfair)\.com$/,
  /(g|cdn|ocsa|ocsredir|ocws|odc|cdn\.odc|ols|pf\.pipe\.aria|mscrl|go|r\.office|activation\.sls|statics\.teams)\.microsoft(online-p)?\.com$/,
  /(login|nexus|loginex|lpcres|static\.sharepointonline|activity|wns)\.windows\.com$/,
  /(compliance|config|admin\.exchange|od|portal|reports|security|webmail)\.apps\.mil$/,
  /(spoprod-a|oneclient\.sfx|officecdn\.edgesuite\.net|msecnd)\.net$/,
  /(mlccdnprod|otelrules)\.azureedge\.net$/,
  /(accounts\.accesscontrol|mlccdn\.blob|enterpriseregistration|graph|login|keydelivery\.mediaservices|streaming\.mediaservices)\.windows\.net$/,
  /(auth\.gfx|assets\.onestore|ecn\.dev\.virtualearth)\.ms$/,
  /(policykeyservice\.dc\.ad\.msft|msauth|msftauth)\.(net|images\.net)$/,
  /(dod-graph|dod\.teams|graph\.microsoftazure|login\.microsoftonline|msauthimages|msftauthimages)\.us$/,
  /(attachments-dod|office365|autodiscover-s-dod|webshell\.dodsuite|dod\.loki|dod\.online\.office365|outlook-dod|protection\.office365|sharepoint-mil|online\.dod\.skypeforbusiness)\.us$/,
];

function FindProxyForURL(url, host) {
    // Define the domain patterns to match
    url = url.toLowerCase();
    host = host.toLowerCase();
    // If host is a plain hostname, use DIRECT
    if (isPlainHostName(host)) {
        return "DIRECT";
    }

    // If the host matches a specific pattern, use DIRECT
    if (shExpMatch(host, "*\.area52\.afnoapps\.usaf\.mil")) {
        return "DIRECT";
    }
    // Check if the host matches any of the domain patterns
    for (let i = 0; i < RegexArray.length; i++) {
        if (RegexArray[i].test(host)) {
            // If the host matches, return a direct connection
            return "DIRECT";
        }
    }
    // Resolve hostname to IP address
    let hostIP = dnsResolve(host);
    if (!hostIP) {
        hostIP = host;
    }

    // If the IP address falls within a specific range, use DIRECT
    if (shExpMatch(hostIP, "^131\.39\.[0-9]{3}\.[0-9]{3}$")) {
        return "DIRECT";
    }

    // If the host doesn't match any of the domain patterns, return a proxy server
    return proxy
}
