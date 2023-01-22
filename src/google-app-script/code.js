/**
 * @param {number} unixTimeInMillisecods
 */
function japaneseDate(unixTimeInMillisecods = new Date().getTime()) {
    return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(unixTimeInMillisecods));
}

console.log(japaneseDate())