const proxy = 'PROXY proxy2-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443; PROXY proxy3-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443;';
const direct = "DIRECT";

function FindProxyForURL(url, host) {
    // Check if the URL is blocked by the organization firewall
    if (isURLBlocked(url, host)) {
        // If blocked, use the proxy server
        return proxy;
    } else {
        // If not blocked, use direct connection
        return "DIRECT";
    }
}

function isURLBlocked(url, host) {
    // Replace the following IP addresses with the IP addresses of your organization firewall
    var firewallIPs = ["131.39.121.1"];
    var blocked = false;

    // Check if the host is in the same subnet as the firewall
    for (var i = 0; i < firewallIPs.length; i++) {
        var firewallSubnet = firewallIPs[i].substr(0, firewallIPs[i].lastIndexOf(".")) + ".";
        if (host.substr(0, firewallSubnet.length) == firewallSubnet) {
            blocked = true;
            break;
        }
    }

    return blocked;
}
