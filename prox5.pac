/*
Optimized proxy script by CqueJuan I. Leon Guerrero
Refer to:
    https://learn.microsoft.com/en-us/troubleshoot/developer/browsers/connectivity-navigation/optimize-pac-performance
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
*/
const proxy = 'PROXY proxy2-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443; PROXY proxy3-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443; DIRECT';
//Add hosts to bypass proxy.
const bypassList = [
    "*.edu",
    "*.gov",
    "*.mil",
    "airforce.com",
    "menlosecurity.com",
    "microsoft.com",
    "apple.com",
    "azure.net",
    "citi.com",
    "comptia.org",
    "cloudflare.com",
    "facebook.com",
    "github.com",
    "github.io",
    "google.com",
    "live.com",
    "mfdonut.com",
    "microsoft.com",
    "microsoft.us",
    "microsoftonline.us",
    "msauth.net",
    "msauthimages.net",
    "msecnd.net",
    "msft.net",
    "office365.us", // excel.dod.online.office365.us
    "office.net",
    "spotify.com",
    "usaa.com",
    "windows.us",
    "windows.net"
];
///area52.afnoapps.usaf.mil
const bypassProxyTLDs = [

]
function FindProxyForURL(url, host){
    url = url.toLowerCase();
    host = host.toLowerCase();
    if(isPlainHostName(host)){
        return "DIRECT";
    }
    for(i = 0; i < bypassList.length; i++){
        if(shExpMatch(host, bypassList[i])){
            return "DIRECT";
        }
    }
    if(isInNet(host, "131.39.*"){
        return "DIRECT";
    }
    try{
        return proxy;
    }catch{
        alert(`${host} = ${dnsResolve(host)}`)
        alert("Error: Failed to use proxies.")
    }
}
