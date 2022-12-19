const QRCode = require('qrcode')

// QR Code Generation
options = {
    errorCorrectionLevel: 'H',
    color: {
        light: '#000000ff',
        dark: '#ffffffff'
    }
}

const goodUrl = QRCode.toDataURL('/api/feedback-good', options, (error, url) => {
    if (error) {
        console.log(error)
    }
    console.log(url)
    return url
})

// const okayUrl = QRCode.toDataURL('/api/feedback-okay', options, (error, url) => {
//     if (error) {
//         console.log(error)
//     }
//     return url
// })

// const poorUrl = QRCode.toDataURL('/api/feedback-poor', options, (error, url) => {
//     if (error) {
//         console.log(error)
//     }
//     return url
// })

module.exports = {
    test: 'test',
    goodUrl: goodUrl || 'shouldBeTheGoodUrl',
    // okayUrl,
    // poorUrl
}
