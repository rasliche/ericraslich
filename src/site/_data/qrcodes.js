const QRCode = require('qrcode')

// QR Code Options
const good = {
    urlString: '/api/good-feedback',
    options: {
        errorCorrectionLevel: 'H',
        margin: 2,
        color: {
            light: '#000000ff',
            dark: '#33dd50ff'
        }
    }
}
const okay = {
    urlString: '/api/okay-feedback',
    options: {
        errorCorrectionLevel: 'H',
        margin: 2,
        color: {
            light: '#000000ff',
            dark: '#f3f711ff'
        }
    }
}

const poor = {
    urlString: '/api/poor-feedback',
    options: {
        errorCorrectionLevel: 'H',
        margin: 2,
        color: {
            light: '#000000ff',
            dark: '#ff0000ff'
        }
    }
}

async function buildQRCodeDataURL({urlString, options}) {
    return QRCode.toDataURL(urlString, options)
}

module.exports = async function() {
    const goodUrl = await buildQRCodeDataURL(good)
    const okayUrl = await buildQRCodeDataURL(okay)
    const poorUrl = await buildQRCodeDataURL(poor)

    return {
        test: 'test',
        goodUrl,
        okayUrl,
        poorUrl,
    }
}
