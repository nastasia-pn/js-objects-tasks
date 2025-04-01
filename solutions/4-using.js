// BEGIN
export default function getDomainInfo(url) {
    let scheme = 'http'; 
    let name = url;

    if (url.startsWith('http://')) {
        scheme = 'http';
        name = url.replace('http://', '');
    } else if (url.startsWith('https://')) {
        scheme = 'https';
        name = url.replace('https://', '');
    }
    return {
        scheme,
        name,
    };
}
// END