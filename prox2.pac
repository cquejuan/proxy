/*
Optimized proxy script by CqueJuan I. Leon Guerrero
Refer to:
    https://learn.microsoft.com/en-us/troubleshoot/developer/browsers/connectivity-navigation/optimize-pac-performance
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
*/

// Proxy server configuration
const proxy = [
    'PROXY proxy2-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443',
    'PROXY proxy3-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443',
    'DIRECT'
];

// Add hosts to bypass proxy
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
    "wgu.edu"
];

// Add top-level domains (TLDs) to bypass proxy
const bypassProxyTLDs = [
    "*.edu",
    "*.gov",
    "*.mil"
];

// Function to find the proxy for a given URL
function FindProxyForURL(url, host) {
    url = url.toLowerCase();
    host = host.toLowerCase();

    // If host is a plain hostname, use DIRECT
    if (isPlainHostName(host)) {
        return "DIRECT";
    }

    // If the host matches a specific pattern, use DIRECT
    if (shExpMatch(host, "*.area52.afnoapps.usaf.mil")) {
        return "DIRECT";
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

    // If the host is an IP address and not resolvable, use proxy
    if (!hostIP) {
        return proxy;
    }

    // Check if the host matches a bypass host
    for (let i = 0; i < bypassProxyHosts.length; i++) {
        if (dnsDomainIs(host, bypassProxyHosts[i])) {
            return "DIRECT";
        }
    }

    // Check if the host matches a bypass TLD
    for (let i = 0; i < bypassProxyTLDs.length; i++) {
        if (shExpMatch(host, bypassProxyTLDs[i])) {
            return "DIRECT";
        }
    }

    // Return proxy configuration
    return proxy;
}

// Error handling code
try {
    FindProxyForURL();
} catch (error) {
    alert(`Error: Failed to use proxies. ${error.message}`);
}
