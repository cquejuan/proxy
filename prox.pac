// Mozilla Doc: https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file#domain
// Microsoft Doc: https://learn.microsoft.com/en-us/troubleshoot/developer/browsers/connectivity-navigation/optimize-pac-performance
/*
Optimized proxy script by CqueJuan I. Leon Guerrero
Assisted revisions by NIPRGPT.

Original Proxy Vs Modified:
    -Uses binary search to search speed
    -Added all links from the original Menlosecurity script.
    -NIPRGPT used as reference for optimization

Reference guides:
    https://learn.microsoft.com/en-us/troubleshoot/developer/browsers/connectivity-navigation/optimize-pac-performance
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
*/


function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    if(isPlainHostName(host)){
        return direct;
    }
        
    
    if(shExpMatch(host, "*.area52.afnoapps.usaf.mil")){
        return direct;
    }
        

    parts = host.split('.')
    TLD = parts.pop()
    SLD = parts.pop()
    SUB = parts.join(".")
    var hostIP;
    var isIpV4Addr = /^(\d+.){3}\d+$/;
    if (isIpV4Addr.test(host))
        hostIP = host;
    else
        hostIP = dnsResolve(host);

    if(hostIP==0)
        return proxy;

    if(isInNet(hostIP, "181.39.*"))
        return direct;

    for(i = 0; i < whitelistTld.length; i++){
        if(TLD == whitelistTld[i]){
            return direct
        }
    }

    index = binarySearch(whitelist, SLD)
    if(index !== -1){
        item = whitelist[index]
        if(item.y == "" || item.y == "*" || item.y == SLD){
            for(j = 0; j < item.z.length; j++){
                if(item.z[j] == TLD){
                    for(k = 0; item.x.length; k++){
                        if(itm.x[k] == "*" || itm.x[k] == "" || itm.x[k] == SUB){
                            return direct
                        }
                    }
                }
            }
        }
    }

    return proxy;

}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    round = 0
    while (left <= right) {
        round++
        const mid = Math.floor((left + right) / 2);
        const guess = arr[mid].y;
        
        if (guess === target) {
        return mid;
        }

        if (guess.localeCompare(target) > 0) {
        right = mid - 1;
        } else {
        left = mid + 1;
        }
        //console.log(`Round ${round} Left ${left} Right ${right}`)
    }

    return -1;
}

