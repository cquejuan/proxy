/*
Optimized proxy script by CqueJuan I. Leon Guerrero
Refer to:
    https://learn.microsoft.com/en-us/troubleshoot/developer/browsers/connectivity-navigation/optimize-pac-performance
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
*/
const proxy = 'PROXY proxy2-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443; PROXY proxy3-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443; DIRECT';
//Add hosts to bypass proxy.
const bypassProxyHosts = [
    "menlosecurity.com",
    "microsoft.com",
    "apple.com",
    "citi.com",
    "comptia.org",
    "cloudflare.com",
    "facebook.com",
    "github.com",
    "github.io",
    "google.com",
    "mfdonut.com",
    "microsoft.com",
    "microsoft.us",
    "microsoftonline.us",
    "office365.us", // excel.dod.online.office365.us
    "spotify.com",
    "usaa.com",
    "wgu.edu",
];
const bypassProxyTLDs = [
    "*.edu",
    "*.gov",
    "*.mil"
]
function FindProxyForURL(url, host){
    url = url.toLowerCase();
    host = host.toLowerCase();
    if(isPlainHostName(host)){
        return "DIRECT";
        alert('true plain')
    }
    if(shExpMatch(hostIP, "131.39.*"){
        return "DIRECT";
        alert('true ip')
    }
    if(shExpMatch(host, "*.area52.afnoapps.usaf.mil")){
        return "DIRECT";
        alert('true host')
    }
    for(i = 0; i < bypassProxyTLDs.length; i++){
        if(shExpMatch(host, bypassProxyTLDs[i])){
            return "DIRECT";
            alert('true tld')
        }
    }
    for(i = 0; i < bypassProxyHosts.length; i++){
        if(dnsDomainIs(host, bypassProxyHosts[i])){
            return "DIRECT";
            alert('true bypasshost')
        }
    }
    try{
        alert('use proxy else')
        return proxy;
    }catch{
        alert(`${host} = ${dnsResolve(host)}`)
        alert("Error: Failed to use proxies.")
    }
}