const proxy = 'PROXY proxy2-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443; PROXY proxy3-1814417d1bc33df81c12bc1f70b3bde3.menlosecurity.com:443;';
const direct = "DIRECT";
//Top-Level Domains ONLY
const whitelistTld = [
    "gov",
    "mil",
    "edu"
]
//IMPORTANT: Must be in alphabetical order!!!!!!
//IMPORTANT: Must be in alphabetical order!!!!!!
//IMPORTANT: Must be in alphabetical order!!!!!!
const whitelist =  [
    {
        "x": [
            "*"
        ],
        "y": "0x4d",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "2020insight",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "4dxos",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "6connex",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "761link",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "82fss",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "a8silo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "aadrm",
        "z": [
            "com",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "aardvarktactical",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "acadisonline",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "acc-del",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "acc-dl",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "acca2datalab",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "accamic",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "accesscommander",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "accountingtoday",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "accurateshooter",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "accurint",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "acms",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "acompli",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "acqdocs",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "acqnotes",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "actiontarget",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "active911",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "actovos",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "adjust",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "adobe",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "adobeconnect",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "adobedtm",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "adobelogin",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "adobeoobe",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "adobesc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "adp",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "advcloud",
        "z": [
            "it"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "aecom",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "aero",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "aerospace",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afcbmplus",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afcyber",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afcyp",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "affirst",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afge916",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afmuseum",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afoutdoors",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afpaces",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afrldle",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afsc",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afsc-ce",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afsldp",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afsoc-beddown-eis",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "afsv",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "agi",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "agicom",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "aimphotonics",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "airdmt",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "airforcemag",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "airforceweapons",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "airgas-rd",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "akadns",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "akafms",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "akamai",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "akamaihd",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "akamaized",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "akima",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "alienvault",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "alionscience",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "allaccesspass",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "allisonhouse",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "alohaenterprise",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "altusfss",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "amazon",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "amazonaws",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "amazonaws-us-gov",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "amazoncognito",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "amazontrust",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "amazonworkspaces",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "amcaccelmr",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "amentum",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "americanbanker",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ammogarand",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ammunitiondepot",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "amsadobe",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "amtrak",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "analyticshq",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "angstrongbonds",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "animoto",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "anymeeting",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "apan",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "apogeeengineering",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "appdynamics",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "appex-rf",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "apphb",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "apple",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "applicationinsights",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "appliedballisticsllc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "appsplatform",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "appsplatformportals",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "aptrinsic",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "arcgis",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "arcgisonline",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "arinc",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "arincdirect",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "armyfamilywebportal",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "articulate",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "articulateusercontent",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "asp-usa",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "aspnetcdn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "atars",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "atdmt",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "atlassian",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "att",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "attackdefense",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "attackdefensecloudlabs",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "authentic8",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "autodesk",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "avcom-obsolescence",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "aviationid",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "avlog",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "azure",
        "z": [
            "com",
            "us",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "azure-apihub",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "azure-apim",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "azureedge",
        "z": [
            "net",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "azurefd",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "azurerms",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "azurewebsites",
        "z": [
            "us",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "b1tssc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "b21eis",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "b2clogin",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "baesystems",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bah",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ballaerospace",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "barracudanetworks",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "basecheckin",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "battelle",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bbcollab",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bbcollabcloud",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bbn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bbt",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bechtel",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "benchmade",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bentley",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bestwestern",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bgiegb",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bing",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bizcommservices",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bizjournals",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "blackboard",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "blackboardcdn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bluejeans",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bluekai",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "blueskybroadcast",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bluestaq",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bluestreaktt",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bmc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "boeing",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "boeingservices",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "boltdns",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "boozallencsn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "botframework",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "box",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "boxcloud",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bravais",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "brightcove",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "brightcovecdn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "broadcom",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "broadridge",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "brunoshooters",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bwfed",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "bylight",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "c-130jjug",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "c17ts",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "c2il",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "c2ti",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "caci",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "caemilusa",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "calendarwiz",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "calendly",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cammo-cedims",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "canva",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "capitaliq",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "caterease",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cavaf",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cavok",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cdn-apple",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ce",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "centurylink",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "centurylink-gsa",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cerego",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cergo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cesium",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cgifederal",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cheyenne-dev",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "choicehotels",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "circadence",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cisco",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ciscospark",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ciscowebex",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "citidirect",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "citigroup",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cititravel",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "citrix",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "citrixonline",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "clamav",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "clickwebinar",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cloudalrs",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cloudapp",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cloudappsecurity",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cloudflare",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cloudfront",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cmcpro",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cognos-web",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "colsa",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "comcast",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "company-target",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "compasslake",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "concursolutions",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "connections-wargaming",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "connectsolutions",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "contentraven",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "contentsquare",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cosocloud",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "costpointfoundations",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "countryinns",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "coursera",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "csod",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ctbto",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cti-crm",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cybbh",
        "z": [
            "space"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cyberfeds",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "cyberforce",
        "z": [
            "site"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "dafdto",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "datamaxx",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "dataminr",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "dcscorp",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "decisionlens",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "dell",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "deloitte",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "deloittenet",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "deloitteresources",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "delta",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "deltekenterprise",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "demdex",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "devlnk",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "di2e",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "digicert",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "dla-warfighters",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "dmon2",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "dod-energy-resilience",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "dodcbm",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "dodlodging",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "dodpke",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "doerer",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "domaintools",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "drgok",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "duckduckgo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "duo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "duofederal",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "duosecurity",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "dvidshub",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "echosign",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "edgefcs",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "edgesuite",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "edrugtest",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "egginc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "elastic",
        "z": [
            "co"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "elasticbeanstalk",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "emap-web",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "emc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "emergingthreatspro",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "emscharts",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "enginetracking",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "enr",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ensco",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "entrust",
        "z": [
            "net",
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "eod-gear",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "esri",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "etims-web",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "eum-appdynamics",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "eventfinity",
        "z": [
            "co"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "everesttech",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "exlibrisgroup",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "exostar",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "exploit-db",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ey",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ezinearticles",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "f15fightercat",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "f5",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "facebook",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "fedex",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "fedhive",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "fedviewhelpdesk",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "filestackapi",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "filestackcontent",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "fireeye",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "firefox",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "flashtalking",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "flightaware",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "flightsafety",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "flightstats",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "flurry",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "flytap",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "force",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "foreflight",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "franklincovey",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "freeconferencecall",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "fuelstraining",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "fusioncharts",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ga",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "galvanize",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gccs-j",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gdgps",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gdit",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "geotrust",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "get-integrated",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "getlatlong",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "getmicrosoftkey",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ggpht",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "github",
        "z": [
            "com",
            "io"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "givecfc",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "globalordnance",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "globalsign",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "glock",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gmail",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gmehair",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gmre-inc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "goamerigeo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "goang",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "goarmyed",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "golattitude",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "golearnportal",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "goninjio",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "google",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "google-analytics",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "googleapis",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "googletagmanager",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "googleusercontent",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gorpm",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gotoassist",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gotomeeting",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gotomypc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gototraining",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gotowebinar",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "govtribe",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gpilearnplus",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "grableservices",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "graspdata",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "graybar",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gstatic",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gtg-f",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "gvt1",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "hackthebox",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "harborfreight",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "harris",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "hawkeyecloud",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "healthequity",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "helpshift",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "hiexpress",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "hii-tsd",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "hockeyapp",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "holidayinn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "holmcenter",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "holocard",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "hpe",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "htb-cloud",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "huddle",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "hughesnet",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "hurrevac",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "hurricanemapping",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "hxfivelaunch",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "hyatt",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "I-3",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "i-bugs",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ibm",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "icloud",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "identrust",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ihg",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ihs",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "iil",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "innovasi",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "instructure",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "intercontinental",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "iowanationalguard",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ipchicken",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ipsonline",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "iron-clad",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "isportsman",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "isso",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "itgonline",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "itility",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "jacobs",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "jacobstechnology",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "jaust",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "jbleforcesupport",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "jhana",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "jlg",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "jmemproducts",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "joingotomeeting",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "joinhandshake",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "josce",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "jperickson",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "jpmorgan",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "jt4llc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "juniper",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "kaltura",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "kampyle",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "kc-46a-mob5",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "keeptrack",
        "z": [
            "space"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "kesselrun",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "key",
        "z": [
            "aero"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "knowblyapp",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "kyloc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "l-3com",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "l3harris",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "l3t",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "langhosting",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lattus",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "launchdarkly",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lcmp",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "leidos",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "leidoseemg",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "letgo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "letsencrypt",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lexis",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lexisnexis",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "linequest",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "linkedin",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "linquest",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lisc-ehd",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "litmos",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "live",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "liveclicks",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "livenation",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "llnw",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "llnwd",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lmaeronautics",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lmco",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "localytics",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lockheedmartin",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lodging",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "loganalytics",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "logisticshealth",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "logmeinrescue",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "logtool",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lowes",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lp4fb",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ltrswcplm",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lululemon",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "lync",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "maas360",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "maersk",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "managementconcepts",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "manta",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mantech",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mapbox",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "marketo",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "marlboro",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "marriott",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mathworks",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "matrixgames",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "matterport",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mcafee",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mcas-gov",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mcchordairmuseum",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mddv365",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "medallia",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "meetup",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "meitechinc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "memberplanet",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "menlosecurity",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "merc-mercer",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "metrahub",
        "z": [
            "com",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mfdonut",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "microfocus",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "microsemi",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "microsoft",
        "z": [
            "com",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "microsoft365",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "microsoftazure",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "microsoftazuread-sso",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "microsoftcloud",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "microsoftonline",
        "z": [
            "com",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "microsoftonline-p",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "microsoftstore",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "microsoftstream",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "midsouthshooterssupply",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mimecast",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mitchell1",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mitre",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mktoresp",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mmlv2",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "monday",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "monstergovt",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mossberg",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mountainhomeafbairspaceeis",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mozilla",
        "z": [
            "org",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msappproxy",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msauth",
        "z": [
            "net",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msauthimages",
        "z": [
            "net",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msecnd",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msedge",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msft",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msftauth",
        "z": [
            "net",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msftauthimages",
        "z": [
            "net",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msftconnecttest",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msftidentity",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msidentity",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msocdn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "msocsp",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mtmrecognition",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mtsi-va",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "muypsn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "my4dx",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "myflorida",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mygo1",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mykajabi",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "myngc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mypsn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "myuhc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "myworkday",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "mzstatic",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nai",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nas-llc",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nasicgxkaws",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "natchezss",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nationaloshafoundation",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nato",
        "z": [
            "int"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "navyfederal",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ncontext",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nddspectrum",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "netflix",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "networkfleet",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "newark",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "newrelic",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nexgen-ce",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nflxext",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nflximg",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nflxvideo",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nice-incontact",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "niceincontact",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ninjio",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "njevitytogo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "noblis",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "northropgrumman",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nou-systems",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nr-data",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ns2cloud",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nttrairspaceoptimization",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nuget",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "nursys",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "o365weve",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "oaspapps",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "oauth",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ocivcn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "odysseyconsult",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "oecif",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "office",
        "z": [
            "net",
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "office365",
        "z": [
            "us",
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "office365-net",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "okta",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "oktacdn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "oktapreview",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "omniroot",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "omnovia",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "omtrdc",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "on24",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ondemand",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "onedrive",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "oneil",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "onelogin",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "onenetwork",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "onenote",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "onmicrosoft",
        "z": [
            "com",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "onshape",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "onsolve",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ontic",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "optimizely",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "optimum",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "opusworks",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "oracle",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "oraclecloud",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "oraclegovcloud",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "oracleoutsourcing",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "orc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "oshatrain",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ossys",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "otco",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "outlook",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "outlookmobile",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "oversightsystems",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "paloaltonetworks",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "parsons",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "pdi2022",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "pearsonvue",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "pegagovcloud",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "percipio",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "perspecta",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "pewinternet",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "pexmain",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "phonefactor",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "pingidentity",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "pingone",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "planeenglishsim",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "plateau",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "platt",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "pmw240",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "powerapps",
        "z": [
            "com",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "powerautomate",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "powerbi",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "powerbigov",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "powerplatform",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "powershellgallery",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "pphosted",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "practiscore",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "prattwhitney",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "prismaaccessgov",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "prodemand",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "progressive",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "proofpoint",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "protonmail",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "protopage",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "pttportal",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "public-trust",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "purpleair",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "qtcm",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "qualitycampus4",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "qualtrics",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "qualys",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "quizlet",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "quovadisglobal",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rackcdn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "radiancetech",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rand",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rapidsos",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "raytheon",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rcas",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "readytalk",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "recaptcha",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "recordedfuture",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "redhat",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "redteamwx",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "regfox",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rememberthemilk",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "repairlinkshop",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "replicacyber",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "restorationhardware",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rhcorp",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rhombuspower",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "riversideresearch",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rockinattherock",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rollcall",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rollsroycegov",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rss2json",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rtlogic",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "rtx",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "runspaceforce",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ryanair",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "s-microsoft",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sa-techinc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sabelgov",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "saberastro",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "safeharbors",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "safvirtual",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "saic",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "salesforce",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "salesforceliveagent",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sapns2",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "saratoga-weather",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sas",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "scldigital",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "scorm",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "scportal",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "scterraindash",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sdataplab",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sdcvisit",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sdxcentral",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sectigo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "securidgov",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "securityonion",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "seekingalpha",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "seicdevops",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "serdp-estcp",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "serverdata",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "servicenow",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "servicenowservices",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sfbassets",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sharepoint",
        "z": [
            "us",
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sharepoint-mil",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sharepointonline",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "siemens",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "signal",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "signalr",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sikorsky",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "simplify3d",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "siriusxm",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "skillport",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "skillwsa",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "skype",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "skypeassets",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "skypeforbusiness",
        "z": [
            "us",
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "skyvector",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "slack-gov",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "slrscmweb",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "snort",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sofapps",
        "z": [
            "net",
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "solarwinds",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "solidstatescientific",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sosi",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "southwest",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "spa",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "spacelegalissues",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "spacex",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "speedtest",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "spglobal",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "spirit",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "splunk",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "springfield-armory",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ss2",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "stackoverflow",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "stactionpro",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "studentclearinghouse",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "successfactors",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "supsalv",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "surveymonkey",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "survice",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sway",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sway-cdn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sway-extensions",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "symauth",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "symcb",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "symcd",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "syncada",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "sysco",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "t-mobile",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tableau",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tableausoftware",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tacticalgear",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tactics-training",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tanium",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tapevents",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "taptechlab",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "targets",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tasccfc-sso",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tcmis",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "team-logic",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "teambespin",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tenor",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "test-sad-u",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "texnet2",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "thawte",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "thecmp",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "theoptimalcloud",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "thirdgenerationshootingsupply",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "thomsonreuters",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ticketfly",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ticketmaster",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tiqcdn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tlo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "topvue",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tornadocentral",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "trackvia",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "trafficmanager",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "trailhead",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "trainingsoftware",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "travelocity",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "trellix",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "trello",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tricareonline",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "trinity-health",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "trivago",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "truststack",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tsi",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ttpoll",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "tucsonendocrine",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "turningtechnologies",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "twimg",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "twitter",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "twosixlabs",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "twosixtech",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "typekit",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "udemy",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "udemycdn",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "uhc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ui-icon",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ulalaunch",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ultipro",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "ultiproworkplace",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "unifieddatalibrary",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "united",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "unitedhealthgroup",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "uniys",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "unspaceforce",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "updatenode",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "usafmarathon",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "usaftechconnect",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "usafvirtual",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "usalearning",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "usbank",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "uservoice",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "usfosha",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "usgovcloudapi",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "usgovtrafficmanager",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "uship",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "usnews",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "utc",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "vbrick",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "vectrus",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "verisign",
        "z": [
            "com",
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "veritas",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "verizon",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "verizonbusiness",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "verizonenterprise",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "verizonwireless",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "versar",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "viasatgov",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "viasatgsd",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "vimeo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "virtualearth",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "virustotal",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "visa",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "visa3dsecure",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "visaprepaidprocessing",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "visualstudio",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "vitapowered",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "vmware",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "vrbo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "vsac",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "vzbi",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "vzw",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "vzwcorp",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "waltherarms",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wam-server8",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "warmart",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wayfair",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "waypointoutcomes",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wbx2",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "webex",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "webinar",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wellsfargo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "werally",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "westlaw",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "westmarine",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "whatsapp",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wheelertools",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "whispersystems",
        "z": [
            "org"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "whiteoakarmament",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "whois",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "windows",
        "z": [
            "com",
            "net",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "windows-ppe",
        "z": [
            "net"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "windowsazure",
        "z": [
            "com",
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "windowsupdate",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "windy",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "withgoogle",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wmd-dt",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wolkenservicedesk",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wordhippo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wright-pathuniversity",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wunderground",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wunderlist",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wyday",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wyleweb",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "wyndhamhotels",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "xfinity",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "xo",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "xsb",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "yammer",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "yammerusercontent",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "yardiaspla2",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "yardione",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "zdassets",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "zendesk",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "zoom",
        "z": [
            "us"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "zoomgov",
        "z": [
            "com"
        ]
    },
    {
        "x": [
            "*"
        ],
        "y": "zopim",
        "z": [
            "com"
        ]
    }
]
